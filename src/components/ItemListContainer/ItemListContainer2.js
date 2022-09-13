import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import dataecommer from './dataecommer'
import { useParams } from 'react-router-dom'



const ItemListContainer2 = () => {
    const {categoryId} = useParams();
    console.log('categoryId', categoryId)


    const [data, setdata] = useState([]);

    useEffect(() => {
        const getdata = new Promise(resolver => {
            setTimeout( () => {
                resolver(dataecommer);
            }, 2000)
        });
        getdata.then(resultado=>{
                    if(categoryId){
                        const newProducts = resultado.filter(item => item.categoria === categoryId)
                        setdata(newProducts) 
                    }else{
                        setdata(resultado)
                    }

                   
                })    
        getdata.then(res => setdata(res));
    }, [categoryId])
      
    return (
    <ItemList
    data={data}
    />
  )
}

export default ItemListContainer2;