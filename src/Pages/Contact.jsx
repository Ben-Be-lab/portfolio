import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// In your React Contact component:
const API_URL = 'https://your-backend-name.onrender.com/api/contact';
const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus(data.error || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('Server error. Please try again later.');
    }
  };

  return (
    <section className="min-h-screen bg-slate-950 text-slate-100 py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-400 max-w-md mx-auto">
            Have a project in mind or just want to chat? Feel free to drop a message!
          </p>
        </div>

        {/* Two-Column Layout Grid */}
        <div className="grid md:grid-cols-5 gap-12 items-start">
          
          {/* Column 1: Contact Info & Socials (Takes 2/5 columns) */}
          <div className="md:col-span-2 space-y-8 bg-slate-900/50 border border-slate-800 p-8 rounded-2xl backdrop-blur-sm">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-cyan-400">Contact Information</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm always open to discussing full-stack development roles, UI/UX design opportunities, or creative collaborations.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-slate-800/80 text-cyan-400 rounded-xl">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Email Me</p>
                  <a href="mailto:benasifiwe5@gmail.com" className="hover:text-cyan-400 transition-colors text-sm">
                    benasifiwe5@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-slate-800/80 text-cyan-400 rounded-xl">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Location</p>
                  <p className="text-sm">Kigali, Rwanda</p>
                </div>
              </div>
            </div>

            {/* Social Icons Link Block */}
            <div className="pt-6 border-t border-slate-800/80">
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-4">Connect with me</p>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 rounded-xl transition-all duration-300">
                  <FaGithub size={20} />
                </a>
                <a href="#" className="p-3 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 rounded-xl transition-all duration-300">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="p-3 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 rounded-xl transition-all duration-300">
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Form (Takes 3/5 columns) */}
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-6 bg-slate-900/30 border border-slate-800/60 p-8 rounded-2xl">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl p-3 text-sm text-slate-100 outline-none transition-colors"
                  placeholder=""
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl p-3 text-sm text-slate-100 outline-none transition-colors"
                  placeholder=""
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl p-3 text-sm text-slate-100 outline-none transition-colors"
                placeholder="Project Collaboration"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl p-3 text-sm text-slate-100 outline-none transition-colors resize-none"
                placeholder="Tell me about your ideas..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold p-4 rounded-xl transition-all duration-300 uppercase tracking-wider text-xs shadow-lg shadow-cyan-500/10 disabled:opacity-50"
            >
{status === 'sending' ? 'Sending Message...' : status === 'success' ? 'Message Sent Successfully! ✓' : 'Send Message'}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;