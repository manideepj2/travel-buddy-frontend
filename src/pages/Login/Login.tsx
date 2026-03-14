import { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log({ email, password });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-[400px] bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        <div className="space-y-4">
          <TextField
            label="Email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button variant="contained" fullWidth onClick={handleLogin}>
            Login
          </Button>
        </div>

        <div className="my-6">
          <Divider>OR</Divider>
        </div>

        <div className="space-y-3">
          <Button variant="outlined" fullWidth startIcon={<GoogleIcon />}>
            Continue with Google
          </Button>

          <Button variant="outlined" fullWidth startIcon={<FacebookIcon />}>
            Continue with Facebook
          </Button>
        </div>

        <p className="text-sm text-center mt-6">
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
