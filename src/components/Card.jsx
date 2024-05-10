import React, { useState, useEffect } from "react";
import "../style/card.css";

function Card(props) {
  let [locations, setLocations] = useState([]);
  let [transCount,setTransCount]=useState(0);

  let getRoute = () => {
    let routesArray = props.sLoc;
    let resultLoc = [];

    const routes = {
      RT101: [
        "Tiruchendur",
        "Tuticorin",
        "Madurai",
        "Trichy",
        "Perungulathur",
        "Chennai",
      ],
      RT102: [
        "Tiruchendur",
        "Tuticorin",
        "Madurai",
        "Karur",
        "Salem",
        "Hosur",
        "Bengaluru",
      ],
      RT103: ["Tirunelveli", "Madurai", "Trichy", "Perungulathur", "Chennai"],
      RT104: ["Tuticorin", "Madurai", "Salem", "Coimbatore"],
      RT105: [
        "Coimbatore",
        "Erode",
        "Salem",
        "Dharmapuri",
        "Hosur",
        "Bengaluru",
      ],
      RT106: [
        "Coimbatore",
        "Erode",
        "Salem",
        "Viluppuram",
        "Tindivanam",
        "Chennai",
      ],
      RT107: ["Goa", "Belgaum", "Kolhapur", "Satara", "Pune", "Mumbai"],
      RT108: ["Mumbai", "Vadodara", "Udaipur", "Jaipur", "New Delhi"],
      RT109: ["Chennai", "Nellore", "Ongole", "Hyderabad"],
      RT110: [
        "Bengaluru",
        "Dharmavaram",
        "Anantapur",
        "Mahbubnagar",
        "Hyderabad",
      ],
      RT201: ["Tuticorin, India", "Chennai, India"],
      RT202: ["Madurai, India", "Chennai, India"],
      RT203: ["Madurai, India", "Bengaluru, India"],
      RT210: ["Chennai, India", "Doha, Qatar"],
      RT211: ["Mumbai, India", "Doha, Qatar"],
      RT212: ["Bengaluru, India", "Doha, Qatar"],
      RT220: ["New Delhi, India", "Dubai, UAE", "New York, USA"],
      RT221: ["Mumbai, India", "Dubai, UAE", "New York, USA"],
      RT222: ["Chennai, India", "Dubai, UAE", "New York, USA"],
      RT230: ["Dubai, UAE", "Port Louis, Singapore"],
      RT231: ["Trichy, India", "Port Louis, Singapore"],
      RT232: ["Chennai, India", "Bali, Indonesia"],
    };

    routesArray.forEach((route) => {
      let opt = [];

      if (props.sType === "Buses" || props.sType === "Flights") {
        for (const obj in routes) {
          // console.log("Whole value :"+routes);
          // console.log("checking"+routes[obj]);
          // console.log("Key"+obj);
          if (obj === route) {
            // console.log("Rout value"+route);
            // console.log("obj value"+obj);
            // console.log("checking"+routes[obj]);
            opt = routes[obj].map((arr) => <li key={arr}>{arr}</li>);
            // console.log("obj value" + obj);
            // console.log(opt);
          }
        }
      }
      else if(props.sType === "Hotels"){
        opt=<li key={route}>{route}  </li>;
        // console.log(opt);
      }

      const droping = <ul>{opt}</ul>;
      // console.log(droping);
      resultLoc.push(droping);
      // console.log(resultLoc);
    });
    setLocations(resultLoc);
    setTransCount(resultLoc.length);
  };useEffect(() => {getRoute()}, []);

  // console.log(routes);

  return (
    <>
      <div className="card-item-container">
        <div className="card-item-sub-container">
          <h1>{props.sName}</h1>
          <p>{`${transCount} ${props.sType} available`}</p>
          <p>{locations}<br/></p>
          {/* <p>{props.sLoc}<br/></p> */}
        </div>
      </div>
    </>
  );
}

export default Card;
