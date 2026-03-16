import { TextField, Button, Box, Divider } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import AuthByThirdParty from "../../components/AuthByThirdParty";

const RegisterSchema = Yup.object({
  firstname: Yup.string().required("First name is required"),

  lastname: Yup.string().required("Last name is required"),

  email: Yup.string().email("Invalid email").required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const Register = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values: any) => {
    console.log("Register Data:", values);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[400px] bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create Account
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={RegisterSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <Form>
              <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                <TextField
                  label="First Name"
                  name="firstname"
                  fullWidth
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.firstname && Boolean(errors.firstname)}
                  helperText={touched.firstname && errors.firstname}
                />
                <TextField
                  label="Last Name"
                  name="lastname"
                  fullWidth
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.lastname && Boolean(errors.lastname)}
                  helperText={touched.lastname && errors.lastname}
                />
              </Box>

              <TextField
                label="Email"
                name="email"
                fullWidth
                sx={{ mb: 1 }}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />

              <TextField
                label="Password"
                name="password"
                type="password"
                fullWidth
                sx={{ mb: 1 }}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />

              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                fullWidth
                sx={{ mb: 1 }}
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
              />

              <div className="flex justify-center">
                <Button variant="contained" type="submit">
                  Register
                </Button>
              </div>
            </Form>
          )}
        </Formik>
        <p className="text-md text-center mt-3">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
          <AuthByThirdParty />
      </div>
    </div>
  );
};

export default Register;
