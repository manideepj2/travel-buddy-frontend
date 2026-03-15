import { Divider, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

const AuthByThirdParty = () => {
  return (
    <div>
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
    </div>
  );
};

export default AuthByThirdParty;