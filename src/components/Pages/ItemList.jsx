import Item from "./Item";
import Loading from './Loading';
import Items from "./items";

const ItemList = ({fetchitem,loading,search}) => {
  
  const saveHandler= (item)=>{
    const savedItem = JSON.parse(window.localStorage.getItem('saved_item'));
    if(savedItem==null){
      window.localStorage.setItem('saved_item',JSON.stringify([item]));
    }else{
       const isItemPresent = savedItem.find((i)=> item.name === i.name);
       if(isItemPresent){
         console.log('data present')  
       }else{
         savedItem.push(item);
         window.localStorage.setItem('saved_item',JSON.stringify(savedItem));
      }   
    }
  }

  if(fetchitem.length < 1 && search.length < 1){
      return(
          <div className="message"><h1>Please enter item in search bar</h1></div> 
      )
  }else if(loading){
      return (
          <Loading/>
      )
  }else if(fetchitem.length > 0 && search.length > 0){
      return fetchitem.map((item)=>( 
    <div key={item.name} className='itemBox'>
      <h2>{item.name}</h2>
        <Items item={item}/>
        <button onClick={()=> saveHandler(item)}>Save Item</button>
    </div>
      ))
  }else{
      return (
            <div className="message"><h1>{search} not found!</h1></div> 
        ) 
  }
}

export default ItemList


