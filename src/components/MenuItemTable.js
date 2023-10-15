

import MenuItemService from '../services/MenuItemService';

const service = new MenuItemService();


export default function MenuItemTable(props) {

    // Declare a state variable to hold menu items
    const items = props.items || [];
   
    //---------------------------------------------------------------------------------------
    // Handle click on "Delete" button event
    //---------------------------------------------------------------------------------------
    const handleDelete = (event) => {

        event.preventDefault();

        // Find the selected menu item that selected and clicked on
        let code = event.target.closest('tr').dataset.item;


        // Call the parent DeleteMenuItem JSX component to delete the selected menu item
        if (code) {
            if (props.onDelete) {
                props.onDelete(code, event);
            }
        }
        
    }


    // Build a list of menu items to be displayed
    const rows = items.map((item,index) => {
        return(
            <tr key={ item.id } data-item={ item.id}   >
                <td>{ item.name }</td>
                <td>{ item.description }</td>
                <td>{ item.price }</td>
                <td><button onClick={handleDelete}>Delete</button></td>

            </tr>
        );

    });     


    return (

        <table className="table table-striped table-hover">

            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>

            </thead>
            <tbody>

                {rows}

            </tbody>

            { (rows.length > 0) 
              ? <tfoot>
                    <tr><td colSpan="4"> { rows.length} Menu Items </td></tr>
                </tfoot>
              : null
    
            
            }


        </table>
    );


}