import TodoApp from "./components/TodoApp";
import './App.css'
import { MyContext } from "./MyContext";
import { useState } from "react";

function App() {

  const [todoArr, setTodoArr] = useState([]);

  return (

    <div className="app-container">
      <MyContext.Provider value={{todoArr, setTodoArr}}>
        <TodoApp />




      </MyContext.Provider>

    </div>

    
  );
}

export default App;
