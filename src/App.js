import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import { Component } from 'react';

class App extends Component {
  hotels = [
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
  state = {
    hotels: [],
    loading: true
  }

  searchHandler(term) {
    const hotels = [...this.hotels].filter(x => x.name.toLowerCase().includes(term.toLowerCase()));
    this.setState({ hotels })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        hotels: this.hotels,
        loading: false
      })
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <Header onSearch={term => { this.searchHandler(term) }} />
        <Menu />
        {this.state.loading ? (
          <p>ładowanie danych...</p>
        ) : (
          <Hotels hotels={this.state.hotels} />
        )}
      </div>
    );
  }
}

export default App;
