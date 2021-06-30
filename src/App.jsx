import { BrowserRouter } from "react-router-dom";
import Root from "./Root.jsx";
import { Provider } from "react-redux";
import "./App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
}
