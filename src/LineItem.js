const LineItem = ({ item }) => {
  return (
    <tr className="item">
         {/* {JSON.stringify(item)} */}
         {Object.entries(JSON.stringify(item)).forEach(([key, value]) => <td>{`${value}`}</td>)}
    </tr>
  )
}

export default LineItem