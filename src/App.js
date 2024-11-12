import logo from './logo.svg';
import './App.css';
import StudentCard from './components/StudentCard';
import UseStateEx from './components/UseStateEx';
import UseReducerEx from './components/UseReducerEx';
import UseEffectEx from './components/UseEffectEx';
import { MyContextProvider } from './components/MyContext';
import UseContextEx from './components/UseContextEx';
import UseRefEx from './components/UseRefEx';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="100px" height="100px"/>
        
        <p>
          Zadanie 1
        </p>
        <div className="StudentList">
          <h1>Student List</h1>
          <StudentCard name="Jan" lastName="Kowalski" age={21} major="Informatyka" />
          <StudentCard name="Anna" lastName="Nowak" age={22} major="Matematyka" />
        </div>
        <p>
          Zadanie 2
        </p>
        <div className="Zad2">
                <h1>React Hook Examples</h1>
                <MyContextProvider>
                <UseStateEx />
                <UseReducerEx />
                <UseEffectEx />
                <UseContextEx />
                <UseRefEx />
                </MyContextProvider>
            </div>
            
      </header>
      
    </div>
    

  );
}

export default App;
