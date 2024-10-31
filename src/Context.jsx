import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import {
  FETCH_COUNTRIES_BEGIN,
  FETCH_COUNTRIES_ERROR,
  FETCH_COUNTRIES_SUCCESS,
  FILTER_SEARCH,
  UPDATE_SEARCH,
  TOGGLE_MODE,
} from "./actions";
import axios from "axios";

const url = "https://restcountries.com/v3.1/all";

const AppContext = createContext();
const getMode = () =>
  localStorage.getItem("mode") ? localStorage.getItem("mode") : "light";
const AppProvider = ({ children }) => {
  const initialState = {
    loading: false,
    error: false,
    allCountries: [],
    filteredCountries: [],
    allRegions: ["Filter by Region"],
    filters: {
      text: "",
      region: "Filter by Region",
    },
    mode: getMode(),
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchCountries = async (url) => {
    dispatch({ type: FETCH_COUNTRIES_BEGIN });
    try {
      const response = await axios.get(url);
      const countries = response.data;
      dispatch({ type: FETCH_COUNTRIES_SUCCESS, payload: countries });
    } catch (error) {
      dispatch({ type: FETCH_COUNTRIES_ERROR });
    }
  };

  const filterSearch = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: FILTER_SEARCH, payload: { name, value } });
  };

  const toggleMode = () => {
    dispatch({ type: TOGGLE_MODE });
  };

  useEffect(() => {
    fetchCountries(url);
  }, [url]);

  useEffect(() => {
    dispatch({ type: UPDATE_SEARCH });
  }, [state.filters]);

  useEffect(() => {
    document.documentElement.className = `${state.mode}-mode`;
    localStorage.setItem("mode", state.mode);
  }, [state.mode]);

  return (
    <AppContext.Provider value={{ ...state, filterSearch, toggleMode }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
