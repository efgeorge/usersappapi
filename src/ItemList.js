import LineItem from "./LineItem";

const ItemList = ({ items }) => {
  return (
    <table>
      <tbody>
        {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
        />
      ))}
      </tbody>
    </table>
  )
}

export default ItemList