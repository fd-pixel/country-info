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
      <form style={{ margin: "4rem" }} onSubmit={handleSubmit}>
        Enter Country Name :
        <input type="text" name="country" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      {info?.map((country, index) => (
        <div>
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
          Capital of {country?.name?.common}: {country?.capital}
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
      ))}
    </div>
  );
}

export default App;
