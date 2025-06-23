import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        {/* Title */}
        <div className="contact-header">
          <p className="contact-subtitle">
            Have a question or want to work together? Leave your
            <br />
            details and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Form */}
        <form name="contact-form" netlify netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>
        <form className="contact-form" onSubmit={handleSubmit} method="post">
          <input type="hidden" name="form-name" value="contact-form" />
          <div className="input-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              required
              className="contact-input"
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
              className="contact-input"
            />
          </div>

          <div className="input-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              required
              rows={4}
              className="contact-textarea"
            />
          </div>

          {/* Submit Button */}
          <div className="submit-container">
            <button
              type="submit"
              disabled={isSubmitting}
              className="submitbutton"
              onClick={handleSubmit}
            >
              {isSubmitting ? "SENDING..." : "SUBMIT"}
              <div className="submit-underline"></div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
