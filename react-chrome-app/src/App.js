import logo from './logo.svg';
import {useState, useEffect} from 'react'; 
import Leaderboard from './Components/Leaderboard';
import Header from './Components/Header';
import './App.css';

const App = () => {
  const [leaderBoard, setLeaderboard] = useState([]);
  // console.log(leaderboard)
  useEffect(() => {
      fetch('/api/test')
          .then(res => res.json())
          .then(data => setLeaderboard(data))
  }, []);


  return (
      <div className='App'>
          <Header />
          <Leaderboard leaderBoard = {leaderBoard} />
      </div>
      )
  };

export default App;
