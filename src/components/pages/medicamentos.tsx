// import { useEffect, useState } from 'react';

// const Medicamentos = ({setMedId}) => {

//     const [meds, setMeds] = useState([]);
//     // const [medsObj, setMedsObj] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         async function fetchMeds() {
//             const options = {
//                 method: "get",
//                 headers: {
//                 "Content-Type": "application/json"
//                 }
//             };
//             try {
//                 const medsDic = {};
//                 const response = await fetch('https://health-tracker-backend-production.up.railway.app/api/v1/pastilla', options);
//                 const data = await response.json();

//                 setMeds(data.data);

//                 // meds.forEach( item => medsDic[item.nombre] = item.id);
                
//                 // console.log(medsDic);
//                 // console.log(medsObj["clorfenamina"]);

//                 // setMedsObj(medsDic);
                
//                 console.log(meds);

//             } catch (error) {
//                 setError(error);
//             }
//         }
//         fetchMeds();
//     }, []);

//     return (
//         <select className="recordatoryinput" id="select-field" name="select-field" required onChange={e => setMedId(meds.find(medi => medi.nombre === e.target.value))}>
//             {meds.map( item => (
//                 <option key={item.id}>{item.nombre}</option>
//             ))}
//         </select>
//     )
// }

// export default Medicamentos;