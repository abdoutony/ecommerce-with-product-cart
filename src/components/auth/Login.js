import { Grid, Box, Button, TextField } from "@mui/material";
import imgLogin from "../../images/loginpagebg.png";
import "./style.css";
import { useState } from "react";
import { FormInput } from "../general/formInput";
import { Formik, Form, Field } from "formik";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
export const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const onValueChanged = (type, value) => {
    if (type === "email") setEmail(value);
    if (type === "password") setPassword(value);
  };
  const navigate = useNavigate();

  const login = () => {
    alert(email + password);
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required")
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));

      if (
        formik.values.email === "a@a.com" &&
        formik.values.password === "123456789"
      ) {
        localStorage.setItem(
          "admin",
          JSON.stringify({ user: "admin", token: "584926" })
        );

        console.log(localStorage.getItem("admin"));
        navigate("/admin");
      } else {
        alert("inccorect credentials");
      }
    }
  });

  return (
    <Grid className="loginContainer" container>
      <Grid item xs={6} sx={{ display: { xs: "none", md: "block" } }}>
        <Box className="leftLoginContent" bgcolor="primary.main">
          <img src={imgLogin} width="500" alt="loginimg" />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box>
          <h1 className="loginTextHeading">
            <a href="/">
              {" "}
              Bi<span>3li</span>
            </a>
          </h1>
        </Box>
        {/* <Box className="form-area" item xs={12}>
          <FormInput
            onValueChanged={onValueChanged}
            value={email || ""}
            type="email"
            id="email"
            label="Email"
          />

          <FormInput
            onValueChanged={onValueChanged}
            value={password || ""}
            type="password"
            id="password"
            label="Password"
          />

          <Button onClick={login} variant="contained" bgcolor="primary.main">
            Login
          </Button>
        </Box> */}
        <Box className="form-area" item xs={12}>
          <form onSubmit={formik.handleSubmit}>
            <FormInput
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              handleChange={formik.handleChange}
              onErrorOccurd={
                formik.touched.email && Boolean(formik.errors.email)
              }
              onHelperText={formik.touched.email && formik.errors.email}
            />
            <FormInput
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              handleChange={formik.handleChange}
              onErrorOccurd={
                formik.touched.password && Boolean(formik.errors.password)
              }
              onHelperText={formik.touched.password && formik.errors.password}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};
