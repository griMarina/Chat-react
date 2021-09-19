import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Breadcrumb } from "./Components/Breadcrumb";
import { Routing } from "./Routing/Routing";
import { store, persistor } from "./Store";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<CircularProgress />}>
          <BrowserRouter>
            <Breadcrumb />
            <Routing />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
