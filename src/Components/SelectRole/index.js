import './index.css'


function SelectRole() {

    const opcoes = ["ti", "rh", "Natura"]

    return (
        <select className='SelectCadastroUsuario'>
            {opcoes.map((opcao) => (
                <option key={opcao} value={opcao}>{opcao}</option>
            ))}
        </select>
    )

}

export default SelectRole