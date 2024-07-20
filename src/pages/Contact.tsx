import React from "react";
import EmailForm from "../components/contact/EmailForm";
import PageTitle from "../components/PageTitle";

function Contact() {
  return (
    <>
      {/* Background */}
      <div
        className="bg-show5 h-screen w-screen fixed -z-50
                   bg-cover bg-no-repeat bg-[70%] md:bg-bottom"
      />
      <PageTitle title={"Contact"} />

      <div
        className="w-screen grid place-items-center justify-center text-white mt-16 mb-32
                        space-y-4 space-x-8 animate-fadeInSlide"
      >
        {/* Text */}
        <h1 className="text-3xl font-bold">
          For all formal inquiries, bookings, and more, contact me using the
          form:
        </h1>
        <h2 className="text-xl text-gray-500">
          Note: Song collaboration requests are not accepted.
        </h2>

        <div className="h-4" />

        {/* Form */}
        <EmailForm />
      </div>
    </>
  );
}

export default Contact;
