import { useEffect, useState } from "react";
import  {fetchNutrition,} from "../../apiCalls"
import { useDebounce } from "../../Hooks/useDebounce";
import ItemList from "./itemList";



const Home = () => {
const [search,setSearch] = useState('');
const [loading,setLoading] = useState(false);
const debounceData = useDebounce(search);
const [fetchitem,setFetchItem]=useState([]);

 useEffect(()=>{
  const loaderItem = async()=>{
    const result = await fetchNutrition(debounceData);
    setFetchItem(result.data);
    setLoading(false);
  }
  loaderItem();
 },[debounceData]);

  return (
    <div className='home'>
      <div className="search_bar">
        <input type="text" placeholder="Enter the item name" onChange={(e)=>{setSearch(e.target.value); setLoading(true)}}/>
      </div>
      <div className="item_nutritions">
        <ItemList fetchitem={fetchitem} loading={loading} search={search}/>
      </div>
    </div>
  )
}

export default Home
