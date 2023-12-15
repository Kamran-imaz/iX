import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Review() {
  const [formData, setFormData] = useState({
    state: '',
    city: '',
    category: '',
    categoryName: '',
    rating: '',
  });
  const navigate = useNavigate()
  const savePost = async () => {
    try {
      // Send a POST request to your backend API
      formData.state = formData.state.charAt(0).toUpperCase() + formData.state.slice(1)
      formData.city = formData.city.charAt(0).toUpperCase() + formData.city.slice(1)
      formData.category = formData.category.charAt(0).toUpperCase() + formData.category.slice(1)
      formData.categoryName = formData.categoryName.charAt(0).toUpperCase() + formData.categoryName.slice(1)
      await axios.post('http://localhost:80/routes/cedb', formData);

      // Display a success message
      // toast.success("Great") this part will be implemented in phase 3 development of the website
      // window.alert('Data Saved Successfully!!!');

      // Clear the form
      setFormData({
        state: '',
        city: '',
        category: '',
        categoryName: '',
        rating: '',
      });
      navigate('/')
    } catch (error) {
      alert(error)
      console.error('Error:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
          width={20}
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
          width={20}
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
          placeholder="Enter Category"
          width={20}
        />
      </div>
      <div className="mb-3 container my-5">
        <label htmlFor="categoryName" className="form-label">
          Category Name
        </label>
        <input
          type="text"
          className="form-control"
          id="categoryName"
          name="categoryName"
          value={formData.categoryName}
          onChange={handleInputChange}
          placeholder="Category Name"
          width={20}
        />
      </div>
      <div className="mb-3 container my-5">
        <label htmlFor="rating" className="form-label">
          Rating (0-5)
        </label>
        <input
          type="number"
          className="form-control"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleInputChange}
          placeholder="Give Rating"
          width={20}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={savePost}
        >
          Post
        </button>
        <ToastContainer />
      </div>
    </>
  );
}
