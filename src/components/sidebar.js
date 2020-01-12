import React from 'react';
import '../css/sidebar.css';


function Sidebar(){
    return(
        <div>
            <div className="sidebar">
            
            <nav>
                    <a className="s-link" href="/">Home</a>
                    <a className="s-link" href="/locations">Locations</a>         
                </nav>
            </div>                
        </div>

    );
}

export default Sidebar;