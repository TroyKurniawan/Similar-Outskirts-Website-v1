import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function EmailForm() {
  // Reference to form
  const form = useRef(document.getElementById("form"));

  // Function to send email
  const sendEmail = (e: any) => {
    e.preventDefault();

    // emailjs
    //   .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
    //     publicKey: "YOUR_PUBLIC_KEY",
    //   })
    //   .then(
    //     () => {
    //       console.log("SUCCESS!");
    //     },
    //     (error) => {
    //       console.log("FAILED...", error.text);
    //     }
    //   );
  };

  return (
    <form
      className="group grid w-[48rem] h-[34rem]
                bg-slate-900 border-slate-800 border-4
                p-8 space-y-8"
      id="form"
      onSubmit={sendEmail}
    >
      <div className="grid">
        <label className="text-2xl font-bold">Name</label>
        <input className="text-black p-2" type="text" name="user_name" />
      </div>

      <div className="grid">
        <label className="text-2xl font-bold">Email</label>
        <input className="text-black p-2" type="email" name="user_email" />
      </div>

      <div className="grid">
        <label className="text-2xl font-bold">Message</label>
        <textarea className="text-black p-2" name="message" />
      </div>
      <input
        className="font-black text-4xl bg-blue-500"
        type="submit"
        value="Send"
      />
    </form>
  );
}

export default EmailForm;
