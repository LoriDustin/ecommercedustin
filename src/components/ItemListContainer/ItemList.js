
import Item from './Item'

const ItemList = ( { data } ) => {
  return (
    <>
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
    </>
  )
}

export default ItemList