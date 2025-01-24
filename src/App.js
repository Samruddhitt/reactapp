import logo from './logo.svg';
import './App.css';
import './Counter'
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <Counter/>
    </div>
  );
}

function HelloWorld(){
  return <h1>Hello, World!</h1>;
}

export default App;
