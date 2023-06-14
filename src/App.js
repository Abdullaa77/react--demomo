import React, { useEffect, useReducer, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import {API_KEY} from './utlilts/constants'
import Product from './components/Product/Product';
import {Contexts} from './Context/Contexts'
import BasketReducer, { intialzeState } from './reducer/BasketReducer';
function App(props) {
  const [datas,setDatas] = useState([])
  const [showBasket,setShowBasket] = useState(false)
  const [state,dispatch] = useReducer(BasketReducer,intialzeState)
  useEffect(() => {
    fetch(`${API_KEY}/products`)
      .then(data => data.json())
      .then(data => setDatas(data))
      .catch(err => console.log(err))
  },[])
  return (
    <div>
      <Contexts.Provider value={{datas,setDatas,showBasket,setShowBasket,state,dispatch}}>
        <Navbar/>
        <Product/>
      </Contexts.Provider>
    </div>
  );
}

export default App;