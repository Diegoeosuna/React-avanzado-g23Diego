import { useSongContext } from "@/hooks/useSongContext"
const Header = () => {
    const {setSearch, selectedSong} = useSongContext()
    
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        
            selectedSong.title
            ? (
                <div>
                    Now Playing: {selectedSong.title} - {selectedSong.artist}
                    <input type='search' onChange={handleSearch} />
                    <button>Prev</button>
                    <button>Next</button>
                </div>
            )
            : 
            <>
                <h1>No hay nada reproduciendose ahora</h1>
                <input type='search' onChange={handleSearch} />
            </>
    )
}

export default Header