
export default class MenuItemService {

    constructor(url) {

        this.url = url || defaultBaseUrl;
        this.url = url;
    }


    //-------------------------------------------------------------------------------
    //    Function:  getAllMenuItems
    // Description:  Get all menu items
    //-------------------------------------------------------------------------------
    getAllMenuItems() {

            // Declare and build a URL to retrieve all menu items
            let url =  "http://localhost:8000/menu";

            // Call API to retrieve all menu items
            return fetch(url).then(res => res.json() )
                                    .then((data) => {
                                        return data.map((d,index) => {
                                            return {
                                                id: d.id,
                                                name: d.name,
                                                description: d.description,
                                                price: d.price,
                                                image: d.image

                                            }

                                        });    
                                    });

    }// end GetAllMenuItems    


    //-------------------------------------------------------------------------------
    //    Function:  geSingleMenuItem
    // Description:  Retrieve a single menu item
    //-------------------------------------------------------------------------------
    getSingleMenuItem( id ) {

        // Declare and build a URL to retrieve all menu items
        let url =  "http://localhost:8000/menu/" + id;


        // Call API to retrieve a signle menu item
        return fetch(url).then(res => res.json() )
                                .then((data) => {

                                    console.log("central service - data.id" + data.id);
                                   
                                    return data;
   

                                    });    
                                                               

    }// end geSingleMenuItem  


    //-------------------------------------------------------------------------------
    //    Function:  addMenuItems
    // Description:  This adds a new menu item
    //-------------------------------------------------------------------------------

   addMenuItem( menuId, menuName, menuDescription, menuPrice, menuImage ) {

        console.log( menuName + menuDescription + menuPrice + menuImage );

        fetch("http://localhost:8000/menu", {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               'id': menuId,
               'name': menuName,
               'description': menuDescription,
               'price': menuPrice,
               'image': menuImage
            })
        }).then(response => response.json())
        .then();


    }//end addMenuItem


    //-------------------------------------------------------------------------------
    // Function:  updateMenuItem
    // Description:  Update a menu item with updated information
    //-------------------------------------------------------------------------------
    updateMenuItem( menuId, menuName, menuDescription, menuPrice, menuImage ) {

        let url = "http://localhost:8000/menu/" + menuId;

        console.log( menuId, menuName + menuDescription + menuPrice + menuImage );

        fetch( url, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            'id': menuId,
            'name': menuName,
            'description': menuDescription,
            'price': menuPrice,
            'image': menuImage
            })
        }).then(response => response.json())
        .then();

    }//end updateMenuItem




    //-------------------------------------------------------------------------------
    // function:  deleteMenuItem
    // Description:  Delete a single menu item
    //-------------------------------------------------------------------------------

    deleteMenuItem( id ) {
    
        let urlToDelete = "http://localhost:8000/menu/" + id;
    
        fetch(urlToDelete, { method: 'DELETE' })
        .then(() => console.log("Delete Successful.")  );
    
    
    }//end deleteMenuItem





}//end MenuItemServicce
