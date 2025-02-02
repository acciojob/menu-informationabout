<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React, { useState } from "react";
import './styles.css'; // Assume this contains the necessary styles

// Sample menu data
const menuItems = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.jpeg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpeg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  // Add more items here as needed...
];

const App = () => {
  const [category, setCategory] = useState("all"); // State to manage the selected category
  const [items, setItems] = useState(menuItems); // Set initial items to all menu items

  // Filter items based on category
  const filterItems = (category) => {
    if (category === "all") {
      setItems(menuItems);
    } else {
      setItems(menuItems.filter(item => item.category === category));
    }
  };

  return (
    <div>
      {/* Main section */}
      <div id="main">
        <h1>Menu</h1>
        
        {/* Category buttons */}
        <div>
          <button id="filter-btn-1" onClick={() => { filterItems('breakfast'); }}>Breakfast</button>
          <button id="filter-btn-2" onClick={() => { filterItems('lunch'); }}>Lunch</button>
          <button id="filter-btn-3" onClick={() => { filterItems('shakes'); }}>Shakes</button>
          <button id="filter-btn-4" onClick={() => { filterItems('all'); }}>All</button>
        </div>
        
        {/* Menu items display */}
        <div className="menu-items">
          {items.map(item => (
            <div key={item.id} className="menu-item" data-test-id={`menu-item-${item.category}`}>
              <img src={item.img} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <span>${item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
