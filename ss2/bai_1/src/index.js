import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'

const students =[
  {
    company: 'Uyên',
    contact: 'Pháp',
    country: 'Paris',
  },
  {
    company: 'Thái',
    contact: 'Thái Lan',
    country: 'Bangkok',
  },
  {
    company: 'Lộc',
    contact: 'Italia',
    country: 'Roma',
  },
  {
    company: 'Huệ',
    contact: 'Malaysia',
    country: 'KualaLumpur',
  },
  {
    company: 'Triều',
    contact: 'Nhật Bản',
    country: 'Tokyo',
  },
];

const seeTable = <>
  <table className="table">
    <thead>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
    </thead>
    <tbody>
      {students.map((x,y) => (
        <tr key={y}>
          <th>{x.company}</th>
          <th>{x.contact}</th>
          <th>{x.country}</th>
        </tr>
      ))}
    </tbody>
  </table>
</>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  seeTable
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
