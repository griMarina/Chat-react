import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Routing/constants";
import "./Authentication.css";

export const Authentication = () => {
  return (
    <div className="authentication">
      <Link to={ROUTES.SIGNIN} color="inherit" className="signin-link">
        <Button variant="outlined" href="#outlined-buttons">
          Sign in
        </Button>
      </Link>
      <Link to={ROUTES.SIGNUP} color="inherit" className="signup-link">
        <Button variant="outlined" href="#outlined-buttons">
          Sign up
        </Button>
      </Link>
    </div>
  );
};
