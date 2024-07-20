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
        className="w-screen grid place-items-center justify-center text-white mt-8 md:mt-16 mb-32
                        space-y-4 animate-fadeInSlide"
      >
        {/* Text */}
        <div className="w-96 md:w-[30rem] lg:w-auto grid space-y-4 place-items-center text-center">
          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">
            For all formal inquiries, bookings, and more, contact me using the
            form:
          </h1>
          <h2 className="w-96 md:w-[30rem] text-sm md:text-base lg:text-xl text-gray-500 text-center">
            Note: Song collaboration requests are not accepted.
          </h2>
        </div>

        <div className="h-4" />

        {/* Form */}
        <EmailForm />
      </div>
    </>
  );
}

export default Contact;
