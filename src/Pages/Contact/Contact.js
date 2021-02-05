import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../Style/Animations";
import "./contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
    reset();
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
      <div className="text">
        <h1>Contact me</h1>
        <p>
          As a junior frontend developer I am intersetd in opportunities that
          provides me whit the chance to learn and practice modent frontend
          developemnt by doing. However, please do not hesitate to hit me up if
          you have any other question. I would also be very happy to know your
          opinion and get your cponstruvtive feedback about my work.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input-name form-style"
          ref={register({ required: true })}
        />
        <input
          type="email"
          name="Email"
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
          isDirty
          className={`submit form-style ${isValid && "active"}`}
        />
      </form>
    </motion.div>
  );
};

export default Contact;
