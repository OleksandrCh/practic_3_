import React from 'react';

function Header({funcSortName,funcSortZipCode}) {
    const sortName = () => {
        console.log('sortName');
        funcSortName();
    };
    const sortZipCode = () => {
        console.log('sortZipCode');
        funcSortZipCode();
    };
    return (
        <nav className="navbar navbar-dark bg-primary">
            <h1>Header</h1>
            <a href="#" className="btn btn-primary" onClick={sortName}>by Auto Name</a>
            <a href="#" className="btn btn-primary" onClick={sortZipCode}>by Date</a>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </nav>
    );
}

export default Header;