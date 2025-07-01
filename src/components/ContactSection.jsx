import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_t3zoyp9',          // ✅ Your EmailJS service ID
        'template_b1q9zz7',         // ✅ Your EmailJS template ID
        form.current,
        'nmLsCPB2yFv6T-AIb'         // ✅ Your public key
      )
      .then(
        () => {
          setStatus('SUCCESS');
          form.current.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setStatus('FAILED');
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-4xl mx-auto text-center space-y-10" data-aos="fade-up">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-yellow-300 via-orange-500 to-red-500 text-transparent bg-clip-text drop-shadow-xl">
          Get in Touch
        </h2>

        <p className="text-lg text-white/80 max-w-xl mx-auto">
          Have questions or want to collaborate with{' '}
          <span className="text-orange-500 font-semibold">EtherIgnis</span>? Let’s connect!
        </p>

        <div className="bg-white/5 backdrop-blur-md border border-orange-500/30 shadow-xl rounded-2xl p-8 md:p-12 max-w-2xl mx-auto transition-all duration-300 hover:shadow-orange-500/20">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-md bg-black/40 text-white border border-orange-500/20 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-md bg-black/40 text-white border border-orange-500/20 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-md h-40 bg-black/40 text-white border border-orange-500/20 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-white rounded-lg font-medium"
            >
              🚀 Send Message
            </button>
          </form>

          {status === 'SUCCESS' && (
            <p className="text-green-400 mt-4 font-medium">✅ Message sent successfully!</p>
          )}
          {status === 'FAILED' && (
            <p className="text-red-500 mt-4 font-medium">❌ Failed to send. Please check your email address and try again.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
