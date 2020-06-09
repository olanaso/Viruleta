import React from 'react';
import HeaderSiderbar from "./HeaderSiderbar";


const Siderbar = ({children}) => {
    
    return (
        <>
            <nav id="sidebarMenu" className="col-md-4 col-lg-3 d-md-block bg-light sidebar collapse">
                <HeaderSiderbar/>
                {children}
            </nav>
        </>
    );
};

export default Siderbar;