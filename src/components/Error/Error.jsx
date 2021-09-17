import Button from "@material-ui/core/Button";
import ReplayIcon from "@material-ui/icons/Replay";

export const Error = ({ handleUpdatePage }) => {
  return (
    <div className="App-wrap">
      <h3 className="App-title">Error occured</h3>
      <Button
        onClick={handleUpdatePage}
        variant="outlined"
        startIcon={<ReplayIcon />}
      >
        Update
      </Button>
    </div>
  );
};
