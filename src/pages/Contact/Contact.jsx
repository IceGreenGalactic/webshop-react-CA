import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Helmet } from "react-helmet-async";

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, "Name must be at least 3 characters")
      .required("Full Name is required"),
    subject: yup
      .string()
      .min(3, "Subject must be at least 3 characters")
      .required("Subject is required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    body: yup
      .string()
      .min(3, "Message must be at least 3 characters")
      .required("Message is required"),
  })
  .required();

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);

    setTimeout(() => {
      console.log("Form submitted successfully!");
      setSuccessMessage(
        "Thank you for your message! We will get back to you soon."
      );
      reset();
    }, 2000);
  };

  return (
    <div>
      <Helmet>
        <title>Contact Us | ECCOH Webshop</title>
        <meta
          name="description"
          content="Have questions or need assistance with your order? Contact ECCOH Webshop and we will get back to you as soon as possible."
        />
        <meta
          name="keywords"
          content="ECCOH, contact, customer support, webshop, help, inquiries"
        />
        <meta property="og:title" content="Contact Us | ECCOH Webshop" />
        <meta
          property="og:description"
          content="Get in touch with ECCOH Webshop for any questions or assistance."
        />
    
      </Helmet>
      <div className="col-10 col-lg-8 m-auto">
        <div className=" mt-4 col-sm-8 m-auto ">
          <h1>Contact us!</h1>
          <p>
            We'd love to hear from you! Please fill out the form below, and
            we'll get back to you as soon as possible.
          </p>
        </div>
        <div className="col-sm-8 m-auto mt-5 card p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-1 row">
              <label htmlFor="fullName" className="col-sm-12 col-form-label">
                Full Name:
              </label>
              <div className="col-sm-10">
                <input
                  {...register("fullName")}
                  className="form-control"
                  placeholder="Enter your full name"
                />
                <p className="text-danger">{errors.fullName?.message}</p>
              </div>
            </div>

            <div className="mb-1 row">
              <label htmlFor="subject" className="col-sm-12 col-form-label">
                Subject:
              </label>
              <div className="col-sm-10">
                <input
                  {...register("subject")}
                  className="form-control"
                  placeholder="Enter the subject"
                />
                <p className="text-danger">{errors.subject?.message}</p>
              </div>
            </div>

            <div className="mb-1 row">
              <label htmlFor="email" className="col-sm-12 col-form-label">
                Email:
              </label>
              <div className="col-sm-10">
                <input
                  {...register("email")}
                  className="form-control"
                  placeholder="Enter your email"
                />
                <p className="text-danger">{errors.email?.message}</p>
              </div>
            </div>

            <div className="mb-1 row">
              <label htmlFor="body" className="col-sm-12 col-form-label">
                Message:
              </label>
              <div className="col-sm-10">
                <textarea
                  {...register("body")}
                  className="form-control"
                  placeholder="Enter your message"
                />
                <p className="text-danger">{errors.body?.message}</p>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>

          {successMessage && (
            <div className="mt-3 alert alert-success">{successMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
