import {useState,useEffect} from 'react'
import Item from '../components/Item';
import { calculateTotal } from '../utils/feature';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast'
const CreateDish = () => {
  const Navigate = useNavigate();
  const[dishName,setDishName] = useState('');
  const [savedItem,setSavedItem] = useState([]);
  const [selectedItem,setSelectedItem]=useState([]);

  useEffect(()=>{
    setSavedItem(JSON.parse(window.localStorage.getItem('saved_item')));

  },[]);

  const selectItemHandler = (item)=>{
    if(selectedItem.length > 0 ){
      const isFound = selectedItem.find((i)=> i.name === item.name);
      if(isFound){
         toast.error(`${item.name} already added!`,{duration: 4000, position:'top-center',style:{background: 'rgb(0,0,0)',color:'white'}});
      }else{
        setSelectedItem(prev=> [...prev,item]);
      }
    }else{
      setSelectedItem([item]);
   }
}


 const submitDish = ()=>{
    const MyDish = {
        dishName: dishName,
        item: selectedItem,
        totalNutritions: calculateTotal(selectedItem),
      };

      const myDishes = JSON.parse(window.localStorage.getItem('my_dishes'));

    if(myDishes){
         myDishes.unshift(MyDish);
         window.localStorage.setItem('my_dishes',JSON.stringify(myDishes));
         toast.success(`${dishName} saved successfully`,{duration:4000,position:'top-center',style:{background: 'rgb(0,0,0)',color:'white'}});
         Navigate('/myDishes');
    }else{
       window.localStorage.setItem('my_dishes',JSON.stringify([MyDish]));
       toast.success(`${dishName} saved successfully`,{duration:4000,position:'top-center',style:{background: 'rgb(0,0,0)',color:'white'}});
       Navigate('/myDishes');
    }

 }
 
  const removeItemHandler =(item)=>{
    const newItem =selectedItem.filter((i)=> i.name !== item.name);
    toast.success(`${item.name} removed`,{duration:4000,position:'top-center',style:{background: 'rgb(0,0,0)',color:'white'}});
    setSelectedItem(newItem);
  }

  return (
    <div className='create_dish'>
          <h2>CREATE DISH</h2>
      <div className='details'>
           <div className="saved_items">
             <div className='dish_name'>
                <label>Dish Name :</label>
                <input type="text"  placeholder='Enter Here' onChange={(e)=> setDishName(e.target.value)}/> 
              </div>
             <div className='select_item'>
              <label>Select item :</label>
              <div>
                {
                  savedItem.length > 0? savedItem.map((item)=>(
                      <Item item={item} title={item.name} amount={item.serving_size_g} key={item.name} func={selectItemHandler}/>
                  ))
                  :
                      <p>No Item Saved!</p>
                }
                </div>
              </div>
           </div>
           <div className='selected_item'>
              <div className="items">
              <label>Selected Item:</label>
               <div>
                 {
                  selectedItem.length > 0? selectedItem.map((item)=>(
                         <Item title={item.name} amount={item.serving_size_g} item={item} func={removeItemHandler} key={item.name}/>
                     ))
                     : <p>No item Selected!</p>
                 }
                 </div>
              </div>
           </div>
           {
           selectedItem.length > 0 && dishName.length > 0 ?
             <button onClick={()=> submitDish()}>Save</button>
            : <p>Please fill  all the field to Save the Dish!</p>
           }
      </div>
    </div>
  )
}

export default CreateDish
