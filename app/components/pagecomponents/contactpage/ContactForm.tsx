"use client";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PrimaryButton } from "../../globalcomponents/Buttons";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    console.log("Form data:", formData);
    toast.success("Message sent successfully!");
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    });
  };

  return (
    <div className="bg-white text-black p-4 lg:p-8 rounded-xl relative overflow-hidden">
      <h2 className="text-2xl font-medium mb-4">
        We&apos;d love to hear from you! <br />
        Let&apos;s get in touch
      </h2>
      <form className="space-y-4 mt-4 lg:mt-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-500 rounded bg-gray-100 bg-opacity-50 text-black outline-none"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium mb-1" htmlFor="company">
              Company
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-500 rounded bg-gray-100 bg-opacity-50 text-black outline-none"
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-500 rounded bg-gray-100 bg-opacity-50 text-black outline-none"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium mb-1" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-500 rounded bg-gray-100 bg-opacity-50 text-black outline-none"
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="w-full">
          <label className="block text-sm font-medium mb-1" htmlFor="address">
            Address
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-500 rounded bg-gray-100 bg-opacity-50 text-black outline-none"
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-4 py-2 border border-gray-500 rounded bg-gray-100 bg-opacity-50 text-black outline-none resize-none"
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <PrimaryButton buttonName="Send Message" onClick={handleSubmit} />
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
      <div className="absolute -top-14 -right-10 w-40 h-40 border-2 border-gray-600 opacity-50 md:opacity-100 rounded-full"></div>
      <div className="absolute -top-14 -right-10 w-36 h-36 border-2 border-gray-600 opacity-50 md:opacity-100 rounded-full"></div>
      <div className="absolute -top-14 -right-10 w-32 h-32 border-2 border-gray-600 opacity-50 md:opacity-100 rounded-full"></div>
    </div>
  );
}
