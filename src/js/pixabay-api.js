const apiKey = '44362939-998edb8f92844eab0dd18e81c';

const pixApi = data => {
  const searchParams = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(
    `https://pixabay.com/api/?key=${apiKey}&q=${data}&${searchParams}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error('Помилка при отриманні запиту');
      }
      return response.json();
    })
    
};

export default pixApi;