import React, { useState } from "react";
import '../style/widget.css';

function Widget(props) {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery]=useState('');

  const showCategory = () => {
    setPopupVisible(true);
  };

  const hideCategory = () => {
    setPopupVisible(false);
  };



  return (
    <>
    <div className="card-container">
      <div className="search-bar-container">
      <input
        id="search"
        type="text"
        placeholder="Search for the name of a bus service, flight service or a hotel"
        autoComplete="off"
        onChange={(e)=>setSearchQuery(e.target.value)}
        onFocus={showCategory}
      />

      <input 
        type="submit" 
        value="Search"
        onClick={()=>{props.onSubmit(selectedCategory,searchQuery); hideCategory();}}
        />
      </div>
        
      {isPopupVisible && (
        <section className="travel-packages">
          <aside>
            <input type="radio" name="category" value="Buses" id="Buses" 
            onChange={(e) => setSelectedCategory(e.target.value)} />
            <label htmlFor="Buses"> Buses </label>
          </aside>
          <aside>
            <input type="radio" name="category" value="Flights" id="Flights" onChange={(e) => setSelectedCategory(e.target.value)} />
            <label htmlFor="Flights"> Flights </label>
          </aside>
          <aside>
            <input type="radio" name="category" value="Hotels" id="Hotels" onChange={(e) => setSelectedCategory(e.target.value)} />
            <label htmlFor="Hotels"> Hotels </label>
          </aside>
          <aside>
            <input type="radio" name="category" value="All" id="All" onChange={(e) => setSelectedCategory(e.target.value)} />
            <label htmlFor="All"> All </label>
          </aside>
        </section>
      )}
    </div>
    </>
  );
}

export default Widget;


