import { useEffect, useState} from 'react'
import ItemListDetalle from './ItemListDetalle'
import dataecommer from '../DATA/dataecommer'
import { useParams } from 'react-router-dom'
import { db } from '../../utils/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { async } from '@firebase/util'




const ItemListContainerDetalle = () => {
    
    const [character, setcharacter] = useState([])
    const { detalleId } = useParams();


    // useEffect(() => {
    //     const getdata = new Promise( resolve => {
    //         setTimeout(() => {
    //             resolve(dataecommer)

    //         }, 2000)
    //     } )

       
    //     getdata.then(res =>setcharacter(res.find(item=> item.id === parseInt(detalleId))));
    // },[ detalleId ])


    useEffect(()=>{
        const getProducto = async()=>{
            //Creamos la referencia del producto
            const queryRef = doc(db, 'items', detalleId)
            // hacemos la solicitud
            const response = await getDoc(queryRef)
            console.log(response.data())
            const newItem = {
                id: response.id,
                ...response.data()
            }
            console.log(newItem)
            setcharacter(newItem)





        }
        getProducto()
    },[detalleId])




  return (
    <div>
        <ItemListDetalle
        producto = {character}  />
        
       
    </div>
  )
}

export default ItemListContainerDetalle;



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

 // const getdata = new Promise(resolver => {
        //     setTimeout(() => {
        //         fetch('../DATA/dataecommer.js')
        //     .then((response) => {
        //         return response.json()})
        //     .then((data) => {
        //         setcharacter(data)})   
        //     resolver(dataecommer);   
        //     }, 2000)
            
        // });

//     getdata.then(res =>setcharacter(res.find(item=>item.id === parseInt( detalleId ))));
// },[ detalleId ])
