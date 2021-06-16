import { Switch, Route } from "react-router-dom";
import UserLayout from "./containers/UserLayout.jsx";
import RouterLayout from "./containers/RouterLayout.jsx";
import EmptyLayout from "./containers/EmptyLayout.jsx";

function App() {
  return (
    <Switch>
      <Route path="/auth" component={UserLayout} />
      <Route path="/extra" component={EmptyLayout} />
      <Route path="/" component={RouterLayout} />
    </Switch>
  );
}
export default App

