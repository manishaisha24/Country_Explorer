import styled from "styled-components";
import { BsMoon, BsSunFill } from "react-icons/bs";
import { useGlobalContext } from "../Context";
const Header = () => {
  const { mode, toggleMode } = useGlobalContext();
  return (
    <Wrapper>
      <div className='section-center'>
        <h2>Where in the world?</h2>
        <button className='bold' onClick={toggleMode}>
          {mode === "light" ? (
            <>
              <BsMoon /> Dark Mode
            </>
          ) : (
            <>
              <BsSunFill /> Light Mode
            </>
          )}
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: fixed;
  z-index: 100;
  background: var(--clr-grey-10);
  width: 100%;
  min-height: 4rem;
  display: grid;
  place-items: center;
  box-shadow: var(--bs);
  .section-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h2 {
    font-size: 1.1rem;
    margin-bottom: 0;
  }
  button {
    background: none;
    border: none;
    font-size: 1rem;
    color: var(--clr-grey-1);
    display: flex;
    align-items: center;
    gap: 0.5em;
  }
`;

export default Header;
