export default function TopMenu(props) {
    return (

        <>
           

            <nav className="navbar navbar-dark bg-primary navbar-expand-lg" >
                <h3 className="text-bg-primary p-3">Thai Esan Restaurant</h3>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/">Home </a>
                    <a className="nav-item nav-link" href="/adminItem">Add Menu Item</a>
                    <a className="nav-item nav-link" href="/adminDelete">Delete Menu Item</a>                    
                    <a className="nav-item nav-link" href="/adminUpdate">Update Menu Item</a>                    
                    </div>
                </div>
            </nav>

            <br></br>

            
        </>

    );
    
}