import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Post = ({ post }) => {
    return (
        <div className="container my-5 p-4" style={{ maxWidth: "600px", backgroundColor: "#f8f9fa", borderRadius: "10px" }}>
            <div className="text-center mb-4">
                <h6 className="text-muted">{post.autor}</h6>
            </div>

            {/* Exibe a imagem, se existir */}
            {post.imagem && (
                <div className="text-center mb-4">
                    <img 
                        src={post.imagem} 
                        alt="Imagem do post" 
                        className="img-fluid mb-4 rounded"
                    />
                </div>
            )}

            <h3 className="text-center fw-bold">
                {post.titulo}
            </h3>

            <p className="mt-3 text-muted">
                {post.conteudo}
            </p>
        </div>
    );
};

export default Post;
