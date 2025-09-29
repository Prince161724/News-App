import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => { props.setCategory({ category: 'general', headline: 'All' }); props.setProgress(0) }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business" onClick={() => { props.setCategory({ category: 'business', headline: 'Business' }); props.setProgress(0); }}>Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/general" onClick={() => { props.setCategory({ category: 'general', headline: 'General' }); props.setProgress(0) }}>General</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health" onClick={() => { props.setCategory({ category: 'health', headline: 'Health' }); props.setProgress(0) }}>Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science" onClick={() => { props.setCategory({ category: 'science', headline: 'Science' }); props.setProgress(0) }}>Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports" onClick={() => { props.setCategory({ category: 'sports', headline: 'Sports' }); props.setProgress(0) }}>Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology" onClick={() => { props.setCategory({ category: 'technology', headline: 'Technology' }); props.setProgress(0) }}>Technology</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;
