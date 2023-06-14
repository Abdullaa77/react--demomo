import React, { useContext, useReducer, useState } from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Skeleton} from '@mui/material';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { Contexts } from '../../Context/Contexts';
import Message from '../Message/Message.js';
import './Product.css'
function Product(props) {
    const {datas} = useContext(Contexts)
    // const arr = [1,2,3,4,5,6,7,8]
    const {state,dispatch} = useContext(Contexts)
    console.log(state)
    const [msg,setMsg] = useState(false)
    const [msgTitle,setMsgTitle] = useState("bu mahsulot bor")
    const addBasket = (data) => {
        var res = state.basket.some((element,value) => element.id == data.id)
        console.log(res)
        if(res){
                setMsg(true)
                setMsgTitle("bu mahsulot bor")
                setTimeout(() => {
                    setMsg(false)
                },3000)
        }else{
            setMsg(true)
            setTimeout(() => {
                setMsg(false)
            },3000)
            setMsgTitle('Mahsulot savatga qoshildi')
            dispatch({type:'ADD_PRODUCT',payload:{data,qty:1}})
        }
        
    }
    return (
        <section className='product'>
            <Container maxWidth='xl'>
                <Grid container spacing={2} alignItems='center'>
                    {
                       datas ? datas.map((element,value) => {
                          return <Grid item xs={6} md={3} key={value}>
                            <Card sx={{ maxWidth: 345, marginTop:'20px',boxShadow:'unset',textAlign:'center'}}>
                        <img src={element.image} alt="" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {element.title.slice(0,20)}...
                          </Typography>
                          <Typography sx={{textAlign:'left'}} variant="body2" color="text.secondary">
                            {element.description.slice(0,90)}...
                          </Typography>
                          <Typography sx={{textAlign:'left',fontSize:'18px',marginTop:'10px'}} variant="body2" color="text.secondary">
                            {element.price.toLocaleString('uz-Uz',{
                              style:'currency',
                              currency:'UZS'
                            })}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button variant="contained" onClick={() => addBasket(element)} >Add Basket</Button>
                        </CardActions>
                      </Card>
                          </Grid>
                    })
                     : <div className="skletons" style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
                            <div style={{width:'345px',display:'flex',flexDirection:'column',marginTop:'50px'}}>
                                <Skeleton sx={{margin:'20px 0px'}} variant='rectangular' width={345} height={200}/>
                                <Skeleton sx={{margin:'20px 0px'}} variant='rectangular' width={345} height={50}/>
                            </div>
                       </div>
                    }
                </Grid>
            </Container>
            {msg && <Message title={msgTitle}/>}
        </section>
    );
}

export default Product;