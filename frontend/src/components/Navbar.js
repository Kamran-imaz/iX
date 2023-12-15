import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [data, setData] = useState('');
  const [result, setResult] = useState([]);
  const [showSuggest, setShowSuggest] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post('http://localhost:80/routes/searchdata', { data });
      setResult(response.data.message);
      console.log(response.data)
    };
    // if (data) {
      // setShowSuggest(true);
      fetchData();
    // } else {
      // setShowSuggest(false);
    // }
  }, [data]);

  const handleInputChange = (e) => {
    setData(e.target.value);
  };

  const handleSelectSuggestion = (suggestion) => {
    setData(suggestion);
    setShowSuggest(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">City Explorer</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/postReview">Post review</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleInputChange}
              />
              <button className="btn btn-outline-danger" type="submit" value="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
