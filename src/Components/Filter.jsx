import styled from "styled-components";
import { useGlobalContext } from "../Context";
const Filter = () => {
  const { allRegions, filterSearch } = useGlobalContext();
  return (
    <Wrapper>
      <select name='region' onChange={filterSearch}>
        {allRegions.map((region) => (
          <option value={region} key={region}>
            {region}
          </option>
        ))}
      </select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 50%;
  padding: 0.5em 2em;
  border-radius: var(--radius);
  background-color: var(--clr-grey-10);
  color: var(--clr-grey-1);
  select {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    background-color: var(--clr-grey-10);
    color: var(--clr-grey-1);
    border-radius: var(--radius);
    font-size: 0.875rem;
  }

  @media screen and (min-width: 800px) {
    width: unset;
  }
`;

export default Filter;
