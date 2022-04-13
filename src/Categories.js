const Categories = ({  category, setCategory }) => {
  return (
    <div className="buttons"> 
      <button onClick={() => setCategory('users')}>Users</button>
      <button onClick={() => setCategory('posts')}>Posts</button>
      <button onClick={() => setCategory('comments')}>Comments</button>
    </div>
  )
}

export default Categories