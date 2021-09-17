import Button from "@material-ui/core/Button";
import ReplayIcon from "@material-ui/icons/Replay";
import Container from "@material-ui/core/Container";

export const Error = ({ handleUpdatePage }) => {
  return (
    <Container className="App-wrap" maxWidth="sm">
      <h3 className="App-title error">Error occured</h3>
      <Button
        onClick={handleUpdatePage}
        variant="outlined"
        startIcon={<ReplayIcon />}
      >
        Update
      </Button>
    </Container>
  );
};
