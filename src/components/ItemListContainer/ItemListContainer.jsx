
function saludo(props){
    const styleh1={color:props.color}
    return(<h1 style={styleh1}>{props.greeting}</h1>)
}
export default saludo;