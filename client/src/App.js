
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  let [data, setData] =  useState([])

  const fetchData = async () =>{
    // fetch("http://localhost:5000/products")
    //   .then(res=> res.json())
    //   .then(data =>{
    //       console.log(data)
    //       setData(data)
    //   })
    // axios.post("http://localhost:5000/products")
    //   .then(data =>{
    //     setData(data.data)
    //   })
    const data =  await axios.get("http://localhost:5000/fsdAPI/students")
    setData(data.data)
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className="App">
        {
          data.map((val,ind) =>{
            return <h1>{val.name}</h1>
          })
        }
    </div>
  );
}

export default App;
