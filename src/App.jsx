import "./App.css";
import Counter from "./Components/CounterApp";
import Signup from "./Components/SignupPage";

function App() {
  return (

    <>
    <div className="container">
      <div>
        <Counter />
      </div>
      <div>
        <Signup/>
      </div>
      
    </div>
      
    </>
  );
}

export default App;
