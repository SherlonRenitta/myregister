import React from "react";
import reactDom from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";

import EmployeeEntries from "./pages/employeeEntries/employeeEntries";
import Input from "./components/common/Input/Input";

export default function RouterPage() {
  return (
    <Router>
      <Route path="/" component={EmployeeEntries} exact />
      {/* <Route path="/try" component={Trial} /> */}
      <Route path="/input" component={Input} />
    </Router>
  );
}
