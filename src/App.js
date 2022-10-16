import './App.css';

function App() {
  console.log('render')
  return (
    <div className="App">
      <input 
      className='search-box' 
      type='search' 
      placeholder='Search Monsters' 
      onChange={(event)=> {
        console.log(event);
      }}
      />
    </div>
  );
}

export default App;
