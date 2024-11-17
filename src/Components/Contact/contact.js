import React, { useRef } from "react";
import "./contact.css";
import linkedInIcon from "../../Assets/linkedin-logo.webp";
import gitHubIcon from "../../Assets/github-logo.png";
import instagramIcon from "../../Assets/instagram.png";
import youtubeIcon from "../../Assets/youtube.png";
import emailjs from "@emailjs/browser";
const Contact = () => {

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

  const formData = new FormData(form.current);
  const name = formData.get("from_name").trim();
  const email = formData.get("from_email").trim();
  const message = formData.get("message").trim();

    if(!name || !email || !message){
      alert("Please fill out all fields before submitting the form.");
      return;
    }
    emailjs
      .sendForm("service_co3d29b", "template_bnjw0xm", form.current, {
        publicKey: "eI8mGbYvQvsrTkSgg",
      })
      .then(
        () => {
          console.log("SUCCESS!");
         form.current.reset();
          alert("Your message has been sent successfully! Thank you for reaching out.")
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send your message. Please try again later.");
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitile">Contact Me</h1>
        <span className="contactDesc"> 
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name='from_name'/>
          <input type="email" className="email" placeholder="Your Email" name='from_email' />
          <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links"> 
            <a href="https://www.linkedin.com/in/kaviyarasan-v-230287301/"><img src={linkedInIcon} alt="linkedIn" className="link" /></a>
            <a href="https://github.com/kaviyarasanvm02"> <img src={gitHubIcon} alt="gitHub" className="link" /></a>
           <a href="https://www.instagram.com/kaviyarasan.vm/"> <img src={instagramIcon} alt="instagram" className="link" /></a>
            <a href="https://www.youtube.com/@kaviyarasan04"><img src={youtubeIcon} alt="youtube" className="link" /></a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
