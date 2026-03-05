import React from "react";
import { Button } from "./ui/Button";
import { Input, TextArea } from "./ui/Input";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const whatsappMessage = `Hello FOVEC, I would like to make an enquiry.%0A%0A*Name:* ${formData.firstName} ${formData.lastName}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;

    // Redirect to WhatsApp API
    const phoneNumber = "2348029162696";
    window.open(
      `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 shadow-2xl rounded-3xl overflow-hidden bg-white">
          {/* Left: Contact Form */}
          <div className="p-10 lg:p-16">
            <h2 className="text-3xl font-serif font-bold text-primary mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Send us a message to start your journey.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  id="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Last Name"
                  id="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <Input
                label="Email Address"
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                label="Phone Number"
                id="phone"
                type="tel"
                placeholder="+234 800 000 0000"
                value={formData.phone}
                onChange={handleChange}
              />
              <TextArea
                label="Message"
                id="message"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button
                type="submit"
                variant="primary"
                className="w-full justify-center mt-2"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Right: Info & Map */}
          <div className="bg-primary p-10 lg:p-16 text-white relative flex flex-col justify-between">
            {/* Contact Info */}
            <div className="space-y-6 relative z-10">
              <h3 className="text-xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="flex items-start space-x-4">
                <MapPin className="text-accent mt-1" />
                <div>
                  <p className="font-bold">Head Office</p>
                  <p className="text-blue-100 text-sm">
                    Ground floor phase 3,Federal Secretariat
                    <br />
                    Abuja, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="text-accent" />
                <p className="text-blue-100">+234 802 916 2696, +234 803 352 5546</p>
              </div>

              <a href="https://wa.me/2348029162696" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 hover:opacity-80 transition-opacity cursor-pointer">
                <MessageCircle className="text-accent" />
                <p className="text-blue-100">+234 802 916 2696 </p>
              </a>

              <a href="mailto:info@fovecglobal.com" className="flex items-center space-x-4 hover:opacity-80 transition-opacity cursor-pointer">
                <Mail className="text-accent" />
                <p className="text-blue-100">info@fovecglobal.com</p>
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 w-full h-64 bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm border border-white/20 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6631.940448382256!2d7.4975308678984804!3d9.061663890489212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bba0d1893b3%3A0x444a6bd9c9d7da7a!2sFederal%20Secretariat%20Abuja!5e0!3m2!1sen!2sng!4v1772314566819!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="FOVEC Global Limited Head Office Location Map"
              ></iframe>
            </div>

            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
