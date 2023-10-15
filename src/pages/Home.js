
import { useState, useEffect } from 'react';

import TopMenu from './TopMenu';
import Footer from './Footer';
import MenuItem from './MenuItem';

// Import and Instantiate the central service object
import MenuItemService from '../services/MenuItemService';
const service = new MenuItemService();

export default function Home(props) {

    // Declare a state variable to hold the menu items
    const [ items, setItems ] = useState([]);

    // Call central service to get all menu item to be displayed
    useEffect(() => {
        service.getAllMenuItems().then((data) => {
            console.log(data);
            setItems(data);
        });

    }, []);


    return (

        <>

            <TopMenu   />

            {
                items.map((item) => <MenuItem photo={item.image}  description = { item.description } name= { item.name } price={ item.price} />)
            }

           <Footer   />

        </>
            
    );
    
}