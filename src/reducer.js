import { nanoid } from "nanoid";

import {
  FETCH_COUNTRIES_BEGIN,
  FETCH_COUNTRIES_ERROR,
  FETCH_COUNTRIES_SUCCESS,
  FILTER_SEARCH,
  UPDATE_SEARCH,
  TOGGLE_MODE,
} from "./actions";

export default function (state, action) {
  if (action.type === FETCH_COUNTRIES_BEGIN) {
    return { ...state, loading: true };
  }

  if (action.type === FETCH_COUNTRIES_ERROR) {
    return { ...state, loading: false, error: true };
  }

  if (action.type === FETCH_COUNTRIES_SUCCESS) {
    const data = action.payload;
    let countries = data.map((country) => {
      const { common: name, nativeName, official } = country.name;
      const {
        flags: { alt, svg },
        population,
        region,
        capital: capitals,
        subregion,
        tld,
        currencies,
        languages,
        borders,
        cca2,
        cca3,
        ccn3,
        cioc,
      } = country;
      const strPopulation = population.toLocaleString();
      return {
        name,
        svg,
        alt,
        population: strPopulation,
        region,
        capitals,
        subregion,
        nativeName,
        tld,
        currencies,
        languages,
        id: nanoid(),
        official,
        borders,
        codes: [...new Set([cca2, cca3, ccn3, cioc])],
      };
    });
    countries = countries.sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
    );
    let regions = countries.map((country) => country.region);
    regions = new Set(regions);
    return {
      ...state,
      loading: false,
      error: false,
      allCountries: [...countries],
      filteredCountries: [...countries],
      allRegions: ["Filter by Region", ...regions],
    };
  }

  if (action.type === FILTER_SEARCH) {
    let { name, value } = action.payload;
    if ((name === "text" && /^\s+$/.test(value)) || (!name && !value)) {
      name = "text";
      value = "";
    }
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === UPDATE_SEARCH) {
    const { allCountries } = state;
    let { text, region } = state.filters;
    let tempCountries = [...allCountries];
    if (text) {
      text = text.trim().toLowerCase();
      tempCountries = tempCountries.filter(
        (country) =>
          country.name.toLowerCase().includes(text) ||
          country.official.toLowerCase().includes(text)
      );
    }
    if (region !== "Filter by Region") {
      tempCountries = tempCountries.filter(
        (country) => country.region === region
      );
    }
    return { ...state, filteredCountries: tempCountries };
  }

  if (action.type === TOGGLE_MODE) {
    const { mode } = state;
    const newMode = mode === "light" ? "dark" : "light";
    return { ...state, mode: newMode };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
}
