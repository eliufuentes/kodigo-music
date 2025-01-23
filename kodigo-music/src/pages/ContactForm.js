import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactForm() {
  return (
    <section id="contact" className="container my-5">
      <h2 className="text-center mb-4">Contactanos</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="name" placeholder="Tu nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Comentario</label>
          <textarea className="form-control" id="message" rows="3" placeholder="Comentario"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </section>
  );
}

export default ContactForm;
