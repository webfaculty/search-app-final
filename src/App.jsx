import './style/app.css';
import Widget from './components/Widget';
import Card from './components/Card';
import axios from 'axios';
import { useState } from 'react';


function App() {

  let [results,setResults]=useState([]);
  let [category,setCategory]=useState([]);

  const handleSubmit=(selectedCategory,searchQuery)=>
  {
    // console.log(selectedCategory);
    // console.log(searchQuery);
    makeAJAXCall(selectedCategory,searchQuery);
  }

  const makeAJAXCall=(selectedCategory,searchQuery)=>
  {
    let updatedResult=[];
    let categoryStates=[];
    let allCategoriesList=["Buses","Flights","Hotels"];
    axios
    .get("bookmytrip-service.json")
    .then((response)=>
      {
        if (selectedCategory !== "All") {
          let travelServices = response.data[selectedCategory];

          travelServices.forEach((elem) => {
            if (
              elem.serviceName
                .toLowerCase()
                .search(searchQuery.toLowerCase()) !== -1
            ) {
              updatedResult.push(elem);
              categoryStates.push(selectedCategory);
              // console.log(updatedResult);
              // console.log(categoryStates);
            }
          });
          setResults(updatedResult);
          setCategory(categoryStates);
         
          // console.log(travelServices);
        }
        else{
          // console.log("Selected all the categories");
          allCategoriesList.forEach((cate)=>{
            let allServices=response.data[cate];

            allServices.forEach((elem)=>
            {
              if(elem.serviceName.toLowerCase().search(searchQuery.toLowerCase())!==-1)
                {
                  updatedResult.push(elem);
                  categoryStates.push(cate);
                }
            })
          })
          setResults(updatedResult);
          setCategory(categoryStates);

        }
      })
    .catch((error)=>
    {
        console.log(error);
    })
  }

  return (
    <>
        <header>
          <Widget onSubmit={handleSubmit}/>
        </header>
        <main>
        {
          results.map((res,ind)=>(
            <Card 
            key={res.serviceID}
            sName={res.serviceName}
            sType={category[ind]}
            sLoc={res.locations}
            />
          ))
        }
        </main>
    </>
  );
}

export default App;
