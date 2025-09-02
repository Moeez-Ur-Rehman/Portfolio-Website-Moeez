import React, { useState } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, subject, message } = formData;

    // Create mailto link
    const mailtoLink = `mailto:moiz1rehman@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'moiz1rehman@gmail.com',
      link: 'mailto:moiz1rehman@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+92 (332) 482-5400',
      link: 'tel:923324825400'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Lahore, Pakistan',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      url: 'https://github.com/Moeez-Ur-Rehman'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/moeez-ur-rehman/'
    }
    
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? I'm currently available for freelance work 
            and open to discussing full-time opportunities with innovative teams.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-lg border border-slate-300 w-full"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-lg border border-slate-300 w-full"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg border border-slate-300 w-full"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg border border-slate-300 w-full"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg border border-slate-300 w-full"
                required
              />
              <button
                type="submit"
                className="w-full px-8 py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Get In Touch</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                I typically respond within 24 hours. Whether you have a specific project 
                in mind or just want to connect, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-200">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{info.label}</p>
                    <p className="text-slate-800 font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-slate-200">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;