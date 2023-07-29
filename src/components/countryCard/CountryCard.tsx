interface ICard {
  onClick: () => void;
  flag: string;
  name: string;
  officialName: string;
  capital: string;
  population: number;
}

export const CountryCard = (props: ICard) => {
  return (
    <>
      <div className="card mx-auto mb-3" style={{ width: "90%" }}>
        <img
          src={props.flag}
          className="card-img-top"
          alt="none"
          width={"100%"}
          onClick={props.onClick}
        />
        <h5 className="card-title">
          {props.name} - {props.officialName}
        </h5>
        <div className="text-start">
          <p className="small m-0">Capital: {props.capital}</p>
          <p className="small m-0">Population: {props.population}</p>
        </div>
      </div>
    </>
  );
};
