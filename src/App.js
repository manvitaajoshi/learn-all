import Dashboard from "./components/Dashboard"
import SignUp from "./components/SignUp"
import LogIn from "./components/LogIn"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"
import Teacher from "./components/Teacher"
import Student from "./components/Student"
import Upload_Books from "./components/Upload_Book"
import View_Books from "./components/View_Books"
import View_Books_Student from "./components/View_Book_Student"
import Quiz_English from "./components/Quiz_English"
import Quiz_Science from "./components/Quiz_Science"
import Quiz_Maths from "./components/Quiz_Maths"
import Upload_Announcement from "./components/Announcement_Upload"
import View_Announcement from "./components/Announcement_Display"
import Upload_Video from "./components/Upload_Video"
import Display_Video from "./components/Display_Video"
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
              <Route exact path="/" component={Dashboard} />
              <PrivateRoute exact path="/admin" component={Teacher} />
              <PrivateRoute exact path="/student" component={Student} />
              <PrivateRoute exact path="/update_profile" component={UpdateProfile} />
              <PrivateRoute exact path="/upload_books" component={Upload_Books} />
              <PrivateRoute exact path="/view_books" component={View_Books} />
              <PrivateRoute exact path="/view_books_student" component={View_Books_Student} />
              <PrivateRoute exact path="/quiz_english" component={Quiz_English} />
              <PrivateRoute exact path="/quiz_maths" component={Quiz_Maths} />
              <PrivateRoute exact path="/quiz_science" component={Quiz_Science} />
              <PrivateRoute exact path="/upload_announcement" component={Upload_Announcement} />
              <PrivateRoute exact path="/upload_video" component={Upload_Video} />
              <PrivateRoute exact path="/display_video" component={Display_Video} />
              <PrivateRoute exact path="/view_announcement" component={View_Announcement} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/forgot-password" component={ForgotPassword} />
              <Route exact path="/404" component={FNF} />
              <Redirect to="/404" />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
