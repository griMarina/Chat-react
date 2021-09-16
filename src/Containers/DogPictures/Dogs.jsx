import { CircularProgress } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getDogsPicturesAction } from "../../Store/Dogs/actions";
import { dogsPicturesSelector } from "../../Store/Dogs/selectors";

export const Dogs = () => {
  const { loading, error, dogs } = useSelector(dogsPicturesSelector);

  console.log(dogs);

  const dispatch = useDispatch();

  useEffect(() => {
    handleUpdatePage();
  }, []);

  const handleUpdatePage = () => {
    dispatch(getDogsPicturesAction());
  };

  //   const renderDogsPictures = useCallback((dogs)=><li key={dogs.id}>{dogs})

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <>
        <h3>Error occured</h3>
        <button onClick={handleUpdatePage}>Update</button>
      </>
    );
  }

  return <img src={dogs.url} alt="img" />;
};
