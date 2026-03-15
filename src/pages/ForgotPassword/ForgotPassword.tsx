import { TextField, Button } from "@mui/material";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const ForgotPassword = () => {
  const handleForgotPassword = (values: any) => {
    console.log("Forgot Password Data:", values);
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const initialValues = {
    email: "",
  };

  const ForgotPasswordSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[400px] p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Forgot password
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={ForgotPasswordSchema}
          onSubmit={handleForgotPassword}
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
                <div className="flex justify-end mb-1">
                  <button
                    type="button"
                    onClick={goBack}
                    className="text-blue-600 hover:underline cursor-pointer bg-transparent border-0 p-0 font-inherit"
                  >
                    go back
                  </button>
                </div>

                <div className="flex justify-center">
                  <Button fullWidth variant="contained" type="submit">
                    Enter email to reset password
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;
