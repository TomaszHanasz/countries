import { useState } from "react";
import React from "react";
import "./App.css";
import axios from "axios";
import { ICountries } from "./Types";
import { CustomButton } from "./components/customButton/CustomButton";

function App() {
  const [country, setCountry] = useState<ICountries>();
  const [currentSearch, setCurrentSearch] = useState<string>("");
  const [borders, setBorders] = useState<string>("");
  const [neighbours, setNeighbours] = useState<ICountries[]>();
  const [location, setLocation] = useState<string>("");

  const handleInputChange = (e) => {
    setCurrentSearch(e.target.value);
  };

  const getCountry = async (name: string) => {
    try {
      const data = await axios.get(
        `https://restcountries.com/v3.1/name/${name}`
      );
      setCountry(data.data[0]);
      setBorders(data.data[0].borders);
      setLocation(data.data[0].maps.googleMaps);
      console.log(data.data[0]);
    } catch (error) {
      console.log("fetching error", error);
    }
  };

  const getNeighbours = async (borders: string) => {
    try {
      const data = await axios.get(
        `https://restcountries.com/v3.1/alpha?codes=${borders}`
      );
      setNeighbours(data.data);
    } catch (error) {
      console.log("neighbours error", error);
    }
  };

  return (
    <div className="App container mt-3">
      <div className="input-group">
        <input
          type={"text"}
          value={currentSearch}
          placeholder={"search"}
          onChange={handleInputChange}
          className={"form-control"}
        />
        <CustomButton
          className={"btn btn-primary"}
          onClick={() => getCountry(currentSearch)}
          text="Get Country"
        />
      </div>
      {country && (
        <div className="mt-3 ">
          <div className="card mx-auto" style={{ width: "100%" }}>
            <img
              src={country.flags.svg}
              className="card-img-top"
              alt="none"
              width={"100%"}
            />

            <div className="card-body">
              <div>
                <img
                  style={{ width: 200, marginBottom: 15 }}
                  src={country.coatOfArms.svg}
                  alt="coat of arms"
                />
              </div>
              <h5 className="card-title mb-3">
                {country.name.common} - {country.name.official}
              </h5>
              <div className="text-start">
                <p className="small m-0 mb-3">
                  Flag description: {country.flags.alt}
                </p>
                <p className="small m-0 mb-3">Capital: {country.capital}</p>
                <p className="small m-0 mb-3">
                  Population: {country.population}
                </p>
              </div>

              <div className="d-flex flex-column w-25 align-items-center mx-auto">
                <CustomButton
                  className={"btn btn-primary mb-3"}
                  onClick={() => getNeighbours(borders)}
                  text="Get Neighbours"
                />
                <CustomButton
                  className={"btn btn-primary mb-3"}
                  onClick={() => window.open(location)}
                  text="See on map"
                />
              </div>
            </div>
            <div className="countries-grid">
              {neighbours &&
                neighbours.map((el, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        className="card mx-auto mb-3"
                        style={{ width: "90%" }}
                      >
                        <img
                          src={el.flags.svg}
                          className="card-img-top"
                          alt="none"
                          width={"100%"}
                          onClick={() => getCountry(el.name.common)}
                        />
                        <h5 className="card-title">
                          {el.name.common} - {el.name.official}
                        </h5>
                        <div className="text-start">
                          <p className="small m-0">Capital: {el.capital}</p>
                          <p className="small m-0">
                            Population: {el.population}
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
