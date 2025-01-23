import React from 'react';
import { useForm } from 'react-hook-form';

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(`Gracias por tu mensaje, ${data.name}!`);
    console.log(data);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contáctanos</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            type="text"
            id="name"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            {...register('name', { required: 'El nombre es obligatorio' })}
          />
          {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            {...register('email', {
              required: 'El correo electrónico es obligatorio',
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Correo no válido',
              },
            })}
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Mensaje</label>
          <textarea
            id="message"
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            rows="4"
            {...register('message', { required: 'El mensaje es obligatorio' })}
          ></textarea>
          {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
        </div>
        <button type="submit" className="btn btn-primary w-100">Enviar</button>
      </form>
    </div>
  );
}

export default ContactForm;
