import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
const Borders = ({ borders }) => {
  if (!borders) return <>Nil</>;
  const { allCountries } = useGlobalContext();
  const borderCountries = allCountries.filter((country) =>
    country.codes.some((code) => borders.includes(code))
  );

  return (
    <div className='borders'>
      {borderCountries.map((country) => (
        <Link key={country.id} to={`/${country.name}`} state={{ from: true }}>
          <span>{country.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Borders;
