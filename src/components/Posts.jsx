import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Posts() {
  const [postagens, setPostagens] = useState([
    {
      autor: "The future is now",
      titulo: "Make the Future Greener With New Updates",
      conteudo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis architecto voluptatibus officia itaque possimus tempore...",
      imagem: "../../public/images/1.jpg", // Imagem associada ao ID 1
      id: 1,
    },
    {
      autor: "Guilherme Andrade",
      titulo: "Horta Vertical Usando Palets de Madeira e Galões de Plástico",
      conteudo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis architecto voluptatibus officia itaque possimus tempore...",
      imagem: "../../public/images/2.jpg", // Imagem associada ao ID 2
      id: 2,
    },
    {
      autor: "João Vitor",
      titulo: "Técnicas para um Melhor Cultivo do Milho",
      conteudo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis architecto voluptatibus officia itaque possimus tempore...",
      imagem: "../../public/images/3.jpg", // Imagem associada ao ID 3
      id: 3,
    },
    {
      autor: "Codigo Fonte",
      titulo: "Make the Future Greener With New Updates",
      conteudo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis architecto voluptatibus officia itaque possimus tempore...",
      imagem: "../../public/images/4.jpg", // Imagem associada ao ID 4
      id: 4,
    },
    {
      autor: "FIAP",
      titulo: "Horta Vertical Usando Palets de Madeira e Galões de Plástico",
      conteudo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis architecto voluptatibus officia itaque possimus tempore...",
      imagem: "../../public/images/5.jpg", // Imagem associada ao ID 5
      id: 5,
    },
    {
      autor: "Elon Musk",
      titulo: "Técnicas para um Melhor Cultivo do Milho",
      conteudo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis architecto voluptatibus officia itaque possimus tempore...",
      imagem: "../../public/images/6.jpg", // Imagem associada ao ID 6
      id: 6,
    },
  ]);

  const navigate = useNavigate();

  // Função para gerar o caminho da imagem com base no ID e extensão
  const renomearImagem = (postId) => {
    // Definir as possíveis extensões
    const extensoes = ['jpg', 'jpeg', 'png'];
    let caminhoImagem = '';

    // Testar todas as extensões para encontrar a imagem correspondente
    for (let ext of extensoes) {
      const caminho = `../../public/images/${postId}.${ext}`;
      caminhoImagem = caminho;
      break;  // Aqui você pode adicionar lógica para verificar se o arquivo existe de fato
    }

    return caminhoImagem;
  };

  const adicionarPostagem = (autor, titulo, conteudo, imagemFile) => {
    if (
      !autor ||
      !titulo ||
      !conteudo ||
      !imagemFile ||
      autor === "" ||
      conteudo === "" ||
      imagemFile === "" ||
      titulo === ""
    ) {
      return alert("Preencha as informações corretamente!");
    }

    const novoPost = {
      autor,
      titulo,
      conteudo,
      imagem: "",
      id: postagens.length + 1,
    };

    const novoCaminhoImagem = renomearImagem(novoPost.id);  // Gerar caminho da imagem

    novoPost.imagem = novoCaminhoImagem;

    setPostagens((prevPostagens) => [...prevPostagens, novoPost]);
  };

  const mostrarPostagens = () => {
    return (
      postagens &&
      postagens.map((post) => (
        <div
          className="col-12 col-md-3 bg-gray mx-0 mx-md-1 mb-5 rounded p-3 shadow"
          onClick={() => {
            localStorage.setItem("postagemSelecionada", JSON.stringify(post));
            navigate(`/postagem/${post.id}`);
          }}
        >
          <div className="d-flex w-100 align-items-center mb-3">
            <div
              className="pt-2 rounded bg-black me-3"
              style={{ width: "30px", height: "30px" }}
            ></div>

            <p className="m-0">{post.autor}</p>
          </div>

          <p className="fs-5">{post.titulo}</p>

          {/* Exibindo a imagem, se ela existir */}
          {post.imagem && (
            <img src={post.imagem} alt={post.titulo} style={{ maxWidth: "100%" }} />
          )}
        </div>
      ))
    );
  };

  return (
    <>
      <section className="w-100 px-md-5 px-3 d-flex flex-column flex-grow-1 align-items-center">
        <div className="w-100 px-md-5">
          <h3 className="fs-4 mt-5 mb-4">Posts</h3>
        </div>

        <div className="row w-100 justify-content-evenly align-items-center">
          {mostrarPostagens()}
        </div>

        {/* Exemplo de um formulário para adicionar uma nova postagem */}
        <div>
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                adicionarPostagem(
                  "Autor Exemplo",
                  "Título da Postagem",
                  "Conteúdo da postagem.",
                  file
                );
              }
            }}
          />
        </div>
      </section>
    </>
  );
}

export default Posts;
