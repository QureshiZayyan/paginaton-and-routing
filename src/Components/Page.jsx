import React from 'react';

const Page = () => {
  return (
    <div>
      {Array.from({ length: 10 }).map((_, index) => (
        <div className="hey" key={index}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, pariatur!</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
