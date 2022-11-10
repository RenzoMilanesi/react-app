import Item from "./Item"

function ItemListContainer(props){
    return(
        <div>
            <h1>Mis productos</h1>
            <Item tittle="Parrilla" price={800} imgurl="/img/parrilla.JPG"/>
            <Item tittle="Banqueta" price={1800} imgurl="/img/escritorio.JPG"/>
            <Item tittle="Escritorio" price={500} imgurl="/img/banqueta.JPG"/>
            <Item tittle="Mesada" price={10000} imgurl="/img/mesada.JPG"/>

        </div>
    )
    
}
export default ItemListContainer;