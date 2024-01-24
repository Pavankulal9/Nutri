import './styles/App.scss'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'
import SavedItems from './Pages/SavedItems'
import MyDishes from './Pages/MyDishes'
import CreateDish from './Pages/CreateDish'
import {Toaster} from 'react-hot-toast'
function App() {
 

  return (
    <div className="app">
      <Router>
       <Header/>
       <Toaster />
        <Routes>
        <Route  path={'/'} element={<Home/>}/>
        <Route  path={'/savedItems'} element={<SavedItems/>}/>
        <Route  path={'/myDishes'} element={<MyDishes/>}/>
        <Route  path={'/createDish'} element={<CreateDish/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
