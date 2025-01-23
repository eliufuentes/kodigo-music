import React from 'react';
import { useForm } from 'react-hook-form';

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert(`Message sent: ${JSON.stringify(data)}`);
  };

  return (
    <div className="container my-5">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            className={`form-control ${errors.name && 'is-invalid'}`}
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email && 'is-invalid'}`}
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className={`form-control ${errors.message && 'is-invalid'}`}
            {...register('message', { required: 'Message is required' })}
          ></textarea>
          {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
