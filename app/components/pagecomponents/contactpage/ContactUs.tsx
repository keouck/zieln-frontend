import React from "react";
import ContactDetail from "./ContactDetail";
import ContactForm from "./ContactForm";

export default function ContactUs() {
  return (
    <section className="w-full bg-gray-900 text-white flex items-center justify-center">
      <div className="component-py component-px grid lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Contact Details */}
        <div className="flex items-center">
          <ContactDetail />
        </div>

        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
