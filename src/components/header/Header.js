import React, {Fragment} from 'react';

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
            <a href="#" className="btn btn-primary" onClick={sortName}>by Auto Name</a>
            <a href="#" className="btn btn-primary" onClick={sortZipCode}>by ZipCode</a>
        </nav>
    );
}

export default Header;