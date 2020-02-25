import React from 'react';

function Card({user,removeCard}) {
    return (
        <div key={user.id} className="card" style={{width: '18rem', float: 'left', height: '18rem'}}>
            <div className="card-body">
                <h3 className="card-title">{user.name}</h3>
                <h4 className="card-title">{user.username}</h4>
                <h5 className="card-title">{user.phone}</h5>
                <div> Zip-Code
                    <h5 className="card-title">{user.address.zipcode}</h5>
                </div>
                <a href="#" className="btn btn-primary" onClick={removeCard}>Remove Me</a>
            </div>
        </div>
    );
}

export default Card;