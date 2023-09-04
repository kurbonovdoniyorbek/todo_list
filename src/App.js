import './App.css';
import Content from './components/content/Content';
import Form from './components/form/Form';
import Info from './components/info/Info';

function App() {
  return (
    <div className="App">
      <Info />
      <Form />
      <Content />
      <div className='author_name'>Created by <h1>Doniyorjon</h1></div>
    </div>
  );
}

export default App;
