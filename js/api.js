// Lets load data form api
const loadData = () => {
    const URL = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => displayData(data.data.tools));
  };
  loadSpinner(true);
 