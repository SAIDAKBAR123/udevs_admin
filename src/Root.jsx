import { Switch, Route, Redirect } from "react-router-dom";
import UserLayout from "./containers/UserLayout.jsx";
import RouterLayout from "./containers/RouterLayout.jsx";
import EmptyLayout from "./containers/EmptyLayout.jsx";

function App() {
  return (
    <Switch>
        <Route path="/auth" component={UserLayout} />
        <Route path="/extra" component={EmptyLayout} />
        <Route path="/home" component={RouterLayout} />
        <Redirect from='/' to="/home/dashboard"></Redirect>
    </Switch>
  );
}
export default App

