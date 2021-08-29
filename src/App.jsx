import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Breadcrumb } from "./Components/Breadcrumb";
import { Routing } from "./Routing/Routing";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e68431",
    },
    secondary: {
      main: "#a6d1f3",
    },
  },
});

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Breadcrumb />
        <Routing />
      </BrowserRouter>
      {/* <ThemeProvider theme={theme}></ThemeProvider> */}
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
