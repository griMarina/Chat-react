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

// дз 2
// const [messages, setList] = useState([]);

// const onSubmit = useCallback(
//   ({ contact, text }) => {
//     let message = {
//       id: getId(),
//       contact: contact,
//       text: text,
//     };

//     setList([...messages, message]);
//   },
//   [messages]
// );

// useEffect(() => {
//   if (list.length) {
//     const lastContact = messages[messages.length - 1].contact;
//     const timer = setTimeout(
//       () => alert(`Your sent a message to ${lastContact}.`),
//       1500
//     );

//     return () => {
//       clearTimeout(timer);
//     };
//   }
// }, [list]);
