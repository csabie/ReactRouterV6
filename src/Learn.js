import React from "react";
import { BrowserRouter as Router, Link, Outlet } from "react-router-dom";
import "./Learn.css";
function Learn() {
  return (
    <div className="learn">
      <h1>Learn</h1>
      <h4>All courses are listed here</h4>
      {/* azért használunk Link-et és nem <a><a/> tag-et, mert a link nem loadolja újra az egész oldalt */}
      {/* itt a Link-en keresztül átírogatjuk a linket
      localhost:3000/learn/courses-ra meg localhost:3000/learn/bundles -ra de az
      Outlet-tel jelenítjük meg a tartalmat, OneSingleWebpage formában a linkek
      alatt. Tehát ez egyfajta nav-bar, ahol a navbar mindig ott van és a
      tartalom alatta változik. */}
      <Link to="/learn/courses">courses</Link>
      <Link to="/learn/bundles">bundle</Link>
      <Outlet />
    </div>
  );
}

export default Learn;
