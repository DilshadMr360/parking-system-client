import { useState, useEffect } from 'react';


const API= () => {
    const [data, setData] = useState([{}]);

    useEffect(() => {
      fetch("http://localhost:5000/members", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
    
      })
        .then(res => res.json())
        .then(data => {
          setData(data);
          console.log(data);
        });
    }, []);
  
    return (
      <div>
        {typeof data.members === 'undefined' ? (
          <p>Loading...</p>
        ) : (
          data.members.map((member, i) => (
            <p key={i}>{member}</p>
          ))
        )}
        <h1 className="border border-red-500 ">
        Hello world!
      </h1>
      </div>
      
    );
  }
export default API
