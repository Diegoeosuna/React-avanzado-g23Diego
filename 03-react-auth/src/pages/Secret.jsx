import { useAuthContext } from '@/hooks/useAuthContext'

const Secret = () => {
  const {userPayLoad} = useAuthContext()


  return (
    <>
      <h1>Secret</h1>
      {
        userPayLoad?.role === 'ADMIN'
        ? <h2>Hola ADMIN</h2>
        : <h2>Hola CUSTOMER</h2>
      }

      {
        userPayLoad?.role === 'CUSTOMER' && <h4>Bienvenido CUSTOMER</h4>
      }

{
        userPayLoad?.role === 'ADMIN' && <h4>Bienvenido ADMIN</h4>
      }
    </>
  )
}

export default Secret