import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import axios from "axios";
import { pageVariants, pageTransition } from "../../Style/Animations";
import "./contact.css";

const Contact = () => {
  const [success, setSuccess] = useState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });

  const onSubmit = ({ name, email, subject, message }) => {
    axios
      .post(
        "https://europe-west3-fluted-bee-304317.cloudfunctions.net/send-mail-yahoo",
        {
          to: email,
          name,
          subject,
          message,
        }
      )
      .then((response) => {
        console.log(response.data);
        console.log("Success!");
        setSuccess(true);
        reset();
      })
      .catch((error) => {
        setSuccess(false);
        console.log(error);
        console.log("Something went wrong");
      });
  };

  return (
    <motion.div
      variants={pageVariants}
      transition={pageTransition}
      initial="initial"
      animate="in"
      exit="out"
      className="contactMe"
    >
      <div className="contactMe-content">
        <h1>Reach out to me</h1>
        <p>
          As a junior frontend developer I am interested in opportunities that
          provides me with the chance of learning modern frontend development by
          doing. However, please do not hesitate to hit me up if you have any
          other questions. Constructive feedback on my work is greatly
          appreciated.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        {success && <p style={{ color: "green" }}>Email sent</p>}
        {success === false && <p style={{ color: "red" }}>An error occured</p>}
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input-name form-style"
          ref={register({ required: true })}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="email form-style"
          ref={register({ required: true })}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="subject form-style"
          ref={register({ required: true })}
        />
        <textarea
          name="message"
          placeholder="Message"
          className="message form-style"
          ref={register({ required: true })}
        />
        <input
          type="submit"
          value="Send"
          className={`submit form-style ${isValid && "active-button"}`}
        />
      </form>
    </motion.div>
  );
};

export default Contact;
