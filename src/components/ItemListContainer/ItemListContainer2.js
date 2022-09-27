import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
// import dataecommer from '../DATA/dataecommer'

import { db } from '../../utils/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer2 = () => {
    const {categoryId} = useParams();
    const [data, setdata] = useState([]);


    useEffect(()=>{
        //Creando la referencia de la coleccion
        if(!categoryId){
                const queryRef = collection(db, "items");
                getDocs(queryRef).then(response => {
                    const resultados = response.docs.map(doc=>{
                        // console.log(doc.data())
                        // console.log(doc.id)
                        const newItem ={
                            id:doc.id,
                            ...doc.data(),
                        }
                        return newItem
                    })
                    console.log(resultados)
                    setdata(resultados)
                })

         }else{
           const queryRef = query(
            collection(db, 'items'), 
            where("categoria", "==", categoryId),
            );
           
            getDocs(queryRef).then(response => {
                const resultados = response.docs.map(doc =>{
                    // console.log(doc.data())
                    // console.log(doc.id)
                    const newItem ={
                        id:doc.id,
                        ...doc.data(),
                    }
                    return newItem
                })
                console.log(resultados)
                setdata(resultados)
            })
        }

    },[categoryId])


    





    // useEffect(() => {
    //    const getdata = new Promise(resolver => {
    //     setTimeout( () => {
    //             resolver(dataecommer);
    //         }, 2000)
    // });
     
    //     getdata.then(res => {
    //         if(categoryId){
    //            const newProducts = res.filter(item=>item.categoria === categoryId) 
    //            setdata(newProducts)
    //         }else{
    //             setdata(res)
    //         }
    //     });
    // }, [categoryId])
      
    return (
    <ItemList
    data={data}
    />
  )
}

export default ItemListContainer2;