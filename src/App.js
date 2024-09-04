import logo from './logo.svg';
import './App.css';
import Frame from './Frame';

function App() {
  const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];

  const listItems = people.map(person => <p>{person.name}: {person.profession}</p>);
  return (
    <div className="App">
      <header className ="App header">
     
      /*
      <form>
      Email<input></input><br></br>
      Password<input></input><br></br>
      Submit<button></button>
    
      </form>
      */
      <Frame />
      <Frame />
        <ul>
          {listItems}
        </ul>
      </header>
     
    </div>
  );
}

export default App;
