"use client";

import React, { useState } from 'react';
import { clsx } from 'clsx';
import styles from './ContactForm.module.sass';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <div className={styles.formconts}>
      <div className="mt-3">
        <form action="https://formspree.io/f/mrbzvrla" method="POST">
          <div className="form-group mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="_replyto"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-lg">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
