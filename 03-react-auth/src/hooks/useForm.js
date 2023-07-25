//Reglas para crear un Hook de React
//1. Un Custom Hook es una función que utiliza otros hooks de react.
//2. Siempre debemos usar la palabra "use" al nombrar el archivo.
//3. Siempre debe de usar al menos un hook de React (useState, useEffect, useRef, etc.).
//4. Deben de ser reutilizables, no para casos muy específicos.


import { useState } from "react"

function useForm (callback, defaults) {
    const [input, setInput] = useState(defaults)

    const handleInputChange = (event) => {
        const {name, value} = event.target

        setInput({ ... input, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        callback(input)
    }

    return {
        input,
        handleInputChange,
        handleSubmit
    }
}

export default useForm