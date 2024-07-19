import React from "react";
import EmailForm from "../components/contact/EmailForm";
import PageTitle from "../components/PageTitle";

function Contact() {
  return (
    <>
      {/* Background */}
      <div
        className="h-screen w-screen bg-show2 fixed -z-50
                   bg-cover bg-no-repeat bg-[70%] md:bg-bottom"
      />
      <PageTitle title={"Contact"} />

      <div
        className="w-screen flex place-items-center justify-center text-white
                        space-y-8 space-x-8
                        mb-32 animate-fadeInSlide"
      >
        {/* Text */}
        <div className="grid w-[36rem] space-y-4">
          <h1 className="text-4xl font-bold">
            For all formal inquiries, bookings, and more, contact me using the
            form:
          </h1>
          <h2 className="text-xl text-gray-500">
            Note: Song collaboration requests are not accepted.
          </h2>
        </div>

        {/* Form */}
        <EmailForm />
      </div>
    </>
  );
}

export default Contact;
