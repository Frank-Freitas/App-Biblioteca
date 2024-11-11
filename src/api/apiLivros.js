const CHAVE_API_GOOGLE_BOOKS = 'AIzaSyDtf_Y-Fd89i-YBupxTpobDzkS_a622zeM';

export const buscarLivros = async (consulta) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${consulta}&key=${CHAVE_API_GOOGLE_BOOKS}`;
  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    if (dados.items) {
      return dados.items.map((item) => ({
        id: item.id,
        titulo: item.volumeInfo.title,
        autor: item.volumeInfo.authors?.join(', ') || 'Autor desconhecido',
        urlImagem: item.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/100x150?text=Sem+imagem',
      }));
    }
    return [];
  } catch (erro) {
    console.error('Erro ao buscar livros:', erro);
    return [];
  }
};
