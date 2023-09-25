import './App.css';
import CardList from '../components/CardList';
import React, { useState, useEffect } from "react";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
// import { robots } from './robots';

function App() {
  // constructor() {
  //   super()
  //   this.state = {
  //     robots: [],
  //     searchfield: ''
  //   }
  // }

  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')
  const [count, setCount] = useState(0)

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(users => this.setState({ robots: users }));
  // }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setRobots(users));
    console.log(count)
  },[count]) // []<-This is a chortcut for componentDidMount().

  const onSearchChange = (event) => {
    // this.setState({ searchfield: event.target.value })
    setSearchfield(event.target.value)
  }

  // render() {
  // const { robots, searchfield } = this.state;
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })
  return (!robots.length) ? <h1>Loading...</h1> :
    (
      <div className='tc'>
        <h1>Robot Friends</h1>
        <button onClick={()=>setCount(count + 1)}>Click me!</button>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots}/>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  // }
  
}

export default App;
