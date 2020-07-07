import React, { useState, useEffect } from 'react';
import Axios from 'axios';

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     Axios.get('https://jsonplaceholder.typicode.com/todos')
//       .then(res => {
//         setTodos(res.data);
//       })
//   }, []);

//   return (
//     <div className="App">
//       <h1>React App</h1>
//       {todos.map((todo) => (
//         <li key={todo.id}>{todo.title}</li>
//       ))};
//     </div>
//   );
// }

function App() {
  const [movie, setMovie] = useState([]);
  const [click, setClick] = useState(false);

  useEffect(() => {
    Axios.get("http://omdbapi.com/?apikey=5000d172&t=Milpitas")
      .then(res => {
        setMovie(res.data);
        // console.log(res.data);
        // console.log(res.data.Title);
      })
  }, []);

  function handleClick() {
    setClick(!click);
  }

  return (
    <div>
      <h1>Title: {movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title + ' Poster'}/>
      <button onClick={handleClick}> Click Me! </button>
      {click && <h1>You Clicked me</h1>}
    </div>
  )
}

export default App;
