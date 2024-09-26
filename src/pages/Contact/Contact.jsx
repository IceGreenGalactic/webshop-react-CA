import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

// Define Yup validation schema
const schema = yup.object({
  fullName: yup.string().min(3, 'Name must be at least 3 characters').required('Full Name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  zipCode: yup.string().matches(/^\d{5}$/, 'Zip Code must be exactly 5 digits').required('Zip Code is required'),
}).required();

const contactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();


  // Handle form submission
  const onSubmit = (data) => {
    console.log('Form data submitted:', data);
    setTimeout(() => {
      console.log('Payment processed successfully!');
      navigate('/CheckoutSuccess');
      reset();
    }, 2000);
  };



  return (
    <div className="col-8 m-auto mt-5 card p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-1 row">
          <label htmlFor="fullName" className="col-sm-12 col-form-label">Full Name:</label>
          <div className="col-sm-8">
            <input {...register('fullName')} className="form-control" placeholder="Enter your full name" />
            <p className="text-danger">{errors.fullName?.message}</p>
          </div>
        </div>

        <div className="mb-1 row">
          <label htmlFor="email" className="col-sm-12 col-form-label">Email:</label>
          <div className="col-sm-8">
            <input {...register('email')} className="form-control" placeholder="Enter your email" />
            <p className="text-danger">{errors.email?.message}</p>
          </div>
        </div>

        <div className="mb-1 row">
          <label htmlFor="address" className="col-sm-12 col-form-label">Address:</label>
          <div className="col-sm-8">
            <input {...register('address')} className="form-control" placeholder="Enter your address" />
            <p className="text-danger">{errors.address?.message}</p>
          </div>
        </div>

        <div className="mb-1 row">
          <label htmlFor="city" className="col-sm-12 col-form-label">City:</label>
          <div className="col-sm-8">
            <input {...register('city')} className="form-control" placeholder="Enter your city" />
            <p className="text-danger">{errors.city?.message}</p>
          </div>
        </div>

        <div className="mb-1 row">
          <label htmlFor="zipCode" className="col-sm-12 col-form-label">Zip Code:</label>
          <div className="col-sm-8">
            <input {...register('zipCode')} className="form-control" placeholder="Enter your zip code" />
            <p className="text-danger">{errors.zipCode?.message}</p>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit Payment</button>
      </form>
    </div>
  );
};

export default contactForm;
