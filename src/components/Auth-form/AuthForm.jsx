import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import "./AuthForm.css";

export const AuthForm = ({
  email,
  password,
  handleChangeEmail,
  handleChangePassword,
  handleSubmitBtn,
}) => {
  return (
    <form className="auth-form">
      <Container className="auth-container" maxWidth="sm">
        <TextField
          className="auth-input"
          variant="outlined"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChangeEmail}
        />
        <TextField
          variant="outlined"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChangePassword}
        />
      </Container>
      <Button variant="outlined" onClick={handleSubmitBtn}>
        Submit
      </Button>
    </form>
  );
};
