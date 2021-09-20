import { useState } from "react";
import { firebase } from "../../Services/firebase";
import { Button } from "@material-ui/core";
import "./Signout.css";

export const Signout = () => {
  const [error, setError] = useState("");

  const handleSubmitBtn = async () => {
    setError("");

    try {
      await firebase.auth().signOut();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Button
        className="signout-btn"
        variant="outlined"
        onClick={handleSubmitBtn}
      >
        Sign out
      </Button>
      {error && <p>{error}</p>}
    </>
  );
};
