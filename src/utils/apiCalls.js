import axios from 'axios';


export const fetchNutrition =async(query)=>{
    const config ={
        headers:{
            'X-Api-Key': `${import.meta.env.VITE_API_KEY}`
        }
    }
  const data = await axios.get(`${import.meta.env.VITE_URL}${query}`,config);
  return data;
}

// export const debounce =(cb,d)=>{
//    let timer;
//    if(timer){
//     clearTimeout(timer);
//    }

//    return function (...args){
//       timer = setTimeout(()=>{
//         cb.apply(this,...args);
//       },d)
//    };
// }

