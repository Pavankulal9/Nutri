
const Item = ({amount,title,func,item}) => {
  return func?(
    <div onClick={()=> func(item)}>
      <h3>{title}</h3>
       <p>{amount}</p>
    </div>
  ):(
    <div >
    <h3>{title}</h3>
     <p>{amount}</p>
  </div>
  )
}

export default Item
