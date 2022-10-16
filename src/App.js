import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  // Get all Monsters from remote
  useEffect(()=>{
    fetchMonsterList();
  }, []);

  // update Filtered Monsters only monsters or search feild changed
  useEffect(()=>{
    const monsterString = monsters.filter(monster => {
      const monsterName = monster.name.toLocaleLowerCase();
      return monsterName.includes(searchInput);
    })
    setFilterMonsters(monsterString);
  }, [monsters, searchInput]);

  const fetchMonsterList = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users'); 
      setMonsters(response.data);
    } catch (error) {
      throw(error);
    }
  };

  const onChangeHandler = (event)=>{
    setSearchInput(event.target.value.toLocaleLowerCase());
  }

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder='Search Monster:' changeHandler={e => onChangeHandler(e)} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
