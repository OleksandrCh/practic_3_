import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import AddCard from "./components/addCard/AddCard";

class App extends React.Component {

    state = {
        data: null,
        sortType: null,
    };

    //Получаем данные с jsonplaceholder
    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => {
                this.addVisible(result);
                this.setState({data: result})
            })

    };

    addVisible = (data) => {
        data.map(user => user.visible = true);
    };

    //Сортируем по имени
    sortByAuthorName = () => {
        const sort = this.state.data.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });

        this.setState({data: sort, sortType: 'byName'})
    };

    //Сортируем по Зип-коду
    sortByZipCode = () => {
        let sort = this.state.data.sort((a, b) => {
            if (a.address.zipcode > b.address.zipcode) {
                return 1;
            }
            if (a.address.zipcode < b.address.zipcode) {
                return -1;
            }
            return 0;
        });
        this.setState({data: sort, sortType: 'byZip'})
    };

    //Удаление Карточки нажатием на
    removeCard = (e) => {
        const filter = this.state.data.filter(user => user.id !== e);
        this.setState({data: filter})
    };

    // Прячет и показывает содержимое карты
    hideShow = (id) => {
        const newData = this.state.data.map(user => {
            (id === user.id && user.visible === true) ? user.visible = false : user.visible = true;
            return user;
        });
        this.setState({data: newData});
    };

    // Добавляет новую карту
    addCard = (value) => {
        value.id = this.state.data.length + 1;
        value.visible=true;
        const newData = [...this.state.data, value];
       // this.addVisible(newData);
        this.setState({data: newData})
    };

    //Отрисовываем компоненты
    render() {
        const {data, status, url} = this.state;
        return (
            <div className="App">
                <Header funcSortName={this.sortByAuthorName} funcSortZipCode={this.sortByZipCode}/>
                {data ? data.map(i => {
                        return <Card user={i} key={i.id} url={url} status={status} hideShow={this.hideShow}
                                     removeCard={this.removeCard.bind(null, i.id)}/>
                    })
                    : 'Loading...'
                }
                <AddCard addCard={this.addCard}/>
            </div>
        );
    }
}


export default App;
