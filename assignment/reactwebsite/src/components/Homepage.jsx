import React from 'react';
import "../styles/home.css";
import "../styles/homepage.css";
import ComputerGadget from '../images/Screenshot 2025-01-28 153920.png';
import Electronics from '../images/Screenshot 2025-01-28 153927.png';
import Watch from '../images/Screenshot 2025-01-28 153934.png';
import { useNavigate } from 'react-router-dom';

export const productlist = [
  { id: 1, image: ComputerGadget, cardTitle: "Computer Gadget" },
  { id: 2, image: Electronics, cardTitle: "Electronics" },
  { id: 3, image: Watch, cardTitle: "Watch" },
];

function Homepage() {
  const navigate = useNavigate();

  const handleNavigate = (id) => {

    navigate(`/product/${id}`);
  };

  return (
    <div className='navcontainer'>
      {productlist.map((item) => (
        <div key={item.id}>
          <div className='cont'>
            <img src={item.image} alt={item.cardTitle} />
          </div>
          <div className='cont1'>{item.cardTitle}</div>
          <button
            type='button'
            className='button1'
            onClick={() => handleNavigate(item.id)}
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
}

export default Homepage;