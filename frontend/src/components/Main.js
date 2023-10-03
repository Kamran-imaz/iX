import React, { useState } from 'react';
import axios from 'axios';

export default function Main() {
  const [formData, setFormData] = useState({
    state: '',
    city: '',
    category: '',
  });

  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const search = async () => {
    try {
      // Send a GET request to your backend API with user input
      const response = await axios.get('http://localhost:80/routes/displayDb', {
        params: formData,
      });
      window.alert('Searched successfully')
      console.log(response.data)
      // Set the results from the backend response
      setResults(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="mb-3 container my-5">
        <label htmlFor="state" className="form-label">
          State
        </label>
        <input
          type="text"
          className="form-control"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          placeholder="State Name"
        />
      </div>
      <div className="mb-3 container my-5">
        <label htmlFor="city" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-control"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          placeholder="City Name"
        />
      </div>
      <div className="mb-3 container my-5">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <input
          type="text"
          className="form-control"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          placeholder="Category Name"
        />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-outline-primary" onClick={search}>
          Search
        </button>
      </div>
      {/* Display search results */}
      <div className="container">
  {results.length > 0 ? (
    <>
      <h2>Search Results:</h2>
      <div className="row">
        {results.map((result, index) => (
          <div className="col-lg-4 col-md-4 col-sm-6 mb-4" key={index}>
            <div className="card " style={{ width: "18rem" }}>
              <img src="/pics/OIP.jpeg" className="card-img-top" alt="Cannot be Displayed" />
              <div className="card-body">
                <strong>#{index+1}</strong> <br /><br />
                <strong>{result.category[0].toUpperCase()}{result.category.slice(1)} Name:</strong> {result.categoryName[0].toUpperCase()}{result.categoryName.slice(1)}<br /> <br />
                <strong>Rating:</strong> {result.rating} <span style={{color:'red'}}>(&#9734; {result.count})</span><br /> <br />
                <a href="/" className="btn btn-primary">Chat Section</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  ) : (
    <div><h4>Happy to see you back</h4></div>
  )}
</div>


    </>
  );
}
