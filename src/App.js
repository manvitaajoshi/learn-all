import Dashboard from "./components/Dashboard"
import SignUp from "./components/SignUp"
import LogIn from "./components/LogIn"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"
import Teacher from "./components/Teacher"
// import CRUD1 from "./components/CRUD1"
// import CRUD2 from "./components/CRUD2"
// import CRUD3 from "./components/CRUD3"
import FNF from "./components/404"
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={LogIn} />
              <PrivateRoute exact path="/update-profile" component={UpdateProfile} />
              <Route exact path="/forgot-password" component={ForgotPassword} />
              <Route exact path="/404" component={FNF} />
              <Route exact path="/admin" component={Teacher} />
              <Redirect to="/404" />
              {/* <PrivateRoute exact path="/update-profile" component={UpdateProfile} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/crud1" component={CRUD1} />
              <Route exact path="/crud2" component={CRUD2} />
              <Route exact path="/crud3" component={CRUD3} />
              <Route exact path="/forgot-password" component={ForgotPassword} />
              <Route exact path="/404" component={FNF} />
              <Redirect to="/404" /> */}
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
