//npm i react-router-dom@6
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Learn from "./Learn";
import Courses from "./Courses";
import Bundle from "./Bundle";
import CourseId from "./CourseId";
import Dashboard from "./Dashboard";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* a régi verziókban component-et kellett írni, de a v6-osban elementet kell írni. */}
          {/* az elementbe lehet írni html tag-eket is */}
          {/* <Route path="/" element={<p>Test</p>} /> */}
          <Route path="/" element={<Home />} />
          {/* ha a localhost:3000/myapps-ra megyek rá, akkor automatikusan átirányít
          a locahost:3000/learn-re */}
          {/* ha a replace nincs ott, akkor az oldal stack-be rak egy learn-t, a replace-vel, pedig helyettesíti */}
          <Route path="/myapps" element={<Navigate replace to="/learn" />} />
          <Route path="learn" element={<Learn />}>
            <Route path="courses" element={<Courses />}>
              <Route path=":courseid" element={<CourseId />} />
            </Route>
            <Route path="bundles" element={<Bundle />} />
          </Route>

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
