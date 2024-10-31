# REST Countries API with color theme switcher

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users can:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Screenshot

![SCREENSHOT](./public/screenshot.png)

### Links

- Live Site URL: [https://my-country-explorer.netlify.app/](https://my-country-explorer.netlify.app/)

## My Process

### Built with

- HTML/CSS/JavaScript
- REST APIs
- React
- React Router
- Styled Components
- Axios
- Local Storage

### What I learned

- I gained experience in handling errors that can occur when working with APIs, specifically when dealing with missing or undefined properties in the response data. I checked for property definitions before using them to create more robust and reliable code.
- I also learned about global state management, which allowed me to efficiently manage and share data between different components of the project.
- I was able to expand my knowledge of web development by learning and applying advanced CSS techniques to create more responsive and dynamic user interfaces for the project.

```js
const proudOfThisFunc = ({ borders }) => {
  const borderCountries = allCountries.filter((country) =>
    country.codes.some((code) => borders.includes(code))
  );
};
```

## Author

- Website - [Onosereme Emuemhonjie](https://onosereme.netlify.app)
- Frontend Mentor - [@onoseremejohn](https://www.frontendmentor.io/profile/onoseremejohn)
- Twitter - [@onoseremejohn](https://www.twitter.com/onoseremejohn)

## Acknowledgments

- I would like to express my deep appreciation and gratitude to God, without whose guidance and blessings, this project would not have been possible.
- I am also thankful for the invaluable support and assistance provided by ChatGPT, whose contributions greatly improved the quality of my work and sped up my workflow.
