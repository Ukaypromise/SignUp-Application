import React, { useState } from "react";
import { Container, Form } from "./SignUpForm.style";
import axios from "axios";

const SignUpForm = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setSignUpInfo({ ...signUpInfo, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    setSignUpInfo({ fullname: "", username: "", email: "", password: "" });
    console.log(signUpInfo);
    const registered = {
      fullname: signUpInfo.fullname,
      username: signUpInfo.username,
      email: signUpInfo.email,
      password: signUpInfo.password,
    };
    axios
      .post("http://localhost:5000/api/signup", registered)
      .then((res) => console.log(res.data));
    // window.location("/")
  };

  return (
    <div>
      <Container className="container">
        <Form>
          <div className="title">Welcome</div>
          <div className="subtitle">Let's Sign You Up!</div>
          <form onSubmit={submitForm}>
            <div className="input-container ic1">
              <input
                type="text"
                name="fullname"
                className="input"
                onChange={handleChange}
                value={signUpInfo.fullname}
              />
              <div className="cut"></div>
              <label htmlFor="fullname" className="placeholder">
                FullName
              </label>
            </div>
            <div className="input-container ic2">
              <input
                type="text"
                name="username"
                onChange={handleChange}
                value={signUpInfo.username}
                className="input"
              />
              <div className="cut"></div>
              <label htmlFor="username" className="placeholder">
                User Name
              </label>
            </div>
            <div className="input-container ic2">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={signUpInfo.email}
                className="input"
              />
              <div className="cut cut-short"></div>
              <label htmlFor="email" className="placeholder">
                Email
              </label>
            </div>
            <div className="input-container ic2">
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={signUpInfo.password}
                className="input"
              />
              <div className="cut"></div>
              <label htmlFor="password" className="placeholder">
                Password
              </label>
            </div>
            <button className="submit">Submit</button>
          </form>
        </Form>
      </Container>
    </div>
  );
};

export default SignUpForm;
