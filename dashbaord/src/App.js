import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PatientInfo from "./components/HomeComponents/PatientInfo";
import { useState } from "react";

function App() {
  const [patients, setPatients] = useState([
    {
      gender: "Male",
      email: "dianacooper@gmail.com",
      Birthday:"Feb 24th,1997",
      Phonenumber:"(239) 555-0108",
      Memberstatus:"Active member",
      Name:"Diane Cooper",
      Past:"15",
      Upcoming:"2"
    },
    {
      gender: "Male",
      email: "dianacooper@gmail.com",
      Birthday:"Feb 24th,1997",
      Phonenumber:"(239) 555-0108",
      Memberstatus:"Active member",
      Name:"Diane Cooper",
      Past:"15",
      Upcoming:"2"
    },
    {
      gender: "Male",
      email: "dianacooper@gmail.com",
      Birthday:"Feb 24th,1997",
      Phonenumber:"(239) 555-0108",
      Memberstatus:"Active member",
      Name:"Diane Cooper",
      Past:"15",
      Upcoming:"2"
    },
    {
      gender: "Male",
      email: "dianacooper@gmail.com",
      Birthday:"Feb 24th,1997",
      Phonenumber:"(239) 555-0108",
      Memberstatus:"Active member",
      Name:"Diane Cooper",
      Past:"15",
      Upcoming:"2"
    },
    {
      gender: "Male",
      email: "dianacooper@gmail.com",
      Birthday:"Feb 24th,1997",
      Phonenumber:"(239) 555-0108",
      Memberstatus:"Active member",
      Name:"Diane Cooper",
      Past:"15",
      Upcoming:"2"
    },
      ]);

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <Navbar />
        <div style={{ width: "100%" }}>
          <Header />
          {patients.map((patient) => { console.log(patient.gender ,patient.email,patient.Birthday,patient.Phonenumber,patient.Memberstatus)
            return(
            <PatientInfo gender={patient.gender} email={patient.email} birthday={patient.Birthday} phonenumber={patient.Phonenumber}
            memberstatus={patient.Memberstatus} Name={patient.Name} Past={patient.Past} Upcoming={patient.Upcoming}/>
          )})}
        </div>

      </div>
    </div>
  );
}

export default App;
