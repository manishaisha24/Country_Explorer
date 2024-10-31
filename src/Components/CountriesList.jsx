import styled from "styled-components";
import { useGlobalContext } from "../Context";
import Loading from "./Loading";
import SingleCountry from "./SingleCountry";
const CountriesList = ({}) => {
  const { loading, filteredCountries, error } = useGlobalContext();

  if (loading)
    return (
      <div className='absolute'>
        <Loading />
      </div>
    );
  if (error)
    return (
      <div className='absolute text-center'>
        <h3>There was an error...</h3>
      </div>
    );

  if (filteredCountries.length < 1) {
    return (
      <div className='absolute text-center'>
        <h3>No country matched your search...</h3>
      </div>
    );
  }

  return (
    <Wrapper className='section-center'>
      {filteredCountries.map((country) => (
        <SingleCountry {...country} key={country.id} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1em 0 2em;
  min-height: calc(100vh - 4rem - 250px);
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2em 4em;
  }
`;


export default CountriesList;
