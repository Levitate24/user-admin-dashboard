import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminSignIn() {
  const initialValues = { adminusername: "", adminpassword: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const navigate = useNavigate();
  // let handleClickOnSignUp = () => {
  //   console.log("sign up link click");
  //   navigate("/sidebar");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    //handleClickOnSignUp();
    navigate("/sidebar");
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};

    if (!values.adminusername) {
      errors.adminusername = "*Admin Username is required!";
    }

    if (!values.adminpassword) {
      errors.adminpassword = "*Admin Password is required!";
    }
    return errors;
  };

  const AdminData = {
    adminusername: "Shilp13",
    adminpassword: "Shilp13@@",
  };

  localStorage.setItem("adminuser", JSON.stringify(AdminData));

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Admin Sign In</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>Admin Username</label>
              <input
                type="text"
                name="adminusername"
                placeholder="Enter Admin Username"
                value={formValues.adminusername}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.adminusername}</p>
            <div className="field">
              <label>Admin Password</label>
              <input
                type="password"
                name="adminpassword"
                placeholder="Enter Admin Password"
                value={formValues.adminpassword}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.adminpassword}</p>
            <button className="fluid ui button blue">Submit</button>
          </div>
        </form>

        {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed In successfully</div>
      ) : (
        <div></div>
      )} */}
      </div>
    </>
  );
}
