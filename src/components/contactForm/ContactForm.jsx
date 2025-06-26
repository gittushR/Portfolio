import { useState } from "react";
import "./ContactForm.css";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

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

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contactForm", ...formData }),
    })
      .then(() => {
        alert("Success!");
        setIsSubmitting(true);
      })
      .catch((error) => alert(error));
    setIsSubmitting(false);
    e.preventDefault();
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
        <form className="contact-form" onSubmit={handleSubmit}>
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
