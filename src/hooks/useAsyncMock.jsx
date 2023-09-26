
import { useEffect, useState } from "react";

const useAsyncMock = (mock) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

//puedo crear la PROMESA dentro del useEffect o afuera. Lo pongo afuera
   //cuando viene de una base espero que se resuelva la promesa

    const newMockPromise = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(mock)
        }, 1000);

    })

 //respuesta en setdata
    useEffect(() => {

        newMockPromise.then((res) => { setData(res), setLoading(false) })

    }, [])

    
 //return: me va a devolver valores, cargo los parametros que se van a cargar y actualizar de acuerdo a la actualizacion del hook

    return { data, loading };
}

export default useAsyncMock;



