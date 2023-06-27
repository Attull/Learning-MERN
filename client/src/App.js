
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  let [data, setData] =  useState([])

  const fetchData = () =>{
    fetch("http://localhost:5000/students")
      .then(res=> res.json())
      .then(data =>{
          console.log(data)
          setData(data)
      })
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className="App">
        {
          data.map(val =>{
            return <h1>{val.name}</h1>
          })
        }
    </div>
  );
}

export default App;
