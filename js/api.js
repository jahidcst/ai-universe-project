const allData = () => {
    const url = ('https://openapi.programming-hero.com/api/ai/tools')
    fetch(url)
    .then((res) => res.json())
    .then((data) => showData(data))
}

const showData = (datas) => {
    console.log(datas)
}
allData();