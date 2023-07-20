import React, {useState} from 'react';
import '../css/Navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMagnifyingGlass, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {
    const [showDropdown, setShowDropdown] = useState(true);
  
    const handleMouseEnter = () => {
      setShowDropdown(true);
    };
  
    const handleMouseLeave = () => {
      setShowDropdown(false);
    };

  return (
    <nav>
        <section className='navUpper'>
            <p>Retail Site</p>
        <div className='navIcons'>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{cursor:'pointer'}}/>
            <FontAwesomeIcon icon={faHeart} style={{cursor:'pointer'}}/>
            <div className='navCart'>
                <FontAwesomeIcon icon={faShoppingCart} style={{cursor:'pointer'}}/>
                <p>0</p>
            </div>
        </div>
        </section>
        <ul>
            <li>
            <a href='#' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Mens</a>
            <div className="navCategories">       
            {showDropdown && (
            <ul  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <li><a>All Mens Items</a></li>
              <li><a>Mens Tops</a></li>
              <li><a>Mens Pants</a></li>
              <li><a>Mens Accessories</a></li>
            </ul>
            )}
            </div> 
            </li>
            <li>
            <a href='#' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Womens</a>        
            <div className="navCategories">       
            {showDropdown && (
            <ul  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <li><a>All Womens Items</a></li>
              <li><a>Womens Tops</a></li>
              <li><a>Womens Pants</a></li>
              <li><a>Womens Accessories</a></li>
            </ul>
            )}
            </div> 
            </li>
            <li>
            <a href='#' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Accessories</a>        
            <div className="navCategories">       
            {showDropdown && (
            <ul  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <li><a>All Accessories</a></li>
              <li><a>Rings</a></li>
              <li><a>Bracelets</a></li>
            </ul>
            )}
            </div> 
            </li>
            <li>
            <a href='#' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Sale</a>        
            <div className="navCategories">       
            {showDropdown && (
            <ul  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <li><a>All Sale Items</a></li>
              <li><a>Sale Clothes</a></li>
              <li><a>Sale Accessories</a></li>
            </ul>
            )}
            </div> 
            </li>
            <li><a href='#'>Locations</a></li>
        </ul>
    </nav>
  )
}
