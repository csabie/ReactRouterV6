import React from "react";
import { useParams } from "react-router-dom";
import {
  BrowserRouter as Router,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";

function CourseId() {
  const navigate = useNavigate();
  const { courseid } = useParams();
  return (
    <div>
      <h1>URL Params is : {courseid}</h1>
      <button
        onClick={() => navigate("/dashboard", { state: `299 at ${courseid}` })}
      >
        Price
      </button>
      {/* statet így is lehet küldeni */}
      <Link to="/dashboard" state={"Django"}>
        Test Link
      </Link>
    </div>
  );
}

export default CourseId;
