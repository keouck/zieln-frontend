/* eslint-disable @next/next/no-img-element */

import { DatePicker, Form, Input } from "antd";
import { useEffect, useState } from "react";
import Image from "next/image";
import { eventsData } from "@/app/data/eventsData";
import dayjs from "dayjs";
import useFetch from "@/app/hooks/useFetch";

interface FormValues {
  eventName: string;
  eventAddress: string;
  eventDate: string;
  eventTime: string;
  company: string;
  eventDescription: string;
  registration_link: string;
  payment_link: string;
}

interface EditEventProps {
  eventId: number;
}

const EditEvent = ({ eventId }: EditEventProps) => {
  console.log("hiii", eventId);
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<FormValues>({
    eventName: "",
    eventAddress: "",
    eventDate: "",
    eventTime: "",
    company: "",
    eventDescription: "",
    registration_link: "",
    payment_link: ""
  });

  const [eventLogoName, setEventLogoName] = useState<string | null>(null);
  const [eventLogoPreview, setEventLogoPreview] = useState<string | null>(null);
  const [eventBannerName, setEventBannerName] = useState<string | null>(null);
  const [eventBannerPreview, setEventBannerPreview] = useState<string | null>(
    null
  );
  const {
    data: eventData,
    loading: eventLoading,
    error: eventError,
    update
  } = useFetch<any>(`/events/${eventId}?populate=*`, true);


  useEffect(() => {
    // Fetch event data from static eventsData

    if (eventData) {
      let event = eventData.data.attributes;
      const initialValues = {
        eventName: event.title,
        eventAddress: event.location,
        eventDate: event.date, // Left uninitialized
        eventTime: "", // Left uninitialized
        company: event.organization_name, // Assuming company name is not available in event data
        eventDescription: event.description, // Assuming description is not available in event data
        registration_link: event.registration_link,
        payment_link: event.payment_link
      };

      setFormValues(initialValues);
      form.setFieldsValue(initialValues);

      // Set previews for existing logos/banners if needed
      setEventLogoName(null); // Placeholder for uninitialized
      setEventBannerName(null); // Placeholder for uninitialized
    }
  }, [eventId, form, eventData]);

  const handleFormChange = (changedValues: Partial<FormValues>) => {
    setFormValues({
      ...formValues,
      ...changedValues,
    });
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "eventLogo" | "eventBanner"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (type === "eventLogo") {
          setEventLogoName(file.name);
          setEventLogoPreview(reader.result as string);
        } else {
          setEventBannerName(file.name);
          setEventBannerPreview(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        const updatedEvent = {
          ...values,
          eventLogo: eventLogoName || null,
          eventBanner: eventBannerName || null,
        };


        update({
          data: {
            title: values.eventName,
            description: values.description,
            payment_link: values.payment_link,
            registration_link: values.registration_link,
            date: values.eventDate,
            organization_name: values.company
          }
        })
         

        // Here you would normally send the updatedEvent to your backend
        // For now, just logging it to the console
        console.log("Event updated successfully:", values);
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };

  return (
    <section className="bg-light">
      {/* Description and Form */}
      <div className="component-px component-py flex justify-center">
        <div className="lg:w-[1000px]">
          <div className="bg-white border lg:border-none rounded-lg shadow-lg text-gray-900 relative overflow-hidden">
            <header className="bg-gray-100 px-6 lg:px-10 py-4 flex gap-x-2 items-center">
              <h2 className="text-2xl font-bold font-lora">Edit Event</h2>
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
                    label="Payment link"
                    name="payment_link"
                    rules={[
                      {
                        required: true,
                        message: "",
                      },
                    ]}
                  >
                    <Input
                      name="Payment link"
                      placeholder="Enter link"
                      value={formValues.payment_link}
                      onChange={(e) =>
                        handleFormChange({ payment_link: e.target.value })
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    label="Registration link"
                    name="registration_link"
                    rules={[
                      {
                        required: true,
                        message: "",
                      },
                    ]}
                  >
                    <Input
                      name="registration_link"
                      placeholder="Enter link"
                      value={formValues.registration_link}
                      onChange={(e) =>
                        handleFormChange({ registration_link: e.target.value })
                      }
                    />
                  </Form.Item>

                  <Form.Item
                    label="Event date and time"
                    name="eventDateTime"
                    rules={[
                      {
                        required: true,
                        message: "Please select the event date and time",
                      },
                    ]}
                  >
                    <DatePicker
                      showTime
                      format="YYYY-MM-DD HH:mm:ss"
                      className="w-full"
                      onChange={(date) => {
                        const formattedDate = date
                          ? dayjs(date).format("YYYY-MM-DD HH:mm:ss")
                          : "";
                        handleFormChange({ eventDate: formattedDate });
                      }}
                    />
                  </Form.Item>

                  <Form.Item label="Company / Organization" name="company">
                    <Input
                      name="company"
                      placeholder="Enter company name"
                      value={formValues.company}
                      onChange={(e) =>
                        handleFormChange({ company: e.target.value })
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
                      value={formValues.eventDescription}
                      onChange={(e) =>
                        handleFormChange({ eventDescription: e.target.value })
                      }
                    />
                  </Form.Item>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Save
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditEvent;
