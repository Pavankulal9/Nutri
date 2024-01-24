import {useState,useEffect}from 'react'
import { useNavigate } from 'react-router-dom';
import Items from '../components/Items';
import Ingredients from '../components/Ingredients';


const MyDishes = () => {
    const[myDishes,setMyDishes] = useState(0);
    const [seeMore,setSeeMore] = useState('');
    const navigation = useNavigate();

    useEffect(()=>{
        const myDishes = JSON.parse(window.localStorage.getItem('my_dishes'));
        setMyDishes(myDishes);
    },[]);

    const seeMoreHandler = (item)=>{
      setSeeMore((prev)=> prev === item ?'': item);
     }
  
     const deleteHandler = (item)=>{
        const newList = myDishes.filter((i)=> item.name !== i.name);
        window.localStorage.setItem('my_dishes',JSON.stringify(newList));
        setMyDishes(newList);
        console.log(newList);
     }

     console.log(myDishes);

  return (
    <div className='items'>
        <div className="item_list">
           {
             myDishes!==null && myDishes.length > 0?
               myDishes.map((dish)=>(
            <div key={dish.dishName} className={seeMore.length < 1?'see_less': seeMore === dish.dishName ? 'see_more':'see_less' }>
                <div className='item_name'>
                   <h3>{dish.dishName}</h3>
                   <div>
                    <button className='see_btn' onClick={()=> seeMoreHandler(dish.dishName)}>{seeMore === dish.dishName ? 'Show Less':'Show More'}</button>
                    <button className='delete_btn' onClick={()=> deleteHandler(dish.dishName)}>Delete</button>
                   </div>
                </div>
                <Ingredients item={dish.item}/>
                <Items item={dish.totalNutritions}/>
           </div>
               ))
               :
              
               <div className='no_item'>
                 <button onClick={()=> navigation('/createDish')}>Create dish</button>
                 <p>Note: Before creating a dish please  or save the items needed to saved item</p>
               </div>
    
           }
           {
            myDishes!==null && myDishes.length > 0 &&
            <button onClick={()=> navigation('/createDish')}>Create new dish</button>
           }
        </div>
    </div>
  )
}

export default MyDishes
