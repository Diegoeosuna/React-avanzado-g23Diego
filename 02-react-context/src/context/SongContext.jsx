import { useEffect, useState, createContext } from 'react'
import canciones from '@/assets/listaCanciones.json'

const SongContext = createContext()

function SongProvider (props) {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedSong, setSelectedSong] =useState({})
    const [search, setSearch] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setList(canciones)
            setLoading(false)
        }, 2000)
    }, [])

    const data = {
        list,
        loading,
        selectedSong,
        setSelectedSong,
        setSearch,
        search
    }

    return (
        <SongContext.Provider value={data}>
            {props.children}

        </SongContext.Provider>
    )
}

export {SongProvider, SongContext}