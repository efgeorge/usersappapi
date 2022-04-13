const LineItem = ({ item }) => {
  return (
    <tr className="item">
         {/* {JSON.stringify(item)} */}
         {Object.entries(item).map(([key, value]) => <td>{JSON.stringify(value)}</td>)}
    </tr>
  )
}

export default LineItem