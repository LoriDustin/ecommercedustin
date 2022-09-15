import { useEffect, useState} from 'react'
import ItemList from './ItemList'
import dataecommer from '../DATA/dataecommer'

// 'https://rickandmortyapi.com/api/character/?status=alive'
const ItemListContainerDetalle = () => {

    const [character, setcharacter] = useState([])

    // const getData = () => {
       
    // }


    useEffect(() => {
        const getdata = new Promise(resolver => {
            setTimeout( () => {
                fetch('./dataecommer.js')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setcharacter(data)
            })   
                    
                resolver(dataecommer);
            }, 2000)
        });
        getdata.then(res => setcharacter(res));
    }, [])
    

  return (
    <div>
        <ItemList
        productos = {character}  />
        
       
    </div>
  )
}

export default ItemListContainerDetalle;