import { useState } from 'react';
import ReactDOM from 'react-dom/client';

import TopMenu from './TopMenu';
import Footer from './Footer';

import MenuItemService from '../services/MenuItemService';

// Declare a service from the central service component for the database
const service = new MenuItemService();

export default function AddMenuItem(props) {

    // Declare state variables that will set by the page
    // These variable will be used later to call the central service component
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    
    const handleSubmit = (event) => {

        event.preventDefault();
  
        // Call service to add this menu item the database via an fetch API call
        service.addMenuItem( id, name, description, price, image );

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
 
    <h4 className='h4'>Add a Menu Item </h4>

   <form onSubmit={handleSubmit} >
   
        <label for="id">ID:  </label>
        <input type="text" className='form-control' value={id} onChange={(e) => setId(e.target.value)} />

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

            <button type="submit" className="btn btn-primary">Create</button>

    </form>

    <Footer   />

</>

);

}