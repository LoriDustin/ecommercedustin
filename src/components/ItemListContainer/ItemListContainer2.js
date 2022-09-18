import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import dataecommer from '../DATA/dataecommer'
import { useParams } from 'react-router-dom'



const ItemListContainer2 = () => {
    const {categoryId} = useParams();
 
    const [data, setdata] = useState([]);

    useEffect(() => {
       const getdata = new Promise(resolver => {
        setTimeout( () => {
                resolver(dataecommer);
            }, 2000)
    });
     
        getdata.then(res => {
            if(categoryId){
               const newProducts = res.filter(item=>item.categoria === categoryId) 
               setdata(newProducts)
            }else{
                setdata(res)
            }
        });
    }, [categoryId])
      
    return (
    <ItemList
    data={data}
    />
  )
}

export default ItemListContainer2;