import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [info, setInfo] = useState([]);
  const [country, setCountry] = useState("");

  const url = `https://restcountries.com/v3.1/name/${country}`;

  const getData = async () => {
    const response = await axios.get(url);
    console.log(response.data);
    setInfo(response.data);
  };

  const handleChange = (e) => {
    setCountry(e.target.value);
    console.log(country);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  console.log(info);

  return (
    <div className="App">
      Data of Countries
      <form style={{ margin: "2rem" }} onSubmit={handleSubmit}>
        Enter Country Name :
        <input type="text" name="country" onChange={handleChange} autoFocus />
        <button type="submit">Submit</button>
      </form>
      {info?.map((country, index) => (
        <div className="Main">
          <p>
            {" "}
            {
              <img
                style={{ margin: "2rem" }}
                src={country?.flags?.png}
                alt="flag"
              />
            }
          </p>
          <div className="infopart">
            <div className="Capital">
              {" "}
              Capital of {country?.name?.common}: {country?.capital}{" "}
            </div>
            {/* <p>
            {" "}
            Languages of {country?.name?.common}: {country?.languages}
          </p> */}
            <p>
              {" "}
              Borders of {country?.name?.common}:
              {country.borders.map((border, index) => {
                return (
                  <p>
                    {" "}
                    {index + 1}-{border}
                  </p>
                );
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
