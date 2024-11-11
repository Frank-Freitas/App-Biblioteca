
const GOOGLE_BOOKS_API_KEY = 'AIzaSyDtf_Y-Fd89i-YBupxTpobDzkS_a622zeM';

export const fetchLivros = async (query) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${GOOGLE_BOOKS_API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.items) {
      return data.items.map((item) => ({
        id: item.id,
        title: item.volumeInfo.title,
        author: item.volumeInfo.authors?.join(', ') || 'Autor desconhecido',
        imageUrl: item.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/100x150?text=Sem+imagem',
      }));
    }
    return [];
  } catch (error) {
    console.error('Erro ao buscar livros:', error);
    return [];
  }
};
