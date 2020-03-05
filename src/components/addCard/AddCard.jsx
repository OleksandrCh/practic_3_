import React, {useState} from 'react';

function AddCard(props) {
    const [name, setName] = useState();
    const [username, setUserName] = useState();
    const [phone, setPhone] = useState();
    const [zipCode, setZipCode] = useState();
    const onchangeName = (e) => setName(e.target.value);
    const onchangeUseName = (e) => setUserName(e.target.value);
    const onchangePhone = (e) => setPhone(e.target.value);
    const onchangeZipCode = (e) => setZipCode(e.target.value);
    const user = {name: name, username: username, phone: phone, address: {zipcode: zipCode}};

    return (
        <div className="card" style={{width: '19rem', float: 'left', height: '21rem'}}>
            <div className="card-body">
                <div>Name:
                    <input type='text' className="card-title" value={name} onChange={onchangeName}/>
                </div>
                <div>User Name:
                    <input type='text' className="card-title" value={username} onChange={onchangeUseName}/>
                </div>
                <div>Phone:
                    <input type='text' className="card-title" value={phone} onChange={onchangePhone}/>
                </div>
                <div> Zip-Code
                    <input type='text' className="card-title" value={zipCode} onChange={onchangeZipCode}/>
                </div>
                <span className="btn btn-primary m-1" onClick={props.addCard.bind(null, user
                )}>Add Card</span>
            </div>
        </div>
    );
}

export default AddCard;