import { useEffect, useState } from 'react';
import axios from 'axios';
const Card = () => {
  // const [data, setData] = useState([]);

  const data = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
    { id: 6, name: "Item 6" },
    { id: 7, name: "Item 7" },
    { id: 8, name: "Item 8" },
    { id: 9, name: "Item 9" },
    { id: 10, name: "Item 10" }
  ];

  // total pages=2 per page items=5, total

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate the indices for slicing data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentItems);

  // console.log(currentItems);


  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //       console.log('Data:', response.data);
  //       setTimeout(() => setData(response.data), 1000)
  //     }
  //     catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchPosts();
  // }, []);

  return (
    <>
      {data.length > 0 ? (
        currentItems.map((res) => (
          <div className="card" key={res.id}>
            <div className="card-body">
              <h5 className="card-title">User ID: {res.name}</h5>
              {/* <p className="card-text">{res.title}</p> */}
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        ))
      )
        :
        Array.from({ length: 10 }).map(() => (
          <>
            <div className="card" aria-hidden="true">
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
          </>
        ))
      }

      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#" onClick={() => {
            if (currentPage < totalPages) {
              setCurrentPage(currentPage + 1);
            }
          }}
            disabled={currentPage === totalPages}>next</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={() => currentPage === 2 ? setCurrentPage(currentPage - 1) : null} disabled={currentPage === 1} >Previous</a></li>
          {/* <li className="page-item"><a className="page-link" href="#" onClick={() => setCurrentPage(currentPage + 1)}>2</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={() => setCurrentPage(currentPage + 1)}>3</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</a></li> */}
        </ul>
      </nav >
    </>
  )
}

export default Card;
