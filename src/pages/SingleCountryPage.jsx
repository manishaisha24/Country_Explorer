import styled from "styled-components";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading";
import { useGlobalContext } from "../Context";
import Borders from "../Components/Borders";

const SingleCountryPage = () => {
  const { country } = useParams();
  const { allCountries } = useGlobalContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [singleCountry, setSingleCountry] = useState(null);
  useEffect(() => {
    setLoading(true);
    const newCountry = allCountries.find(
      (c) => c.name.toLowerCase() === country.toLowerCase()
    );
    if (newCountry) {
      setSingleCountry(newCountry);
    } else {
      setSingleCountry(null);
    }
    setLoading(false);
  }, [allCountries, country]);

  if (loading) {
    return (
      <div className='absolute'>
        <Loading />
      </div>
    );
  }

  if (!singleCountry) {
    return (
      <div className='absolute text-center'>
        <h3>No country to display...</h3>
        <Link to='/' className='btn' state={true}>
          Home
        </Link>
      </div>
    );
  }

  const goBack = () => {
    if (location.state && location.state.from) navigate(-1);
    else navigate("/", { state: true });
  };

  const {
    alt,
    name,
    nativeName,
    svg,
    population,
    region,
    subregion,
    capitals,
    tld,
    currencies,
    languages,
    borders,
  } = singleCountry;

  const checkValues = (currencies, nativeName, languages, tld, capitals) => {
    let currency = currencies,
      native = nativeName,
      language = languages,
      domain = tld,
      capital = capitals;

    {
      if (currency) {
        currency = Object.values(currency)
          .map((x) => x.name)
          .sort((a, b) => a.localeCompare(b));
      } else currency = [];
    }

    {
      if (native) {
        native = Object.values(native).map((x) => x.common);
        native = [...new Set(native)];
      } else native = [];
    }

    {
      if (language) {
        language = Object.values(language).sort((a, b) => a.localeCompare(b));
      } else language = [];
    }

    if (domain && domain.length > 0) {
      domain = domain[0];
    }
    if (!(capital && capital.length)) {
      capital = [];
    }
    return { currency, native, language, domain, capital };
  };

  const values = checkValues(currencies, nativeName, languages, tld, capitals);

  return (
    <Wrapper className='section-center'>
      <button className='back btn' onClick={goBack}>
        <div>
          <BiArrowBack />
          Back
        </div>
      </button>
      <div className='main'>
        <img src={svg} alt={alt || name} />
        <div>
          <h3>{name}</h3>
          <div className='container'>
            <div className='sect'>
              <p>
                <span className='bold'>
                  {values.native.length > 1 ? "Native Names" : "Native Name"} :
                </span>{" "}
                {values.native.join(", ")}
              </p>
              <p>
                <span className='bold'>Population :</span> {population}
              </p>
              <p>
                <span className='bold'>Region :</span> {region}
              </p>
              <p>
                <span className='bold'>Sub Region :</span> {subregion}
              </p>
              <p>
                <span className='bold'>
                  {values.capital.length > 1 ? "Capitals" : "Capital"} :
                </span>{" "}
                {values.capital.join(", ")}
              </p>
            </div>
            <div className='sect'>
              <p>
                <span className='bold'>Top Level Domain :</span> {values.domain}
              </p>
              <p>
                <span className='bold'>Currencies :</span>{" "}
                {values.currency.join(", ")}
              </p>
              <p>
                <span className='bold'>Languages :</span>{" "}
                {values.language.join(", ")}
              </p>
            </div>
            <div className='sect'>
              <p>
                <span className='bold'>Border Countries :</span>
              </p>
              <Borders borders={borders} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .back {
    margin: 2.2em 0 3.2em;
    box-shadow: var(--dark-shadow);
    svg {
      font-size: 1.2rem;
      color: inherit;
    }
    div {
      display: flex;
      align-items: center;
      gap: 0.5em;
    }
  }
  img {
    height: 35vh;
    width: 100%;
    object-fit: cover;
    transition: var(--transition);
    box-shadow: var(--light-shadow);
  }
  h3 {
    margin: 1em 0 0;
  }
  p:not(:last-child) {
    margin-bottom: 0.3em;
  }
  .sect {
    padding: 1em 0;
  }
  .borders {
    margin-top: 0.7em;
  }
  .borders span {
    padding: 0.2em 1em;
    margin: 0 0.7em 0.5em 0;
    box-shadow: var(--dark-shadow);
    border-radius: var(--radius);
    background-color: var(--clr-grey-10);
    color: var(--clr-grey-1);
    cursor: pointer;
    transition: var(--transition);
    display: inline-block;
    &:hover {
      color: red;
      transform: scale(1.05);
    }
  }
  .main {
    padding-bottom: 1em;
  }
  @media screen and (min-width: 600px) and (max-width: 799px) {
    img {
      height: 40vh;
    }
  }
  @media screen and (min-width: 800px) {
    .back {
      margin: 3.2em 0;
    }
    h3 {
      margin: 0;
      margin-bottom: 0.6em;
    }
    .main {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4em;
      align-items: center;
    }
    img {
      height: unset;
      max-height: 60vh;
      &:hover {
        transform: rotate(-2.5deg);
      }
    }
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3em 1em;
    }
    div.sect:last-of-type {
      grid-column: 1/3;
      p {
        display: inline;
        margin-right: 1em;
      }
      .borders {
        display: inline;
      }
    }
    .sect {
      padding: 0;
    }
  }
`;

export default SingleCountryPage;
