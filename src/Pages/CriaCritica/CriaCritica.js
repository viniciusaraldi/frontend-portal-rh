import '../../App.css';
import Forms from '../../Components/Forms';

function CriaCritica() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Escreva sua Critica:</h3>
        <Forms 
          placeholder="Digite sua critica"
          name="critica"
        />
      </header>
    </div>
  );
}

export default CriaCritica;
