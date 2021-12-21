const fetchApi = async () => {
  const url = 'http://localhost:3000/api';

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  return { data };
};

const getAllProducts = async (): Promise<any[]> => {
  const posts = await fetchApi();
  return posts.data;
};

export default getAllProducts;
