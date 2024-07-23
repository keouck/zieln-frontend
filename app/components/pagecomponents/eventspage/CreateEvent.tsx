"use client";

import { nextStepsData } from "@/app/data/nextStepsData.";
import useFetch from "@/app/hooks/useFetch";
import { BACKEND_URI } from "@/constant";
import { useAuth, useUser } from "@clerk/nextjs";
import { DatePicker, Form, Input, Timeline } from "antd";
import { Dayjs } from "dayjs";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

interface FormValues {
  title: string;
  description: string;
  date: string;
  location: string;
  organization_name: string;
  registration_link: string;
  payment_link: string;
}

export default function CreateEvent() {
  const { post } = useFetch("/events");
  const { post: imageUpload } = useFetch("/upload");
  const { user } = useUser();
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<FormValues>({
    title: "",
    description: "",
    date: "",
    location: "",
    organization_name: "",
    registration_link: "",
    payment_link: "",
  });

  const [eventLogo, setEventLogo] = useState<File | null>(null);
  const [eventBanner, setEventBanner] = useState<File | null>(null);

  const [eventLogoPreview, setEventLogoPreview] = useState<string | null>(null);
  const [eventBannerPreview, setEventBannerPreview] = useState<string | null>(
    null
  );
  const [eventLogoName, setEventLogoName] = useState<string | null>(null);
  const [eventBannerName, setEventBannerName] = useState<string | null>(null);

  const uploadImage = async (file: File | null): Promise<string | null> => {
    if (!file) return null;

    const formData = new FormData();
    formData.append("files", file);

    console.log(formData);
    try {
      const rawResponse: any = await fetch(BACKEND_URI + "/api/upload", {
        method: "post",
        body: formData,
      });

      const response = await rawResponse.json();
      console.log(response[0].id);
      return response[0].id; // Adjust if needed based on actual response
    } catch (error) {
      console.error("Image upload failed:", error);
      return null;
    }
  };

  const handleFormChange = (changedValues: Partial<FormValues>) => {
    setFormValues({
      ...formValues,
      ...changedValues,
    });
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        // Convert files to base64 strings
        const readFileAsDataURL = (
          file: File | null
        ): Promise<string | null> => {
          return new Promise((resolve, reject) => {
            if (!file) {
              resolve(null);
              return;
            }
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
        };

        Promise.all([
          readFileAsDataURL(eventLogo),
          readFileAsDataURL(eventBanner),
        ]).then(([eventLogoDataURL, eventBannerDataURL]) => {
          const submittedValues = {
            ...values,
            eventLogo: eventLogoDataURL,
            eventBanner: eventBannerDataURL,
          };
          handlePost(submittedValues);
          // Perform your submission logic here
        });
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };

  const handlePost = async (data?: any) => {
    
    const userId = user!.username; // Adjust based on how you get the user ID
    try {
      // Upload images and get their IDs
      const eventLogoId = await uploadImage(eventLogo);
      const eventBannerId = await uploadImage(eventBanner);

      const payload = {
        event_id: formValues?.title.replace(/\s+/g, "-").toLowerCase(), // example UID generation
        title: formValues.title,
        description: formValues.description,
        date: formValues.date,
        location: data.location,
        organization_name: data.organization_name,
        registration_link: data.registration_link,
        payment_link: data.payment_link,
        user_id: userId,
        logo: eventLogoId,
        banner: eventBannerId,
      };
      const postData: any = await post({ data: { ...payload } });
      if (postData?.data) {
        return toast.error("Failed to post opportunity.");
      }
      return toast.success("Posted opportunity successfully.");
    } catch (error) {
      return toast.error("Something went wrong!");
      // console.error("Error creating event:", error);
      // Handle error response (e.g., show an error message)
    }
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "eventLogo" | "eventBanner"
  ) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      if (field === "eventLogo") {
        setEventLogo(file);
        setEventLogoPreview(URL.createObjectURL(file));
        setEventLogoName(file.name);
      } else if (field === "eventBanner") {
        setEventBanner(file);
        setEventBannerPreview(URL.createObjectURL(file));
        setEventBannerName(file.name);
      }
    }
  };

  const handleDateChange = (
    date: Dayjs | null,
    dateString: string | string[]
  ) => {
    if (Array.isArray(dateString)) {
      // Handle the case where dateString is an array
      return;
    }
    setFormValues({
      ...formValues,
      date: dateString,
    });
  };

  return (
    <section className="bg-gray-100">
      {/* Banner */}
      <div
        className="relative bg-cover bg-center text-white h-60 lg:h-80 overflow-hidden flex items-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative w-full component-px component-py text-center flex items-center justify-center">
          <div>
            <h1 className="text-2xl lg:text-5xl font-bold mb-2 md:mb-4">
              Add Opportunity
            </h1>
          </div>
        </div>
      </div>

      {/* Description and Form */}
      <div className="component-px component-py flex justify-center">
        <div className="lg:w-[1000px]">
          <div className="lg:-mt-32 bg-white border lg:border-none rounded-lg shadow-lg text-gray-900 relative overflow-hidden">
            <header className="bg-gray-100 px-6 lg:px-10 py-4 flex gap-x-2 items-center">
              <h2 className="text-2xl font-bold font-lora">Create Event</h2>
            </header>

            <div className="p-6 lg:p-10">
              <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
                  <Form.Item
                    label="Event name"
                    name="eventName"
                    rules={[
                      {
                        required: true,
                        message: "Please enter the event name",
                      },
                    ]}
                  >
                    <Input
                      name="eventName"
                      placeholder="Enter event name"
                      value={formValues.title}
                      onChange={(e) =>
                        handleFormChange({ title: e.target.value })
                      }
                    />
                  </Form.Item>

                  <Form.Item
                    label="Event address"
                    name="location"
                    rules={[
                      {
                        required: true,
                        message: "Please enter the event address",
                      },
                    ]}
                  >
                    <Input
                      name="location"
                      placeholder="Enter event address"
                      value={formValues.location}
                      onChange={(e) =>
                        handleFormChange({ location: e.target.value })
                      }
                    />
                  </Form.Item>

                  <Form.Item
                    label="Event date and time"
                    name="eventDateTime"
                    rules={[
                      {
                        required: true,
                        message: "Please select event date and time",
                      },
                    ]}
                  >
                    <DatePicker
                      format="YYYY-MM-DD"
                      onChange={handleDateChange}
                      className="w-full"
                    />
                  </Form.Item>

                  <Form.Item
                    label="Organization"
                    name="organization_name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter the organization_name name",
                      },
                    ]}
                  >
                    <Input
                      name="organization_name"
                      placeholder="Enter organization_name name"
                      value={formValues.organization_name}
                      onChange={(e) =>
                        handleFormChange({ organization_name: e.target.value })
                      }
                    />
                  </Form.Item>

                  <Form.Item label="Event Logo">
                    <label className="block cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={(e) => handleFileChange(e, "eventLogo")}
                      />
                      <div className="border border-gray-300 p-2 text-gray-700">
                        {eventLogoName || "Choose event logo"}
                      </div>
                      {eventLogoPreview && (
                        <div className="mt-2">
                          <Image
                            src={eventLogoPreview}
                            alt="Event Logo Preview"
                            width={100}
                            height={100}
                            className="rounded"
                          />
                        </div>
                      )}
                    </label>
                  </Form.Item>

                  <Form.Item label="Event Banner">
                    <label className="block cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={(e) => handleFileChange(e, "eventBanner")}
                      />
                      <div className="border border-gray-300 p-2 text-gray-700">
                        {eventBannerName || "Choose event banner"}
                      </div>
                      {eventBannerPreview && (
                        <div className="mt-2">
                          <Image
                            src={eventBannerPreview}
                            alt="Event Banner Preview"
                            width={100}
                            height={100}
                            className="rounded"
                          />
                        </div>
                      )}
                    </label>
                  </Form.Item>

                  <Form.Item
                    label="Registration Link"
                    name="registration_link"
                    rules={[
                      {
                        required: true,
                        message: "Please enter the registration link",
                        // pattern for link and it must be url
                        pattern: new RegExp(/^(http|https):\/\/[^ "]+$/),
                      },
                    ]}
                  >
                    <Input
                      name="registration_link"
                      placeholder="Enter registration link"
                      value={formValues.registration_link}
                      onChange={(e) =>
                        handleFormChange({ registration_link: e.target.value })
                      }
                    />
                  </Form.Item>

                  <Form.Item
                    label="Payment Link"
                    name="payment_link"
                    rules={[
                      {
                        message: "Please enter the payment link",
                        // pattern for link and it must be url
                        pattern: new RegExp(/^(http|https):\/\/[^ "]+$/),
                      },
                    ]}
                  >
                    <Input
                      name="payment_link"
                      placeholder="Enter payment link"
                      value={formValues.payment_link}
                      onChange={(e) =>
                        handleFormChange({ payment_link: e.target.value })
                      }
                    />
                  </Form.Item>

                  <Form.Item
                    label="Event Description"
                    name="eventDescription"
                    className="lg:col-span-2"
                    rules={[
                      {
                        required: true,
                        message: "Please enter a description for the event",
                      },
                    ]}
                  >
                    <Input.TextArea
                      name="eventDescription"
                      placeholder="Enter event description"
                      rows={5}
                      value={formValues.description}
                      onChange={(e) =>
                        handleFormChange({ description: e.target.value })
                      }
                    />
                  </Form.Item>
                </div>
                <button
                  type="submit"
                  className="bg-primary w-full text-white px-4 py-2 rounded-lg"
                >
                  Submit
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
