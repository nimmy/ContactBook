import logo from './logo.svg';
import './App.css';
import Listing from './components/Listing/Listing';
import Picture from './components/Pictures/Picture';
import BookContainer from './components/Books/BookContainer';
import {Provider} from './context/BookContext';

function App() {
  return (
    <div className="App">
      {/* <Picture /> */}
      {/* <Listing /> */}
      <Provider>
        <BookContainer />
      </Provider>
    </div>
  );
}

export default App;
