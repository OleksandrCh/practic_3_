import React from 'react';
import CardInform from "../card_inform/CardInform";

function Card({user,removeCard,hideShow}) {
    return (
        <div key={user.id} className="card" style={{width: '19rem', float: 'left', height: '21rem'}}>
            <div className="card-body">
                {user.visible && <div>
                    <CardInform user={user}/>
                </div>}
                <span className="btn btn-primary m-1" onClick={removeCard}>Remove Me</span>
                <span className="btn btn-primary m-1" onClick={hideShow.bind(null, user.id)}>{user.visible ? "Hide" : "Show"}</span>
            </div>
        </div>
    );
}

export default Card;