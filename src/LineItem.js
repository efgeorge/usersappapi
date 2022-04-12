const LineItem = ({ item }) => {
  return (
    <li className="item">
      <label>
       {item.item}
      </label>
    </li>
  )
}

export default LineItem