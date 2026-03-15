import { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Divider, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log({ email, password });
  };

  return (
    <div className="flex items-center justify-center h-screen">
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

        <div className="space-y-4">
          <TextField
            label="Email"
            fullWidth
            sx={{ mb: 1 }}
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            sx={{ mb: 1 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-center">
            <Button
              sx={{ width: 100 }}
              variant="contained"
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>
        </div>

        <div className="my-4">
          <Divider>OR</Divider>
        </div>

        <div className="space-y-3">
          <Button
            variant="outlined"
            sx={{ mb: 1 }}
            fullWidth
            startIcon={<GoogleIcon />}
          >
            Continue with Google
          </Button>

          <Button variant="outlined" fullWidth startIcon={<FacebookIcon />}>
            Continue with Facebook
          </Button>
        </div>

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
