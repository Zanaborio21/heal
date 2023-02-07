import { Fragment, useEffect, useState } from "react";
// import Medicamentos from "./medicamentos";


export default function Recordatory () {
    const token = localStorage.getItem("token")
    const userData = localStorage.getItem("user");
    const user = userData ? JSON.parse(userData) : {};
    const userIdi = user.id
    const tokeni = token 
    const [meds, setMeds] = useState([]);
    const [error, setError] = useState(null);
    const [pacientes, setPacientes] = useState([]);

    const [selectedMed, setSelectedMed] = useState("clorfenamina");
    const [medId, setMedId] = useState(1);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [interval, setInterval] = useState();
    const [message, setMessage] = useState();

    const handleChange = event => {
        console.log(event.target.value);
        setSelectedMed(event.target.value);
        setMedId(event.target.selectedOptions[0].key);
    };

    useEffect(() => {
        
        async function fetchMeds() {
            const options = {
                method: "get",
                headers: {
                "Content-Type": "application/json"
                }
            };
            try {
                const response = await fetch('https://health-tracker-backend-production.up.railway.app/api/v1/pastilla', options);
                const data = await response.json();

                console.log(meds);
                setMeds(data.data);

            } catch (error) {
                setError(error);
                console.log(error);
            }
        }
        async function fetchPacientes() {
            const options = {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + tokeni
                }
            };
            try {
                const response = await fetch('https://health-tracker-backend-production.up.railway.app/api/v1/pacientes', options);
                const data = await response.json();
                console.log(pacientes);
                setPacientes(data.data);

            } catch (error) {
                setError(error);
                console.log(error);
            }
        }
        fetchMeds();
        fetchPacientes();
    }, []);

    const handleSubmit = async e => {

        e.preventDefault();
        console.log(typeof startDate, endDate, interval, medId, userIdi);
        const paciente = pacientes.find(obj => obj.pacient_id === userIdi);

        const data = {
            Fecha_inicio: startDate + "T00:00:00Z",
            Fecha_fin: endDate + "T00:00:00Z",
            interval: interval,
            message: message,
            medicamento: medId,
            pacientes: paciente.id
        };
        const options = {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + tokeni
            },
            body: JSON.stringify(data)
        };
        console.log(`medId -> ${medId}`);
        console.log(tokeni);
        console.log(options.body);
        await fetch("https://health-tracker-backend-production.up.railway.app/api/v1/recordatory", options);
    }

	return (
        <Fragment>
        <h1 className="recordatorytitle"> Add Recordatory </h1>
        <form className="recordatoryform" onSubmit={handleSubmit}>
        <label className="recordatorylabel">Start Date:</label>
        <input type="date" className="recordatoryinput" id="start-date" name="start-date" required onChange={e => setStartDate(e.target.value)}/>
        
        <label className="recordatorylabel">End Date:</label>
        <input type="date" className="recordatoryinput" id="end-date" name="end-date" required onChange={e => setEndDate(e.target.value)}/>
        
        <label className="recordatorylabel">Intervals:</label>
        <input type="float" className="recordatoryinput" id="float-field" name="float-field" placeholder="Intervals in hours" required onChange={e => setInterval(e.target.value)}/>
        
        <label className="recordatorylabel">Select Field:</label>
        <select className="recordatoryinput" id="select-field" name="select-field" value={selectedMed} required onChange={handleChange}>
            {meds.map( item => (
                <option key = {item.id} id={item.id} value={item.nombre}>{item.nombre}</option>
            ))}
        </select>

        <label className="recordatorylabel">Text Field:</label>
        <input type="text" className="recordatoryinput" id="text-field" name="text-field" required onChange={e => setMessage(e.target.value)}/>
        
        <input type="submit" className="recordatorysubmit" value="Submit"/>
        </form>
        </Fragment>
	)
}
