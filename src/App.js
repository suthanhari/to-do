import logo from './logo.svg';
import './App.css';
import Todo from './todo';

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className='col-lg-8'>
            <Todo/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
