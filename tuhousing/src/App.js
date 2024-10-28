import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import SearchListing from "./components/SearchListing";

function App() {
  return (
    <div className="App">
      <Header/>
    <div className="mb-4">
        <SearchListing/>
    </div>
    </div>
  );
}

export default App;
