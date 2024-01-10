import {useState,useEffect} from 'react'
import Item from './Item';
import Items from './items';

const CreateDish = () => {
  const[form,setForm] = useState({
    dishName:'',
    items: null,
    totalNutritions: {
    "calories": 0,
    "fat_total_g": 0,
    "fat_saturated_g": 0,
    "protein_g": 0,
    "sodium_mg": 0,
    "potassium_mg": 0,
    "cholesterol_mg": 0,
    "carbohydrates_total_g": 0,
    "fiber_g": 0,
    "sugar_g": 0
    }, 
  });
  const [selectItem,setSelectItem] = useState(false);
  const [savedItem,setSavedItem] = useState(null);
  const [selectedItem,setSelectedItem]=useState([]);

  useEffect(()=>{
    setSavedItem(JSON.parse(window.localStorage.getItem('saved_item')));
  },[])

  const selectItemHandler = (item)=>{
    const removedItem = savedItem.filter((i)=> item.name !== i.name);
     setSavedItem(removedItem);
     setSelectedItem(item);
  }

  return (
    <div className='create_dish'>
      <div className='details'>
          <input type="text" name='dishName' placeholder='Enter dish name' /> 
           <div className='selected_item'>
                 {
                    form.items==null?
                    <button onClick={()=> setSelectItem(!selectItem)}>Click to select Item</button>
                    :
                     form.items.map((item)=>(
                        <div className="items" key={item.name}>
                            <Item title={item.name} amount={''}/>
                            <button onClick={()=> setSelectItem(!selectItem)}>Click to select Item</button>
                        </div>
                     ))
                 }
           </div>
           <div className={selectItem?'display':'displayNone'}>
            {
             savedItem.map((item)=>(
                  <Items key={item.name} item={item} func={selectItemHandler}/>
             ))
            }
            {
             selectedItem.map((item)=>(
              <div key={item.name}>
                <Items key={item.name} item={item} func={selectItemHandler}/>
              </div>
             ))
            }
           </div>
           <div className='total_nutri'>
            {
              
            }
           </div>
      </div>
    </div>
  )
}

export default CreateDish
