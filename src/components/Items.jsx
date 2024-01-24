import Item from './Item'
import PropTypes from 'prop-types'
const Items = ({item,func=false}) => {
  return (
    <div className='item_details'>
      {
        item.serving_size_g &&
        <Item amount={item.serving_size_g} title={'Weigh(g)'} func={func} item={item}/>
      }
        <Item amount={item.protein_g.toFixed(1)} title={'Protine(g)'} func={func} item={item}/>
        <Item amount={item.fiber_g.toFixed(1)} title={'Fiber(g)'} func={func} item={item}/>
        <Item amount={item.sugar_g.toFixed(1)} title={'Sugar(g)'} func={func} item={item}/>
        <Item amount={item.fat_total_g.toFixed(1)} title={'Fat(g)'} func={func} item={item}/>
        <Item amount={item.fat_saturated_g.toFixed(1)} title={'Saturated Fat(g)'} func={func} item={item}/>
        <Item amount={item.cholesterol_mg.toFixed(1)} title={'Cholesterol(mg)'} func={func} item={item}/>
        <Item amount={item.carbohydrates_total_g.toFixed(1)} title={'Carbohydrates(g)'} func={func} item={item}/>
        <Item amount={item.sodium_mg.toFixed(1)} title={'Sodium(mg)'} func={func} item={item}/>
   </div>
  )
}

Items.propTypes ={
  item: PropTypes.object.isRequired,
  func: PropTypes.any,
};

export default Items
