import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ContextProdiver from "./context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProdiver>
    <App />
  </ContextProdiver>
);
