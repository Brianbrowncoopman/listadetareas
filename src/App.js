import './App.css';
import ListaDeTareas from './components/ListaDeTareas';



function App() {
  return (
    <div className="App">      
      
      <div className='tareas-lista-principal'>
        <h1>MIS TAREAS</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
