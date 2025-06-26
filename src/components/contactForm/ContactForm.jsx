// import { useState } from "react";
// import "./ContactForm.css";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const encode = (data) => {
//     return Object.keys(data)
//       .map(
//         (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
//       )
//       .join("&");
//   };
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: encode({ "form-name": "contact", ...this.state }),
//     })
//       .then(() => {
//         alert("Success!");
//         setIsSubmitting(false);
//       })
//       .catch((error) => alert(error));

//     e.preventDefault();
//   };

//   return (
//     <div className="contact-section">
//       <div className="contact-container">
//         {/* Title */}
//         <div className="contact-header">
//           <p className="contact-subtitle">
//             Have a question or want to work together? Leave your
//             <br />
//             details and I'll get back to you as soon as possible.
//           </p>
//         </div>

//         {/* Form */}
//         <form name="contact-form" netlify netlify-honeypot="bot-field" hidden>
//           <input type="text" name="name" />
//           <input type="email" name="email" />
//           <textarea name="message"></textarea>
//         </form>
//         <form className="contact-form" onSubmit={handleSubmit} method="post">
//           <input type="hidden" name="form-name" value="contact-form" />
//           <div className="input-group">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               placeholder="Name"
//               required
//               className="contact-input"
//             />
//           </div>

//           <div className="input-group">
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Email"
//               required
//               className="contact-input"
//             />
//           </div>

//           <div className="input-group">
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleInputChange}
//               placeholder="Message"
//               required
//               rows={4}
//               className="contact-textarea"
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="submit-container">
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="submitbutton"
//               onClick={handleSubmit}
//             >
//               {isSubmitting ? "SENDING..." : "SUBMIT"}
//               <div className="submit-underline"></div>
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
import React from "react";
import { NetlifyForm, Honeypot } from "react-netlify-forms";
import "./ContactForm.css";

const ContactForm = () => {
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
        <NetlifyForm name="Contact" action="/thanks" honeypotName="bot-field">
          {({ handleChange, success, error }) => (
            <>
              <Honeypot />
              {success && alert("Thanks for contacting us!")}
              {error &&
                alert(
                  " Sorry, we could not reach our servers. Please try again later."
                )}
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="contact-input"
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  name="Email"
                  id="message"
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="contact-input"
                />
              </div>
              <div className="input-group">
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  rows="4"
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  className="contact-input"
                />
              </div>
              <div className="submit-container">
                <button type="submit" className="submitbutton">
                  Submit
                </button>
              </div>
            </>
          )}
        </NetlifyForm>
      </div>
    </div>
  );
};

export default ContactForm;
