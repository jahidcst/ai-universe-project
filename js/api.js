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
      // Destructing properties----------//
      const { name, description, image, published_in, features, id } = card;
    }}


        // Lets add data into card and append to main container
  
        container.innerHTML += `
        <div class=" w-fit p-5 rounded-lg shadow-2xl">
        <img class="rounded-lg w-96" src="${image}" alt="">
        <h1 class="text-xl font-semibold mt-3">Features</h1>
        <div class="py-3">
            <ol class="text-base text-slate-500 list-decimal ml-4">
                <li>${features[0]}</li>
                <li>${features[1]}</li>
                <li>${features[2]}</li>
            </ol>
        </div>
        <hr>
        <div>
        <h1 class="text-xl font-semibold mt-3">${name}</h1>
            <div class="flex gap-2 items-center ">
                <i class="fa-regular fa-calendar-days" ></i>
                <p>${published_in}</p>
                <div class="ml-auto"><label onclick="showModal('${id}')" for="my-modal-5"><i class="fa-solid bg-pink-300 p-4 rounded-full fa-arrow-right"></i></label></div>
                
            </div>
        </div>
    </div>
        `;
    loadSpinner(false);
  });
};