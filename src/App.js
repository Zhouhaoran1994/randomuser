import './App.css';
import { useState } from "react";

const User = ({ firstName, lastName, dob, hkid }) => (
  <div>
    <p>First Name: {firstName}</p>
    <p>Last Name: {lastName}</p>
    <p>Date of Birth: {dob}</p>
    <p>HKID: {hkid}</p>
  </div>
);
function App() {
  const userDetails = {
    firstName: "Nah",
    lastName: "Nah",
    dob: "0000-00-00",
    hkid: "0000"
  };

  var [user, setUser] = useState(userDetails);

  function handleGenerate() {
    fetch("https://randomuser.me/api/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let userFetchingDetails = {
          firstName: data.results[0].name.first,
          lastName: data.results[0].name.last,
          dob: data.results[0].dob.date,
          hkid: data.results[0].id.value,
        }
        setUser(userFetchingDetails);
      });
  }
  
  return (
    <div className="App">
      <h1>Random User Generator</h1>
      <User {...user} />
      <button onClick={handleGenerate}>Generate</button>
      <button>Copy</button>
    </div>
  );
}

export default App;
