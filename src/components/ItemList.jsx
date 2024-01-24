import {toast} from 'react-hot-toast';
import Loading from '../Pages/Loading';
import Items from "./Items";
import PropTypes from 'prop-types'
const ItemList = ({fetchitem,loading,search}) => {
  
  const saveHandler= (item)=>{
    const savedItem = JSON.parse(window.localStorage.getItem('saved_item'));
    if(savedItem==null){
      window.localStorage.setItem('saved_item',JSON.stringify([item]));
    }else{
       const isItemPresent = savedItem.find((i)=> item.name === i.name);
       if(isItemPresent){
        toast.error(`${item.name} already saved!`,{duration:4000,position:'top-center',style:{background: 'rgb(0,0,0)',color:'white'}});  
       }else{
         savedItem.unshift(item);
         window.localStorage.setItem('saved_item',JSON.stringify(savedItem));
         toast.success(`${item.name} saved successfully`,{duration:4000,position:'top-center',style:{background: 'rgb(0,0,0)',color:'white'}});
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

ItemList.propTypes = {
  fetchitem: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  search: PropTypes.string.isRequired
}

export default ItemList


