import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import { Component } from 'react';

class App extends Component {
  state = {
    hotels: [
      {
        id: '1',
        name: 'Tu najlepiej',
        city: 'Warszawa',
        rating: '4.5',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop',
        image: ''
      },
      {
        id: '2',
        name: 'Hotel DoDo',
        city: 'Gdańsk',
        rating: '3.8',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop',
        image: ''
      },
    ]
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Hotels hotels={this.state.hotels} />
      </div>
    );
  }
}

export default App;
