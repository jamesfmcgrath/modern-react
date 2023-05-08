import axios from 'axios';

const searchImages = async term => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID aRvrUq_dRS6D5PPwcVn72ubXFvM70k3bBWMgNVYRFZA',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
