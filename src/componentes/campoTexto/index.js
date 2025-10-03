import './campoTexto.css' //importanto o css

const CampoTexto = (props) => {// parâmetros passados de fora.
    const placeholderModificado = `${props.placeholder}...`


    const aoDigitado/*chamada toda vez que o usuário digitar*/ = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>

            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={`${placeholderModificado}...`} />
        </div>
    )
}
export default CampoTexto 
