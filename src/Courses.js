import React from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Outlet,
} from "react-router-dom";

function Courses() {
  const courseList = ["React", "Angular", "Vue", "NodeJs"];
  const randomCourseName =
    courseList[Math.floor(Math.random() * courseList.length)];
  return (
    <div>
      <h1>Courses</h1>
      <h4>Courses card</h4>
      {/* az outlet azért kell, hogy a localhost:3000/learn/courses/asd esetén az
      asd paramétert megkapjuk */}

      <p>More test</p>
      {/* itt adott linkre kattintva navigálhatunk tovább. Olyan mint egy nav item */}
      {/* Továbbá lehet jelenzni azt is, hogy melyik navitem aktív */}
      <NavLink
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "pink" : "yellow",
          };
        }}
        to={`/learn/courses/${randomCourseName}`}
      >
        {randomCourseName}
      </NavLink>

      <NavLink to={`/learn/courses/tests`}>tests</NavLink>

      <Outlet />
    </div>
  );
}

export default Courses;
