import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css";
import { useEffect, useState } from "react";

export default function ExampleForm() {
  const formId = import.meta.env.VITE_FORM_ID;
  const [state, handleSubmit] = useForm(formId);

  const [lockedOut, setLockedOut] = useState(false);

  useEffect(() => {
    const lastSubmit = localStorage.getItem("lastFormSubmit");
    const now = Date.now();
    console.log(lastSubmit);
    if (lastSubmit && now - lastSubmit < 15 * 60 * 1000) {
      setLockedOut(true);
    }
  }, []);

  if (state.succeeded || lockedOut === true) {
    return (
      <div className="thank-you-container">
        <img
          src="/getBackLater.png" // or use an emoji/URL
          alt="Thanks"
          className="thank-you-img"
        />
        <h2>Got your message! 🙌</h2>
        <p>
          Thanks for reaching out. I’ll surely get back to you — unless I’m busy
          doing something I love.😉
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="contact-header">
        <p className="contact-subtitle">
          Have a question or want to work together? Leave your
          <br />
          details and I'll get back to you as soon as possible.
        </p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="_gotcha" style={{ display: "none" }} />
        <div className="input-group">
          <input
            className="contact-input"
            id="name"
            name="name"
            type="text"
            required
            placeholder="Name"
          />
        </div>
        <div className="input-group">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
            className="contact-input"
          />
        </div>
        <div className="input-group">
          <textarea
            className="contact-textarea"
            id="message"
            name="message"
            placeholder="Message"
            required
            rows={4}
          />
        </div>
        <input
          name="subject"
          type="hidden"
          value="New Portfolio message from {{ name }}"
        />
        <div className="submit-container">
          <button
            className="submitbutton"
            type="submit"
            disabled={state.submitting}
            onClick={() => {
              localStorage.setItem("lastFormSubmit", Date.now());
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
