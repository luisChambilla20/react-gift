export const getGifts = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=E8CIVKUhfAbHggBYlY3OmpMqE9AKKxRa&limit=10&q=${category}`;
  const { data } = await fetch(url).then((res) => res.json());

  const gifts = data.map((img) => ({
    id: img.id,
    titulo: img.title,
    url: img.images.downsized_medium.url,
  }));

  console.log(gifts);
  return gifts;
};
