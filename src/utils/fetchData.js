export const exerciseOptions = {
    method: 'GET',   
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '0371d5b72bmsha6076a5f237b1bdp10f5f3jsn3ca8088333ca'
    },
  };

export const fetchData = async(url, option) => {
    const response = await fetch(url, option);
    const data = await response.json();

    return data;
}