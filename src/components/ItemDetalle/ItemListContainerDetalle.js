import { useEffect, useState} from 'react'
import ItemListDetalle from './ItemListDetalle'
import dataecommer from '../DATA/dataecommer'

import { useParams } from 'react-router-dom'



const ItemListContainerDetalle = () => {
    
    

    const [character, setcharacter] = useState([])
    const { detalleId } = useParams();

    // const getData = (id) =>{
    //     return new Promise((resolver) =>{
    //         const productodetalle = dataecommer.find(item=>item.id === parseInt(id))
    //         resolver(productodetalle)

    //     })
    // }

    // useEffect(() => {
    //     const getProducto = async()=>{ 
    //         const producto = await getData(detalleId);
    //         setcharacter(producto)
    //     }
    //     getProducto();
    // },[ detalleId ])



    useEffect(() => {
        const getdata = new Promise(resolver => {
            setTimeout(() => {
                fetch('../DATA/dataecommer.js')
            .then((response) => {
                return response.json()})
            .then((data) => {
                setcharacter(data)})   
            resolver(dataecommer);   
            }, 2000)
            
        });
        getdata.then(res =>setcharacter(res));
    },[ detalleId ])


//     getdata.then(res =>setcharacter(res.find(item=>item.id === parseInt( detalleId ))));
// },[ detalleId ])


  return (
    <div>
        <ItemListDetalle
        productos = {character}  />
        
       
    </div>
  )
}

export default ItemListContainerDetalle;