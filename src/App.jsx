import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Breadcrumb } from "./Components/Breadcrumb";
import { Routing } from "./Routing/Routing";
import { store } from "./Store";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Breadcrumb />
          <Routing />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
