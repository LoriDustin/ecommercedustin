import Item from './Item'
import './Item.css'

const ItemList = ( { data } ) => {
  return (
    <div className='ItemList'>
       { data.map((list) =>{
            return (
                <Item
                key={list.id}
                title={list.title}
                image={list.image}
                precio={list.precio}
                stock={list.stock}
                />
            )
        })
        }
    </div>
  )
}

export default ItemList