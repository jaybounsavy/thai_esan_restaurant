
import { useState, useEffect } from 'react';

import TopMenu from './TopMenu';
import Footer from './Footer';

import MenuItemService from '../services/MenuItemService';
import MenuItemTable from '../components/MenuItemTable';

const service = new MenuItemService();

export default function Home(props) {

    // Declare a state variable to hold the menu items
    const [ items, setItems ] = useState([]);
    const [ status, setStatus ] = useState("");


    //----------------------------------------------------------------------------------------
    // Function:  handleDelete
    // Description:  Call central service to delete a menu item
    //----------------------------------------------------------------------------------------
    function handleDelete(code, e) {

        // Call the central service to delete the selected menu item
        service.deleteMenuItem( code );

        // Call to the central service to retrieve the latest list of menu items
        service.getAllMenuItems().then((data) => {
            console.log(data);
            setItems(data);
        });

        setStatus(true);
    
    }


    // Retrieve a list of menu items that will be displayed on the page
    useEffect(() => {
        service.getAllMenuItems().then((data) => {
            console.log(data);
            setItems(data);
        });

    }, []);


    return (

        <>

            <TopMenu   />

             <MenuItemTable items={ items }  onDelete={ handleDelete } />

            <Footer   />

        </>
            
    );
    
}