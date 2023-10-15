
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import TopMenu from './TopMenu';
import Footer from './Footer';

import MenuItemService from '../services/MenuItemService';

const service = new MenuItemService();

export default function UpdateMenuItem(props) {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    //-----------------------------------------------------------------------------------
    // Function:  handleLookup  
    // Description:  Lookup a single menu item
    //-----------------------------------------------------------------------------------
    const handleLookup = (event) => {

        event.preventDefault();

        // Call central service to get a single menu item from database
        service.getSingleMenuItem(id).then((data) => {
                
        //Set the fields on the form with the retrieved values from the database
        setId(data.id);
        setName(data.name);
        setDescription(data.description);
        setPrice(data.price);
        setImage(data.image);

        });
        
    }


    //-----------------------------------------------------------------------------------
    // Function:  handleSubmit  
    // Description:  Update a menu item
    //-----------------------------------------------------------------------------------    
    const handleSubmit = (event) => {

        event.preventDefault();

        //service.updateMenuItem( menuId, name, description, price, image );
        service.updateMenuItem( id, name, description, price, image );

        // Clear the fields on the form
        setId("");
        setName("");
        setDescription("");
        setPrice("");
        setImage("");
        
    }

return (

<>

    <TopMenu   />
   
    <h4 className='h4'>Update a Menu Item </h4>

    <form onSubmit={handleSubmit} >
   
        <label for="id">ID:  </label>
        <input type="text" className='form-control' value={id} onChange={(e) => setId(e.target.value)} />
        <button type="button" className="btn btn-outline-primary" onClick={handleLookup}>Lookup Menu Item</button>
        <br></br>
        <br></br>

        <label for="name">Name:  </label>
        <input type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
            
        <br></br>

        <label for="description">Description:  </label>
        <input type="text" className='form-control' value={description} onChange={(e) => setDescription(e.target.value)} />
            <br></br>

        <label for="price">Price:  </label>
        <input type="text" className='form-control' value={price} onChange={(e) => setPrice(e.target.value)} />


        <br></br>

        <label for="image">Image:  </label>
        <input type="text" className='form-control' value={image} onChange={(e) => setImage(e.target.value)} />

            <br></br>

            <button type="submit" className="btn btn-primary">Update</button>

    </form>

    <Footer   />

</>

);

}