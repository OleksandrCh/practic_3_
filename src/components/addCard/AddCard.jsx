import React, {useEffect, useState} from 'react';

function AddCard({editChange, addCard}) {
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [username, setUserName] = useState();
    const [phone, setPhone] = useState();
    const [zipCode, setZipCode] = useState();
    const onchangeName = (e) => setName(e.target.value);
    const onchangeUseName = (e) => setUserName(e.target.value);
    const onchangePhone = (e) => setPhone(e.target.value);
    const onchangeZipCode = (e) => setZipCode(e.target.value);
    let user = {id: id, name: name, username: username, phone: phone, address: {zipcode: zipCode}};

    useEffect(() => {
        setId(editChange.id);
        setName(editChange.name);
        setUserName(editChange.username);
        setPhone(editChange.phone);
        setZipCode(editChange.address.zipcode);
    }, [editChange]);

    const handler = (value) => {
        addCard(value);
        setId('');
        setName('');
        setUserName('');
        setPhone('');
        setZipCode('');
    };

    return (
        <div className="card" style={{width: '19rem', float: 'left', height: '21rem'}}>
            <div className="card-body d-flex flex-column">
                <div className=' d-flex justify-content-between'><span>Name:</span>
                    <input type='text' className="card-title" value={name} onChange={onchangeName}/>
                </div>
                <div className=' d-flex justify-content-between'><span>User Name:</span>
                    <input type='text' className="card-title" value={username} onChange={onchangeUseName}/>
                </div>
                <div className=' d-flex justify-content-between'><span>Phone:</span>
                    <input type='text' className="card-title" value={phone} onChange={onchangePhone}/>
                </div>
                <div className=' d-flex justify-content-between'><span>Zip-Code</span>
                    <input type='text' className="card-title" value={zipCode} onChange={onchangeZipCode}/>
                </div>
                <span className="btn btn-primary m-1" onClick={handler.bind(null, user)}>Add Card</span>
                {/*<span className="btn btn-primary m-1" onClick={change}>Change Edit Card</span>*/}
            </div>
        </div>
    );
}

export default AddCard;