import { useEffect, useState } from 'react';
import axios from 'axios';
import Page from './Page';
const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log('Data:', response.data);
        setTimeout(() => setData(response.data), 1000)
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      {data.length > 0 ? (
        data.slice(0, 10).map((res) => (
          <div className="card" key={res.id}>
            <div className="card-body">
              <h5 className="card-title">User ID: {res.userId}</h5>
              <p className="card-text">{res.title}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        ))
      ) : (
        <Page />
      )
      }
    </>
  )
}

export default Card;
