import { Row } from "react-bootstrap";
import { useState } from "react";
import Button from "./Button.jsx";

export default function Form() {
  const formInitialValues = {
    fullName: "",
    email: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(formInitialValues);
  const [status, setStatus] = useState({});

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  const handleSubmit = async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (response.status === 200) {
        const result = await response.json();
        setFormValues(formInitialValues);
        setStatus({ success: true, message: "Message sent successfully" });
      } else {
        console.log(response.status);
        setStatus({
          success: false,
          message: "Something went wrong, please try again later",
        });
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      setStatus({
        success: false,
        message: "Something went wrong, please try again later",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <input
          className={
            formValues.fullName
              ? "contact-input-name has-value"
              : "contact-input-name"
          }
          type="text"
          name="fullName"
          value={formValues.fullName}
          onChange={handleInputChange}
        />
        <label className="contact-label-name">Your Name</label>
      </Row>
      <Row>
        <input
          className={
            formValues.email
              ? "contact-input-email has-value"
              : "contact-input-email"
          }
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
        <label className="contact-label-email">Email</label>
      </Row>
      <Row>
        <textarea
          className={
            formValues.message
              ? "contact-input-message has-value"
              : "contact-input-message"
          }
          type="text"
          name="message"
          value={formValues.message}
          onChange={handleInputChange}
          required
        />
        <label className="contact-label-message">Message</label>
      </Row>
      <Row>
        <Button />
        {status.message && (
          <p className={status.success === true ? "success" : "danger"}>
            {status.message}
          </p>
        )}
      </Row>
    </form>
  );
}
