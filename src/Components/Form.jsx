import styled from "styled-components";
import { RxMagnifyingGlass } from "react-icons/rx";
import SearchForm from "./SearchForm";
import Filter from "./Filter";
const Form = () => {
  return (
    <Wrapper className='section-center'>
      <form onSubmit={(e) => e.preventDefault()}>
        <SearchForm />
        <Filter />
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 2em 0;
  form {
    display: flex;
    flex-direction: column;
    gap: 3em;
  }
  .search-form {
    display: flex;
    align-items: center;
    gap: 1.5em;
    padding: 0.5em 2em;
    background-color: var(--clr-grey-10);
    box-shadow: var(--light-shadow);
    border-radius: var(--radius);
    position: relative;
    .clear-icon {
      background: none;
      border: none;
      display: grid;
      place-content: center;
      position: absolute;
      border-radius: 50%;
      top: 50%;
      right: 3em;
      background-color: var(--clr-grey-5);
      transform: translateY(-50%);
      padding: 0.05em;
      aspect-ratio: 1/1;
      height: 40%;
      svg {
        color: var(--clr-white);
        font-size: 0.8rem;
      }
    }
  }
  svg {
    font-size: 1.2rem;
  }
  .input {
    width: 100%;
    border: none;
    font-size: 1rem;
    padding: 0.2em;
    background-color: inherit;
    color: inherit;
    &:focus-visible {
      outline: 1px solid var(--clr-black);
      border-radius: var(--radius);
    }
    &::placeholder {
      color: inherit;
    }
  }
  @media screen and (min-width: 800px) {
    form {
      flex-direction: row;
      justify-content: space-between;
    }
    .search-form {
      width: 45vw;
      max-width: 456px;
    }
  }
`;
export default Form;
