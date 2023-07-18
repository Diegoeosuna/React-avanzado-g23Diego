
import './App.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
import Secret from './pages/Secret'
import Signup from './pages/Signup'

function App() {

  return (
    <>
      <Header />
      <h1>React Auth</h1>
      <Home />
      <Dashboard />
      <Secret />
      <Login />
      <Signup />
    </>
  )
}

export default App
