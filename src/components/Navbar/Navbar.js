import React, { useContext, useState } from 'react';
import './Navbar.css'
import {AppBar,Toolbar, Typography, Container, Badge} from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { menuLink } from '../../utlilts/constants';
import Basket from '../Basket/Basket';
import { Contexts } from '../../Context/Contexts';

function Navbar(props) {
  const [activeLink,setActiveLink] = useState('home')
  const {showBasket,setShowBasket,state} = useContext(Contexts)
    return (
        <nav>
            <AppBar position="static">
                <Container maxWidth='lg'>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Shop
                        </Typography>
 
                        <ul>
                        {
                            menuLink.map((element,value) => {
                                return <li className={activeLink === element.link ? 'activeLink' : ''}key={value} onClick={() => setActiveLink(element.link)}>
                                {element.link}
                             </li>
                            })
                        }
                        </ul>
                        <Badge badgeContent={state.basket.length} color="primary" onClick={() => setShowBasket(true)}>
                            <ShoppingBagIcon/>
                        </Badge>
                    </Toolbar>
                </Container>
            </AppBar>
            {showBasket && <Basket/>}
        </nav>
    );
}

export default Navbar;