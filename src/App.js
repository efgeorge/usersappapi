import Content from './Content';
import Categories from './Categories';

import { useState, useEffect } from 'react';
import apiRequest from './apiRequest';

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com";

  const [items, setItems] = useState([]);
  const [fetchError,setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [isRequesting, setIsRequesting] = useState(false)
  const [category, setCategory] = useState("users")


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}/${category}`);
        if (!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchItems();
  }, [category])

  

  return (
    <div className="App">
      <Categories 
        category={category}
        setCategory={setCategory}
      />
      <main>
        {isLoading && <p>Loading items...</p>}
        {fetchError && <p style={{color: "red"}}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content
          items={items}
        />}
      </main>
      
    </div>
  );
}

export default App;
