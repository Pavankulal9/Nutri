import {useState,useEffect}from 'react'

const MyDishes = () => {
    const[mydishes,setMyDishes] = useState([]);

    useEffect(()=>{
        const getDishes = JSON.parse(window.localStorage.getItem('my_dishes'));
        setMyDishes(getDishes);
    },[]);

  return (
    <div className='items'>
        <div className="item_list">
           {
              mydishes!==null && mydishes.length > 0?
               ""
             :
             <div className='no_item'>
                 <button>Create dish</button>
                 <p>Note: Before creating a dish please  or save the items needed to saved item</p>
             </div>
           }
        </div>
    </div>
  )
}

export default MyDishes
