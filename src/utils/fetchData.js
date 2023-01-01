export const exerciseOptions = {
    method: 'GET',   
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '19d8ffcab4mshcc0626bd26d9e32p118107jsnd96ce271004e'
    },
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '19d8ffcab4mshcc0626bd26d9e32p118107jsnd96ce271004e'
    }
  };


export const fetchData = async(url, option) => {
    const response = await fetch(url, option);
    const data = await response.json();

    return data;
}