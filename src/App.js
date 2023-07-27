// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

// function App() {
//   const [cardData, setCardData] = useState(null);

//   useEffect(() => {
//     // Function to fetch data from the API
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://api.example.com/carddata'); // Replace with your API endpoint
//         setCardData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []); // The empty dependency array ensures that the effect runs only once on component mount

//   return (
//     <div className="app">
//       {cardData && (
//         <div className="container">
//           <div className="logo">
//             <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="logo" className="master" />
//             <h5>{cardData.name}</h5>
//             <FontAwesomeIcon icon={faMicrochip} className="chip" />
//           </div>

//           <div className="card">
//             <div>
//               <h6>Card number</h6>
//               <h5 className="number">{cardData.cardNumber}</h5>
//               <h5 className="name">{cardData.cardHolder}</h5>
//             </div>
//             <div>
//               <h6>Valid Thru</h6>
//               <h5>{cardData.validThru}</h5>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import './App.css';
import { FcSimCardChip } from 'react-icons/fc'

function App() {
  return (
    <div className='app'>
  
    <div className="container">
    <header class="logo">
    <span>
       
    <h5 className='mas'>  <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="" className='master'/> master Card</h5>
   

    </span>
    <img src="" alt=''/>
    <FcSimCardChip  alt="chip" className='chip'/>
   </header>
    
   <div className='card'>
   <div>
   <h6>Card number</h6>
   <h5 className='number'> 5085 8050 1380 1630</h5>
   <h5 className='name'>Code with Richiwin</h5>
   </div>
   <div>
    <h6>Valid Thru</h6>
    <h5>02/29</h5>
   </div>
   </div>
    </div>
    </div>
  );
}

export default App;
