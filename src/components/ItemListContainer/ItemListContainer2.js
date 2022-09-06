import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import dataecommer from './dataecommer'


const ItemListContainer2 = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        const getdata = new Promise(resolver => {
            setTimeout( () => {
                resolver(dataecommer);
            }, 2000)
        });
        getdata.then(res => setdata(res));
    }, [])
      

    return (
    <ItemList
    data={data}
    />
  )
}

export default ItemListContainer2;