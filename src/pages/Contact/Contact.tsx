import React from "react";
import { FC } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

const Contact: FC = () => {
  return (
    <section className="flex justify-evenly items-center max-lg:flex-col mb-28">
      <ContactForm />

      <SocialMedia />
    </section>
  )
}

export default Contact;