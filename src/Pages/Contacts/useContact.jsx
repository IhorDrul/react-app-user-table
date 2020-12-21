import {useEffect, useState} from "react";

export const useContacts = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() =>{
        //setIsLoading(true)
        const getContacts = async () => {
            try {
                setIsLoading(true)
                const response = await  fetch('https://randomuser.me/api/?results=20')
                const {results, error} = await response.json()
                if (error){
                    throw new Error(error)
                }
                setData(results)
                setIsError(false)
            } catch {
                setIsError(true)
            } finally {
                setIsLoading(false)
            }
            {/**
             fetch('https://randomuser.me/api/?results=200')
             .then(response => response.json())
             .then(({results}) => {
                    setContacts(results)
                    console.log(results)
                    setIsLoading(false)
                    setIsError(false)
                })
             .catch(() => {
                    setIsLoading(false)
                    setIsError(true)
                })

             **/}
        }
        getContacts()
    },[])
    return {
        data,
        isLoading,
        isError
    }
}
