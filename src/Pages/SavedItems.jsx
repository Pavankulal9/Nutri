import { useEffect, useState } from 'react';
import Items from '../components/Items';

const SavedItems = () => {
    const [savedItem,setSavedItem]= useState([]);
    const [seeMore,setSeeMore] = useState('');

    useEffect(()=>{
       const getSavedItem = JSON.parse(window.localStorage.getItem('saved_item'));
       setSavedItem(getSavedItem);
    },[])

   const seeMoreHandler = (item)=>{
    setSeeMore((prev)=> prev === item ?'': item);
   }

   const deleteHandler = (item)=>{
      const newList = savedItem.filter((i)=> item !== i.name);
      window.localStorage.setItem('saved_item',JSON.stringify(newList));
      setSavedItem(newList);
      console.log(newList);
   }

   console.log();
  return (
    <div className='items'>
      <div className='item_list'>
         {
            savedItem!==null && savedItem.length > 0 ? savedItem.map((item)=>(
             <div key={item.name} className={seeMore.length < 1?'see_less': seeMore === item.name ? 'see_more':'see_less' }>
                 <div className='item_name'>
                    <h3>{item.name}</h3>
                    <div>
                     <button className='see_btn' onClick={()=> seeMoreHandler(item.name)}>{seeMore === item.name ? 'Show Less':'Show More'}</button>
                     <button className='delete_btn' onClick={()=> deleteHandler(item.name)}>Delete</button>
                    </div>
                 </div>
                 <Items item={item}/>
            </div>
            ))
            : 
            <div className="no_item">
               <h1>No Item Saved!</h1>
            </div>
         }
      </div>
    </div>
  )
}

export default SavedItems
