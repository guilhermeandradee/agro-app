import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

const DetalhesPostagem = () => {
    // Recupera o post do localStorage
    const post = JSON.parse(localStorage.getItem("postagemSelecionada"));

    // Verifica se o post existe
    if (!post) {
        return <p>Postagem não encontrada.</p>;
    }

    // Caminho da imagem
    const imagemPost = post.imagem || `/images/${post.id}.jpg`;

    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Cabeçalho */}
            <Header />

            {/* Conteúdo da Postagem */}
            <main className="container my-5 flex-grow-1">
                <div className="card shadow-sm mx-auto" style={{ maxWidth: "600px" }}>
                    <div className="card-body">
                        {/* Autor */}
                        <div className="text-center mb-3">
                            <span className="text-muted">{post.autor}</span>
                        </div>

                        {/* Imagem do Post */}
                        <div className="text-center mb-4">
                            <img 
                                src={imagemPost} 
                                alt="Imagem do post" 
                                className="img-fluid rounded"
                            />
                        </div>

                        {/* Título */}
                        <h2 className="text-center fw-bold">{post.titulo}</h2>

                        {/* Conteúdo */}
                        <p className="mt-4 text-muted">
                            {post.conteudo}
                        </p>
                    </div>
                </div>
            </main>

            {/* Rodapé */}
            <Footer />
        </div>
    );
};

export default DetalhesPostagem;
