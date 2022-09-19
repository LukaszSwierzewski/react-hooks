import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'
import AboutRedux from '../pages/AboutRedux'
import NotFound from '../pages/NotFound'
import HooksPage from "../pages/HooksPage";
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicRouter() {
  return (
    <Router>
      <div>
        <ul>
            <NavLink to='/'>home</NavLink>
            <NavLink to='/about/2'>About</NavLink>
            <NavLink to='/redux'>Redux</NavLink>
            <NavLink to='/hooks'>Hooks</NavLink>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route exact path="/" element={<HomePage author={'this is how you pass a props to react'}/>}>
          </Route>
          <Route path="/about/:id" element={<AboutPage />}>
          </Route>
          <Route path="/redux" element={<AboutRedux />}>
          </Route>
          <Route path="/hooks" element={<HooksPage />}>
          </Route>
          <Route path="*" element={<NotFound test={'test prop pass'} />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
