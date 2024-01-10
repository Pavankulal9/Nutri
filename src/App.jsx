import './styles/App.scss'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Pages/Home'
import Header from './components/Layouts/Header'
import Footer from './components/Layouts/Footer'
import SavedItems from './components/Pages/SavedItems'
import MyDishes from './components/Pages/MyDishes'

function App() {
 

  return (
    <div className="app">
      <Router>
       <Header/>
        <Routes>
        <Route  path={'/'} element={<Home/>}/>
        <Route  path={'/savedItems'} element={<SavedItems/>}/>
        <Route  path={'/myDishes'} element={<MyDishes/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
