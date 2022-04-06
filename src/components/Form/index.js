const Form = ({listaTransactions, setListaTransactions}) =>{
    
    return (
        <form>
            <input name="valor" type="text" />
            <input name="descricao" type="text" />
            <select name="tipo">
                <option value="entrada">Entrada</option>
                <option value="saida">Saída</option>
            </select>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form