import React from 'react';

function Header({funcSortName, funcSortZipCode}) {
    const sortName = () => {
        funcSortName();
    };
    const sortZipCode = () => {

        funcSortZipCode();
    };

    return (
        <nav className="navbar navbar-dark bg-primary">
            <h1>Header</h1>
            <span className="btn btn-primary" onClick={sortName}>by Auto Name</span>
            <span className="btn btn-primary" onClick={sortZipCode}>by ZipCode</span>
        </nav>
    );
}

export default Header;