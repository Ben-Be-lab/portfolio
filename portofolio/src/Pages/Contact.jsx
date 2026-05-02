import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Server error. Please try again later.');
    }
  };

  return (
    <section className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Contact Me</h1>
      <p className="mb-8 text-gray-600">Have a project in mind? Let's build it together.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="email@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="What's on your mind?"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition"
        >
          {status || 'SEND MESSAGE'}
        </button>
        
        {status && <p className="mt-4 text-sm font-medium text-blue-600">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;