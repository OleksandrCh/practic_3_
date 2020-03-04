import React from 'react';

function Card({user,removeCard,hideShow,status}) {

    return (
        <div key={user.id} className="card" style={{width: '19rem', float: 'left', height: '21rem'}}>
            <div className="card-body">
                {user.visible && <div>
                    <h3 className="card-title">{user.name}</h3>
                    <h4 className="card-title">{user.username}</h4>
                    <h5 className="card-title">{user.phone}</h5>
                    <div> Zip-Code
                        <h5 className="card-title">{user.address.zipcode}</h5>
                    </div>
                </div>}
                <span href="#" className="btn btn-primary m-1" onClick={removeCard}>Remove Me</span>
                <span href="#" className="btn btn-primary m-1" onClick={hideShow.bind(null, user.id)}>{user.visible ? "Hide" : "Show"}</span>
                <span href="#" className="btn btn-primary m-1" onClick={true}>Remove Me</span>
            </div>
        </div>
    );
}

export default Card;