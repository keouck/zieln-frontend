"use client";

import { UploadOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Timeline } from "antd";
import Image from "next/image";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs"; // Import dayjs
import { nextStepsData } from "@/app/data/nextStepsData.";

interface FormValues {
  yourName: string;
  yourEmail: string;
  contactNumber: string;
  address: string;
  eventName: string;
  eventAddress: string;
  eventDate: string; // Separate date field
  eventTime: string; // Separate time field
  company: string;
  eventLogo: File | null;
  eventBanner: File | null;
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
    eventLogo: null,
    eventBanner: null,
    eventDescription: "",
  });

  const handleFormChange = (changedValues: Partial<FormValues>) => {
    setFormValues({
      ...formValues,
      ...changedValues,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(formValues, null, 2));
    console.log("Form submitted with values:", formValues); // Debugging line
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "eventLogo" | "eventBanner"
  ) => {
    const file = e.target.files?.[0] || null;
    setFormValues({
      ...formValues,
      [field]: file,
    });
  };

  const handleDateChange = (date: Dayjs | null, dateString: string | string[]) => {
    if (Array.isArray(dateString)) {
      // Handle the case where dateString is an array
      return;
    }
    const [datePart, timePart] = dateString.split(' ');
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
              <form onSubmit={handleSubmit}>
                <h3 className="text-lg lg:text-xl font-bold mb-4">
                  Personal Details
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
                  <Form.Item label="Your name">
                    <Input
                      name="yourName"
                      placeholder="Enter your name"
                      value={formValues.yourName}
                      onChange={(e) =>
                        handleFormChange({ yourName: e.target.value })
                      }
                    />
                  </Form.Item>

                  <Form.Item label="Your email">
                    <Input
                      name="yourEmail"
                      placeholder="Enter your email"
                      value={formValues.yourEmail}
                      onChange={(e) =>
                        handleFormChange({ yourEmail: e.target.value })
                      }
                    />
                  </Form.Item>

                  <Form.Item label="Contact number">
                    <Input
                      name="contactNumber"
                      placeholder="Enter your contact number"
                      value={formValues.contactNumber}
                      onChange={(e) =>
                        handleFormChange({ contactNumber: e.target.value })
                      }
                    />
                  </Form.Item>

                  <Form.Item label="Your Address">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <Form.Item label="Event name">
                    <Input
                      name="eventName"
                      placeholder="Enter event name"
                      value={formValues.eventName}
                      onChange={(e) =>
                        handleFormChange({ eventName: e.target.value })
                      }
                    />
                  </Form.Item>

                  <Form.Item label="Event holding address">
                    <Input
                      name="eventAddress"
                      placeholder="Enter event holding address"
                      value={formValues.eventAddress}
                      onChange={(e) =>
                        handleFormChange({ eventAddress: e.target.value })
                      }
                    />
                  </Form.Item>

                  <Form.Item label="Date and time">
                    <DatePicker
                      showTime
                      className="w-full"
                      onChange={handleDateChange}
                      format="YYYY-MM-DD HH:mm"
                    />
                  </Form.Item>

                  <Form.Item label="Company">
                    <Input
                      name="company"
                      placeholder="Enter your company"
                      value={formValues.company}
                      onChange={(e) =>
                        handleFormChange({ company: e.target.value })
                      }
                    />
                  </Form.Item>

                  <Form.Item label="Event/Organization logo">
                    <input
                      type="file"
                      name="eventLogo"
                      onChange={(e) => handleFileChange(e, "eventLogo")}
                      className=""
                    />
                  </Form.Item>

                  <Form.Item label="Event banner">
                    <input
                      type="file"
                      name="eventBanner"
                      onChange={(e) => handleFileChange(e, "eventBanner")}
                    />
                  </Form.Item>

                  <Form.Item
                    label="Event description"
                    className="mb-8 col-span-2"
                  >
                    <Input.TextArea
                      name="eventDescription"
                      rows={4}
                      placeholder="Enter event description"
                      value={formValues.eventDescription}
                      onChange={(e) =>
                        handleFormChange({ eventDescription: e.target.value })
                      }
                    />
                  </Form.Item>
                </div>

                <button
                  type="submit"
                  className="bg-primary py-2 rounded-lg w-full text-white lg:text-lg"
                >
                  Submit
                </button>
                <p className="mt-6 text-sm text-gray-500">
                  If you have any queries, please contact us at:
                  contact@example.com
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
