import Button from "@material-ui/core/Button";
import ReplayIcon from "@material-ui/icons/Replay";
import Container from "@material-ui/core/Container";

import "./RandomDogsPicture.css";

export const RandomDogsPicture = ({ dogs, handleUpdatePage }) => {
  return (
    <div className="App-wrap">
      <Container className="dogs-block" maxWidth="sm">
        <img className="dogs-img" src={dogs.url} alt="img" />
        <Button
          className="update-btn"
          onClick={handleUpdatePage}
          variant="outlined"
          startIcon={<ReplayIcon />}
        >
          Update
        </Button>
      </Container>
    </div>
  );
};
