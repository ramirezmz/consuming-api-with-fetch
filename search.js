const fetch = require("node-fetch");

const useFetch = () => {
  const url = `https://fourtonfish.com/hellosalut/?lang=`;

  fetch(url)
    .then((response) => response.json())
    .then((myIpAddress) => {
      console.log(myIpAddress);
    });
};
useFetch();

// fetch("http://ip-api.com/json/?fields=61439");
