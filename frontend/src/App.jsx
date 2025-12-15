import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${API}/api/products`)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Inventory Dashboard</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} - {p.quantity}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

