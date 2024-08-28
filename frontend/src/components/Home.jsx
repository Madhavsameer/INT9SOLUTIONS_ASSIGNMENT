import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css'; // Import the updated CSS file

const DEV_URL = "http://localhost:5000"
const PROD_URL = "http://sameer.netlify.app"


const BASE_URL = process.env.NODE_ENV === 'production' ? PROD_URL : DEV_URL;

function Home() {
  const [sellers, setSellers] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const fetchSellers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/sellers?name=${search}`);
      setSellers(response.data);
    } catch (error) {
      console.error('Error fetching sellers', error);
    }
  };

  useEffect(() => {
    fetchSellers();
  }, [search]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <div key={i} className={`star ${i > rating ? 'empty' : ''}`}></div>
      );
    }
    return stars;
  };

  return (
    <div className="home-container">
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <input
        type="text"
        placeholder="Search sellers by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />
      <div className="seller-list">
        {sellers.map((seller) => (
          <div key={seller._id} className="seller-item">
            <div className="seller-name">{seller.name}</div>
            <div className="seller-rating">
              {renderStars(seller.rating)}
            </div>
            <div className="seller-review">{seller.review}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
