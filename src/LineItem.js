const LineItem = ({ item }) => {
  return (
    <li className="item">
      <label>
       {JSON.stringify(item)}
      </label>
    </li>
  )
}

export default LineItem