import React from 'react';
import CardInform from "../card_inform/CardInform";

function Card({user,removeCard,hideShow,editCard}) {

    const hide =(id)=> hideShow.bind(this, id);
    const remove =()=> removeCard();
    const edit =(id)=> editCard.bind(this, id);

    return (
        <div key={user.id} className="card" style={{width: '19rem', float: 'left', height: '21rem'}}>
            <div className="card-body">
                {user.visible && <div>
                    <CardInform user={user}/>
                </div>}
                <div className='d-flex align-content-end'>
                    <span className="btn btn-primary m-1" onClick={remove}>Remove Me</span>
                    <span className="btn btn-primary m-1" onClick={hide(user.id)}>{user.visible ? "Hide" : "Show"}</span>
                    <span className="btn btn-primary m-1" onClick={edit(user.id)}>Edit</span>
                </div>

            </div>
        </div>
    );
}

export default Card;