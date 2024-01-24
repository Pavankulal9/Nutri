import PropTypes from 'prop-types'
import Item from './Item'

const Ingredients = ({item}) => {
  console.log(item);
  return (
    <div className='item_details'>
        {
         item?.map((i)=>(
             <Item  key={i.name} title={`${i.name}(g)`} amount={i.serving_size_g}/>
         ))
        }
    </div>
  )
}

Ingredients.propTypes ={
    item: PropTypes.array.isRequired,
};

export default Ingredients
