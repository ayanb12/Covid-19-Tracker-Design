const body = document.querySelector("body");
const select = document.querySelector(".country-select");

// To Fetch All Countries from API
const fetchAllCountries = () => {
  fetch("https://covid19.mathdro.id/api/countries")
    .then((res) => res.json())
    .then((data) => getAllNames(data));
};

const getAllNames = (data) => {
  const nameArray = [];
  console.log(data);

  data.countries.forEach((el) => {
    nameArray.push(el.name);
  });

  nameArray.forEach((name, index) => {
    const option = document.createElement("OPTION");
    option.classList.add("p-x");
    option.setAttribute("value", index);
    const text = document.createTextNode(name);
    option.appendChild(text);
    select.appendChild(option);
  });
};
