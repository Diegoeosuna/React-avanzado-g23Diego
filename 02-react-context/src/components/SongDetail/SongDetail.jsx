import { useSongContext } from '@/hooks/useSongContext'

const SongDetail = () => {
  const {selectedSong} = useSongContext()
  return (
    <>
      {
        selectedSong.title
        ? <div>
            <img src={`https://picsum.photos/seed/${selectedSong.id}/400/400`} alt= 'Portada del Disco' />
            <h2>{selectedSong.title}</h2>
            <h4>{selectedSong.artist}</h4>
            <h6>{selectedSong.year}</h6>
        </div>
        : <h1>Seleccione una canción</h1>
      }
    </>
  )
}

export default SongDetail