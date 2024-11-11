const CHAVE_API_GOOGLE_BOOKS = 'AIzaSyDtf_Y-Fd89i-YBupxTpobDzkS_a622zeM';

export const buscarLivros = async (consulta) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${consulta}&key=${CHAVE_API_GOOGLE_BOOKS}`;
  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    const livros = [];
    if (dados.items) {
      dados.items.forEach((item) => {
        livros.push({
          id: item.id,
          titulo: item.volumeInfo.title,
          autor: item.volumeInfo.authors?.join(', ') || 'Autor desconhecido',
          urlImagem: item.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/100x150?text=Sem+imagem',
        });
      });
    }
    return livros;
  } catch (erro) {
    console.error('Erro ao buscar livros:', erro);
    return [];
  }
};

