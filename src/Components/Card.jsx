import { useEffect, useState } from 'react';
import axios from 'axios';

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log('Data:', response.data);
        setData(response.data); // Set state to response.data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      {data.length > 0 ? (
        data.map((res) => (
          <div className="card" key={res.id}>
            <div className="card-body">
              <h5 className="card-title">User ID: {res.userId}</h5>
              <p className="card-text">{res.title}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </>
  );
}

export default Card;
