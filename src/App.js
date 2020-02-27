import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Card from "./components/card/Card";

class App extends React.Component {

    state = {
        data: null,
        sortType: null,
    };

    //Получаем данные с jsonplaceholder
    componentDidMount() {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    this.setState({data: result})
                })
        }, 3000)
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
        const sort = this.state.data.sort((a, b) => {
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
        console.log(e);
        const filter = this.state.data.filter(user => user.id !== e);
        this.setState({data: filter})
    };

    //Отрисовываем компоненты
    render() {
        const {data} = this.state;
        return (
            <div className="App">
                <Header funcSortName={this.sortByAuthorName} funcSortZipCode={this.sortByZipCode}/>
                {data ? data.map(i => {
                        return <Card user={i} key={i.id} removeCard={this.removeCard.bind(null, i.id)}/>
                    })
                    : 'Loading...'
                }
            </div>
        );
    }
}


export default App;
