import React from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_fy2fsy1', 'template_p53pnf9', e.target, 'user_SsZQXXCtVHHDUngpb7ll4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (

   <div className="min-h-screen flex justify-center">

    <form className="flex flex-col pt-10 w-96" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />

      <label>Name</label>
      <input type="text" name="user_name" />

      <label>Email</label>
      <input type="email" name="user_email" />

      <label>Message</label>
      <textarea name="message" />

      <button className="btn m-0 mt-2" type="submit" value="Send"> send. </button>
    </form>

    </div> 
  );
}
