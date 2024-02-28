import React from 'react';

const ContactSection = () => {
  return (
    <div className="contect_section" id="contact">
      <section className="contect_container">
        <h2
          style={{
            color: '#04ff4b',
            fontSize: '50px',
            fontFamily: 'Aladin',
          }}
        >
          Contact Us
        </h2>

        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="detail">Details:</label>
          <textarea
            id="detail"
            style={{ marginBottom: '10px' }}
            name="detail"
            rows="4"
            required
          ></textarea>

          <button type="submit">Contact</button>
        </form>
      </section>
    </div>
  );
};

export default ContactSection;
