import React, { useContext, useEffect, useState } from 'react';
import './Basket.css'
import CloseIcon from '@mui/icons-material/Close';
import { Contexts } from '../../Context/Contexts';
function Basket(props) {
    const [total,setTotal] = useState(0)
    const {setShowBasket,state,dispatch} = useContext(Contexts)
    useEffect(() => {
        var res = state.basket?.reduce((prev,curr) => prev + curr.data.price,0)
        setTotal(res)
    },[state])


    const DeleteProduct = (data) => {
        dispatch({type:'REMOVE_PRODUCT',payload:data.data.id})
    }


    const addQty = (data) => {
        state.basket.find(element => {
            if(element.data.id === data.id){
                let count = element.qty + 1
                dispatch({type:'CHANGE_QTY',payload:{count:count ,id:element.data.id}})
            }
        })
    }
    return (
        <aside>
            <div className="top">
            <h2>Basket List<CloseIcon onClick={() => setShowBasket(false)}/></h2>
            {
                state.basket.length > 0 ? state.basket.map((element,value) => {
                    return <div className="box">
                    <div className="img">
                        <img src={element.data.image} alt="" /> 
                    </div>
                    <div className="text">
                        <h3>{element.data.title.slice(0,20)}</h3>
                        <p>{element.data.price.toLocaleString('uz-Uz',{
                            style:'currency',
                            currency:'UZS'
                        })}</p>
                    </div>
                    <div className="btnGroup">
                        <button onClick={() => addQty(element.data)}>+</button>
                        <span style={{color:'white'}} >{element.qty}</span>
                        <button onClick={() => DeleteProduct(element)}>-</button>
                    </div>data.
                </div>
                }): <h3>Basketda hech qanday mahsulot yoq</h3>
            }
            </div>
            <div className="total">
                <h4>Total:<span>{total.toLocaleString('uz-Uz',{
                            style:'currency',
                            currency:'UZS'
                        })}</span>
                </h4>
            </div>
        </aside>
    );
}

export default Basket;