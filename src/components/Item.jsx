import PropTypes from 'prop-types';
const Item = ({item,amount,title,func=false}) => {
  return func?(
    <div onClick={()=> func(item)}>
      <h3>{title}<strong>({amount}g)</strong></h3>
    </div>
  ):(
    <div >
      <h3>{title}</h3>
      <p>{amount}</p>
  </div>
  )
}

Item.propTypes = {
  item: PropTypes.object,
  amount: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  func: PropTypes.any,
}

export default Item;
