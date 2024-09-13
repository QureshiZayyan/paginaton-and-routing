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
        Array.from({ length: 100 }).map((_, index) => (
          <div className="card" key={index} aria-hidden="true">
            <div className="card-body">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
              </h5>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span>
              </p>
              <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default Card;
