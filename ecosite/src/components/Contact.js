import React from "react";
import emailjs from "emailjs-com";
function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_90a5bq9",
      "template_7h06wzn",
      e.target,
      "EaLEXQ85BwzYUAjF8"
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
}
export const Contact = () => {
  return (
    <div
      className="container border"
      style={{
        marginTop: "50px",
        width: "50%",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 style={{ marginTop: "25px" }}>Contact Form</h1>
      <form
        className="row"
        style={{ margin: "25px 85px 75px 100px" }}
        onSubmit={{ sendEmail }}
      >
        <label>Name</label>
        <input type="text" name="name" className="form-control" />

        <label>Email</label>
        <input type="email" name="user_email" className="form-control" />

        <label>Message</label>
        <textarea name="message" rows="4" className="form-control" />
        <input
          type="submit"
          value="Send"
          className="form-control btn btn-primary"
          style={{ marginTop: "30px" }}
        />
      </form>
    </div>
  );
};
export default Contact;
