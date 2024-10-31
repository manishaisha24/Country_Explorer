import styled from "styled-components";
import { Link } from "react-router-dom";
const SingleCountry = ({
  alt,
  svg,
  name,
  population,
  region,
  capitals = [],
}) => {
  return (
    <Wrapper>
      <Link to={name} state={{ from: true }}>
        <img src={svg} alt={alt || name} />
        <footer>
          <h3>{name}</h3>
          <p>
            <span className='bold'>Population : </span>
            {population}
          </p>
          <p>
            <span className='bold'>Region : </span>
            {region}
          </p>
          <p>
            <span className='bold'>
              {capitals.length > 1 ? "Capitals" : "Capital"} :{" "}
            </span>
            {capitals.join(", ")}
          </p>
        </footer>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 2em;
  box-shadow: var(--light-shadow);
  overflow: hidden;
  background-color: var(--clr-grey-10);
  /* min-height: 370px; */
  a {
    display: block;
    height: 100%;
  }
  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    transition: var(--transition);
    &:hover {
      scale: 1.1;
    }
  }
  footer {
    width: 88%;
    margin: 0 auto;
    padding: 1em 0 2em;
    position: relative;
    z-index: 2;
    color: var(--clr-grey-1);
    &:active {
      color: red;
      color: -webkit-activelink;
    }
    p {
      margin-bottom: 0.3em;
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 600px) {
    width: 100%;
    margin-bottom: 0;
  }
`;
export default SingleCountry;
