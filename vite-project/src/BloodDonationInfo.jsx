// import React from 'react';
// import './BloodDonationInfo.css';

// const BloodDonationInfo = () => {
//     return (
//         <div className="donation-container">
//             <div className="info-section">
//                 <div className="image-container">
//                     <img src="your-blood-bag-image-url-here" alt="Blood Bag" className="blood-bag" />
//                     <div className="save-lives">
//                         <p>One Blood Donation can save up to <strong>Three Lives</strong></p>
//                     </div>
//                 </div>
//                 <p className="donation-text">
//                     After donating blood, the body works to replenish the blood loss. 
//                     This stimulates the production of new blood cells and in turn, helps in maintaining good health.
//                 </p>
//                 <button className="donate-button">Donate Now</button>
//             </div>
//             <div className="blood-type-compatibility">
//                 <h3>Compatible Blood Type Donors</h3>
//                 <table className="compatibility-table">
//                     <thead>
//                         <tr>
//                             <th>Blood Type</th>
//                             <th>Donate Blood To</th>
//                             <th>Receive Blood From</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>A+</td>
//                             <td>A+ AB+</td>
//                             <td>A+ A- O+ O-</td>
//                         </tr>
//                         <tr>
//                             <td>O+</td>
//                             <td>O+ A+ B+ AB+</td>
//                             <td>O+ O-</td>
//                         </tr>
//                         <tr>
//                             <td>B+</td>
//                             <td>B+ AB+</td>
//                             <td>B+ B- O+ O-</td>
//                         </tr>
//                         <tr>
//                             <td>AB+</td>
//                             <td>AB+</td>
//                             <td>Everyone</td>
//                         </tr>
//                         <tr>
//                             <td>A-</td>
//                             <td>A+ A- AB+ AB-</td>
//                             <td>A- O-</td>
//                         </tr>
//                         <tr>
//                             <td>O-</td>
//                             <td>Everyone</td>
//                             <td>O-</td>
//                         </tr>
//                         <tr>
//                             <td>B-</td>
//                             <td>B+ B- AB+ AB-</td>
//                             <td>B- O-</td>
//                         </tr>
//                         <tr>
//                             <td>AB-</td>
//                             <td>AB+ AB-</td>
//                             <td>AB- A- B- O-</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default BloodDonationInfo;
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './BloodDonationInfo.css';

const BloodDonationInfo = () => {
    return (
        <div className="donation-container">
            <div className="info-section">
                <div className="image-container">
                    
                    <div className="save-lives">
                        <p>One Blood Donation can save up to <strong>Three Lives</strong></p>
                    </div>
                </div>
                <p className="donation-text">
                    After donating blood, the body works to replenish the blood loss. 
                    This stimulates the production of new blood cells and in turn, helps in maintaining good health.
                </p>
                <Link to="/Donor">
                    <button className="donate-button">Donate Now</button>
                </Link>
            </div>
            <div className="blood-type-compatibility">
                <h3>Compatible Blood Type Donors</h3>
                <table className="compatibility-table">
                    <thead>
                        <tr>
                            <th>Blood Type</th>
                            <th>Donate Blood To</th>
                            <th>Receive Blood From</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>A+</td>
                            <td>A+ AB+</td>
                            <td>A+ A- O+ O-</td>
                        </tr>
                        <tr>
                            <td>O+</td>
                            <td>O+ A+ B+ AB+</td>
                            <td>O+ O-</td>
                        </tr>
                        <tr>
                            <td>B+</td>
                            <td>B+ AB+</td>
                            <td>B+ B- O+ O-</td>
                        </tr>
                        <tr>
                            <td>AB+</td>
                            <td>AB+</td>
                            <td>Everyone</td>
                        </tr>
                        <tr>
                            <td>A-</td>
                            <td>A+ A- AB+ AB-</td>
                            <td>A- O-</td>
                        </tr>
                        <tr>
                            <td>O-</td>
                            <td>Everyone</td>
                            <td>O-</td>
                        </tr>
                        <tr>
                            <td>B-</td>
                            <td>B+ B- AB+ AB-</td>
                            <td>B- O-</td>
                        </tr>
                        <tr>
                            <td>AB-</td>
                            <td>AB+ AB-</td>
                            <td>AB- A- B- O-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BloodDonationInfo;

