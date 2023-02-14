import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
// const element1= <span key={1}>Hello</span>;
// const element2 =<span key={2}>World</span>;
// const element1= React.createElement('span', { a: 5, children: "Hello" });
// const element2 = React.createElement('span', { a: 5, children:"World" });


// const element = <div>
//   <img src={data.url} alt={data.title} width={200} height={ 200} />
//   <h2>{ data.title}</h2>
//   <p>
//     Author <a href={data.author.url}>{ data.author.tag}</a>
//   </p>
//   <p>Price: { data.price} dollars</p>
//   <p>Quantity:{ data.quantity}</p>
//   <button type="button">Click me</button>
// </div>;
// console.log(element)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
