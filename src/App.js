import { BrowserRouter, Switch, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./components/NotFound";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import UserProfile from "./components/UserProfile";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <ProtectedRoute exact path="/" component={HomePage} />
      <ProtectedRoute exact path="/users/:userId" component={UserProfile} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
