import React from 'react'
import Item from './Item'

const Items = ({item,func=false}) => {
  return (
    <div className='item_details'>
        <Item amount={item.protein_g} title={'Protine(g)'} func={func} item={item}/>
        <Item amount={item.fiber_g} title={'Fiber(g)'} func={func} item={item}/>
        <Item amount={item.sugar_g} title={'Sugar(g)'} func={func} item={item}/>
        <Item amount={item.fat_total_g} title={'Fat(g)'} func={func} item={item}/>
        <Item amount={item.fat_saturated_g} title={'Saturated Fat(g)'} func={func} item={item}/>
        <Item amount={item.cholesterol_mg} title={'Cholesterol(mg)'} func={func} item={item}/>
        <Item amount={item.carbohydrates_total_g} title={'Carbohydrates(g)'} func={func} item={item}/>
        <Item amount={item.sodium_mg} title={'Sodium(mg)'} func={func} item={item}/>
   </div>
  )
}

export default Items
