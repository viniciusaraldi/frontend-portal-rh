import '../../App.css';
import Forms from '../Forms';

function CriaSugestao() {
  return (
    <div className="App">
      <header className="App-header">
      <h3>Escreva sua Sugestão:</h3>
        <Forms 
          placeholder="Digite sua sugestão"
          name="sugestao"
        />
      </header>
    </div>
  );
}

export default CriaSugestao;
