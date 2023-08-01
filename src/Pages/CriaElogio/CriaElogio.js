import '../../App.css';
import Forms from '../../Components/Forms';

function CriaElogio() {
  return (
    <div className="App">
      <header className="App-header">
      <h3>Escreva sua Elogio:</h3>
        <Forms 
          placeholder="Digite seu elogio"
          name="elogio"
        />
      </header>
    </div>
  );
}

export default CriaElogio;
