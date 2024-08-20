import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { Counter } from './components/Counter/Counter';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
       <div className="App">
          <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
