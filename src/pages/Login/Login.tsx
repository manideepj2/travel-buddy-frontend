import { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Typography } from "@mui/material";
import AuthByThirdParty from "../../components/AuthByThirdParty";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const handleLogin = (values: any) => {
    console.log("Login Data:", values);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const LoginSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="flex justify-evenly items-center h-screen">
      <div className="p-8 max-w-3xl">
        <h2 className="text-2xl font-semibold text-center mb-6">TravelBuddy</h2>
        <Typography className="text-justify">
          <code>TravelBuddy</code> is a platform designed to help people find
          companions for their journeys by connecting travelers who are heading
          in the same direction at the same time. The idea is to make travel
          more social and collaborative by allowing individuals to either look
          for a travel buddy for a trip they are taking or offer an available
          seat in their car to someone traveling along the same route. <br />
          <br />
          Whether someone is flying to a destination or driving between cities,
          the platform helps match them with others on a similar journey. By
          bringing together people with shared travel plans, TravelBuddy aims to
          make trips more enjoyable, safer, and more economical while ncouraging
          meaningful connections between travelers.
        </Typography>
      </div>
      <div className="w-[400px] p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <Form>
              <div className="space-y-4">
                <TextField
                  label="email"
                  name="email"
                  fullWidth
                  sx={{ mb: 1 }}
                  variant="outlined"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />

                <TextField
                  label="password"
                  name="password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  sx={{ mb: 1 }}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
                <p className="text-md mb-1">
                  Forgot your password?{" "}
                  <Link
                    to="/forgot-password"
                    className="text-blue-600 hover:underline"
                  >
                    Click here
                  </Link>
                </p>
                <div className="flex justify-center">
                  <Button sx={{ width: 100 }} variant="contained" type="submit">
                    Login
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>

        <AuthByThirdParty />

        <p className="text-md text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
