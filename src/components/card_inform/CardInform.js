import React, {Fragment} from 'react';

function CardInform(props) {
    return (
        <Fragment>
            <h3 className="card-title">{props.user.name}</h3>
            <h4 className="card-title">{props.user.username}</h4>
            <h5 className="card-title">{props.user.phone}</h5>
            <div> Zip-Code
                <h5 className="card-title">{props.user.address.zipcode}</h5>
            </div>
        </Fragment>
    );
}

export default CardInform;