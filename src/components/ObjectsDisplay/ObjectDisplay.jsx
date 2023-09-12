import React, { useEffect, useState } from 'react'
import axios from 'axios';


const ObjectDisplay = () => {
    const [objects, setObjects] = useState([]);
    console.log(objects);

    useEffect(()=>{
        axios("https://dummyjson.com/products").then((res)=>{
            console.log(res);
            let arr = res.data.products;
            setObjects(arr);
        })
    }, [])



    let objectsJsx = objects.map((obj)=> {
        return (
            <ul key={obj.id}>
                <li> name of product: {obj.title}</li>
                <>price of product{obj.price}</>

            </ul>
        )
    })

    return (
        <div>
            <h1>{objectsJsx}</h1>

        </div>
)
}

export default ObjectDisplay
