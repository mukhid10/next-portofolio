import React, { useRef, useState } from "react";
import classes from "../../styles/form.module.css";
import emailjs from "@emailjs/browser";

const Form = () => {
  const formref = useRef();
  const [done, setDone] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_i99garl",
        "template_0mz2rtn",
        formref.current,
        "MV0PsNGwjdSKsxtGq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form className={`${classes.form}`} ref={formref} onSubmit={submitHandler}>
      <div className={`${classes.form__group}`}>
        <input type="text" name="user_name" placeholder="Your Name" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input
          type="email"
          name="user_email"
          placeholder="Email Address"
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          name="message"
          rows={5}
          placeholder="Message"
          required
        />
      </div>
      <button className="primary__btn" type="submit">
        Send
      </button>
      <span style={{ marginLeft: "10px", color: "white" }}>
        {done && "Pesan Telah Terkirim.  .  .  ."}
      </span>
    </form>
  );
};

export default Form;
