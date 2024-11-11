
// import React from 'react';
// import './Home.css';
// import bannerImage from './blood.jpg'; 
// const Home = () => {
//   return (
//     <div className="home">
//       <div className="banner">
//       <img src={bannerImage} alt="Blood Donation Banner" />
       
//       </div>
//       <section className="cards-section">
//         <div className="cards-container">
//           <div className="card">
//             <img src="https://www.shutterstock.com/image-photo/donor-word-on-cube-medical-260nw-1805645929.jpg" alt="Donors" />
//             <h3>Donors</h3>
//             <p>Find information on blood donors and how you can contribute to saving lives.
//             Donating blood is a simple, selfless act that can save lives. Every two seconds, someone in the world needs blood.
//              From accident victims to cancer patients, from people undergoing surgeries to individuals with chronic illnesses, blood donations are critical to their survival..</p>
//           </div>
//           <div className="card">
//             <img src="https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/5/shutterstock_1219338337.jpg" alt="Recipients" />
//             <h3>Recipients</h3>
//             <p>View details about blood recipients and how you can help them with donations.
//             Blood transfusions are essential in a variety of medical situations to replace lost components of the blood.
//             Each blood donation is separated into different components—red cells, platelets, and plasma—which means one donation can help save multiple lives. 
//             If you're a recipient, you owe your treatment success to these generous donors.</p>
//           </div>
//           <div className="card">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT305n4KC6fHqoK7Rr9rfjm2QijwPMq5tg3KQ&s" alt="Blood Availability" />
//             <h3>Blood Bag Availability</h3>
//             <p>Check the availability of blood bags and get real-time updates on stock levels.
//             Blood availability is crucial in emergency situations, surgeries, and routine treatments for patients with conditions such as cancer, anemia, and blood disorders. 
//             Maintaining an adequate and diverse blood supply is essential to ensure that all patients receive the blood they need when they need it.
//             </p>
//           </div>
//         </div>
//       </section>
//       <div className="banner">
//         <img src="https://t3.ftcdn.net/jpg/01/37/30/90/360_F_137309034_4oK5BoYqUc7sUoNor1ltGW0PAYNzExK9.jpg" alt="Blood Donation Banner" />
       
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React from 'react';
// import './Home.css';
// import bannerImage from './blood.jpg'; 

// const Home = () => {
//   const cardItems = [
//     {
//       name: 'Donors',
//       img: 'https://www.shutterstock.com/image-photo/donor-word-on-cube-medical-260nw-1805645929.jpg',
//       description: 'Find information on blood donors and how you can contribute to saving lives. Donating blood is a simple, selfless act that can save lives. Every two seconds, someone in the world needs blood. From accident victims to cancer patients, from people undergoing surgeries to individuals with chronic illnesses, blood donations are critical to their survival.'
//     },
//     {
//       name: 'Recipients',
//       img: 'https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/5/shutterstock_1219338337.jpg',
//       description: 'View details about blood recipients and how you can help them with donations. Blood transfusions are essential in a variety of medical situations to replace lost components of the blood. Each blood donation is separated into different components, which means one donation can help save multiple lives.'
//     },
//     {
//       name: 'Blood Bag Availability',
//       img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT305n4KC6fHqoK7Rr9rfjm2QijwPMq5tg3KQ&s',
//       description: 'Check the availability of blood bags and get real-time updates on stock levels. Blood availability is crucial in emergency situations, surgeries, and routine treatments for patients with conditions such as cancer, anemia, and blood disorders.'
//     }
//   ];

//   return (
//     <div className="home">
//       {/* Banner Section */}
//       <div className="banner">
//         <img src={bannerImage} alt="Blood Donation Banner" />
//       </div>

//       {/* Cards Section */}
//       <section className="cards-section">
//         <div className="cards-container">
//           {cardItems.map((item, index) => (
//             <div key={index} className="card">
//               <img src={item.img} alt={item.name} />
//               <h3>{item.name}</h3>
//               <p>{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer Banner */}
      
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import './Home.css';
import bannerImage from './blood.jpg';
import BloodDonationInfo from './BloodDonationInfo'; // Import the BloodDonationInfo component

const Home = () => {
  const cardItems = [
    {
      name: 'Donors',
      img: 'https://www.shutterstock.com/image-photo/donor-word-on-cube-medical-260nw-1805645929.jpg',
      description: 'Find information on blood donors and how you can contribute to saving lives. Donating blood is a simple, selfless act that can save lives. Every two seconds, someone in the world needs blood. From accident victims to cancer patients, from people undergoing surgeries to individuals with chronic illnesses, blood donations are critical to their survival.'
    },
    {
      name: 'Recipients',
      img: 'https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/5/shutterstock_1219338337.jpg',
      description: 'View details about blood recipients and how you can help them with donations. Blood transfusions are essential in a variety of medical situations to replace lost components of the blood. Each blood donation is separated into different components, which means one donation can help save multiple lives.'
    },
    {
      name: 'Blood Bag Availability',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT305n4KC6fHqoK7Rr9rfjm2QijwPMq5tg3KQ&s',
      description: 'Check the availability of blood bags and get real-time updates on stock levels. Blood availability is crucial in emergency situations, surgeries, and routine treatments for patients with conditions such as cancer, anemia, and blood disorders.'
    }
  ];

  return (
    <div className="home">
      {/* Banner Section */}
      <div className="banner">
        <img src={bannerImage} alt="Blood Donation Banner" />
      </div>

      {/* Cards Section */}
      <section className="cards-section">
        <div className="cards-container">
          {cardItems.map((item, index) => (
            <div key={index} className="card">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blood Donation Information Section */}
      <BloodDonationInfo />

      {/* Footer Banner */}
      
    </div>
  );
};

export default Home;
