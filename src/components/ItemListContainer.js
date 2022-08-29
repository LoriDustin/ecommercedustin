import './ItemListContainer.css'

const ItemListContainer = (props) => {
  return (
    <div className='ItemList'>
        <h2>{props.nombre}</h2>
        <p>{props.parrafo}</p>
        
        </div>
  )
}

export default ItemListContainer