// Lets load data form api
const loadData = () => {
    const URL = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => displayData(data.data.tools));
  };
  loadSpinner(true);
  const displayData = (data) => {
    // Get the container
    const container = document.getElementById("card-container");
    container.innerHTML = ``;
  
    // For each element from array
    data.forEach((card)) => {
      // Destructing properties form object
      const { name, description, image, published_in, features, id } = card;
    }}