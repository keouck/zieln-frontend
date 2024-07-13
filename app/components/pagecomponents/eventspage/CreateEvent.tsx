"use client";

import { nextStepsData } from "@/app/data/nextStepsData.";
import { DatePicker, Form, Input, Timeline } from "antd";
import { Dayjs } from "dayjs";
import Image from "next/image";
import { useState } from "react";

interface FormValues {
  yourName: string;
  yourEmail: string;
  contactNumber: string;
  address: string;
  eventName: string;
  eventAddress: string;
  eventDate: string;
  eventTime: string;
  company: string;
  eventDescription: string;
}

export default function CreateEvent() {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<FormValues>({
    yourName: "",
    yourEmail: "",
    contactNumber: "",
    address: "",
    eventName: "",
    eventAddress: "",
    eventDate: "",
    eventTime: "",
    company: "",
    eventDescription: "",
  });

  const [eventLogo, setEventLogo] = useState<File | null>(null);
  const [eventBanner, setEventBanner] = useState<File | null>(null);

  const [eventLogoPreview, setEventLogoPreview] = useState<string | null>(null);
  const [eventBannerPreview, setEventBannerPreview] = useState<string | null>(
    null
  );
  const [eventLogoName, setEventLogoName] = useState<string | null>(null);
  const [eventBannerName, setEventBannerName] = useState<string | null>(null);

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
          console.log("Form submitted with values:", submittedValues);
          // Perform your submission logic here
        });
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
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
    const [datePart, timePart] = dateString.split(" ");
    setFormValues({
      ...formValues,
      eventDate: datePart,
      eventTime: timePart,
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
        <div className="relative component-px component-py">
          <h1 className="text-2xl lg:text-5xl font-bold mb-2 md:mb-4">
            Create Your Own Events
          </h1>
          <p className="md:text-xl mb-3 md:mb-6 max-w-xl">
            Start planning today and make your event unforgettable. From small
            gatherings to grand celebrations, we’ve got you covered.
          </p>
        </div>
      </div>

      {/* Description and Form */}
      <div className="component-px component-py grid lg:grid-cols-2 gap-8">
        <div>
          <div className="lg:sticky lg:top-40">
            <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-8">
              What will be the next step?
            </h2>
            <Timeline>
              {nextStepsData.map((item) => (
                <Timeline.Item color="black" key={item.step}>
                  <h3 className="text-lg lg:text-xl font-medium">
                    {item.step}. {item.title}
                  </h3>
                  <p>{item.description}</p>
                </Timeline.Item>
              ))}
            </Timeline>
          </div>
        </div>

        <div>
          <div className="lg:-mt-40 bg-white border lg:border-none rounded-lg shadow-lg text-gray-900 relative overflow-hidden">
            <header className="bg-gray-100 px-6 lg:px-10 py-4 flex gap-x-2 items-center">
              <Image
                src="/logo.png"
                alt=""
                className="w-8 lg:w-12 rounded-full"
                width={100}
                height={100}
              />
              <h2 className="text-2xl font-bold">Create Event</h2>
            </header>

            <div className="p-6 lg:p-10">
              <h3 className="text-lg lg:text-xl font-bold mb-4">
                Personal Details
              </h3>
              <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
                  <Form.Item
                    label="Your name"
                    name="yourName"
                    rules={[
                      { required: true, message: "Please enter your name" },
                    ]}
                  >
                    <Input
                      name="yourName"
                      placeholder="Enter your name"
                      value={formValues.yourName}
                      onChange={(e) =>
                        handleFormChange({ yourName: e.target.value })
                      }
                    />
                  </Form.Item>

                  <Form.Item
                    label="Your email"
                    name="yourEmail"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Please enter a valid email" },
                    ]}
                  >
                    <Input
                      name="yourEmail"
                      placeholder="Enter your email"
                      value={formValues.yourEmail}
                      onChange={(e) =>
                        handleFormChange({ yourEmail: e.target.value })
                      }
                    />
                  </Form.Item>

                  <Form.Item
                    label="Contact number"
                    name="contactNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your contact number",
                      },
                    ]}
                  >
                    <Input
                      name="contactNumber"
                      placeholder="Enter your contact number"
                      value={formValues.contactNumber}
                      onChange={(e) =>
                        handleFormChange({ contactNumber: e.target.value })
                      }
                    />
                  </Form.Item>

                  <Form.Item
                    label="Address"
                    name="address"
                    rules={[
                      { required: true, message: "Please enter your address" },
                    ]}
                  >
                    <Input
                      name="address"
                      placeholder="Enter your address"
                      value={formValues.address}
                      onChange={(e) =>
                        handleFormChange({ address: e.target.value })
                      }
                    />
                  </Form.Item>
                </div>

                <h3 className="text-lg lg:text-xl font-bold mb-4">
                  Event Details
                </h3>
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
                      value={formValues.eventName}
                      onChange={(e) =>
                        handleFormChange({ eventName: e.target.value })
                      }
                    />
                  </Form.Item>

                  <Form.Item
                    label="Event address"
                    name="eventAddress"
                    rules={[
                      {
                        required: true,
                        message: "Please enter the event address",
                      },
                    ]}
                  >
                    <Input
                      name="eventAddress"
                      placeholder="Enter event address"
                      value={formValues.eventAddress}
                      onChange={(e) =>
                        handleFormChange({ eventAddress: e.target.value })
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
                      showTime
                      format="YYYY-MM-DD HH:mm:ss"
                      onChange={handleDateChange}
                      className="w-full"
                    />
                  </Form.Item>

                  <Form.Item
                    label="Company"
                    name="company"
                    rules={[
                      {
                        required: true,
                        message: "Please enter the company name",
                      },
                    ]}
                  >
                    <Input
                      name="company"
                      placeholder="Enter company name"
                      value={formValues.company}
                      onChange={(e) =>
                        handleFormChange({ company: e.target.value })
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
                      value={formValues.eventDescription}
                      onChange={(e) =>
                        handleFormChange({ eventDescription: e.target.value })
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
