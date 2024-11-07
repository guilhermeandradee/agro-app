import { useState, } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import { usePostagens } from "./PostagensProvider";

function Posts(){

    const { postagens } = usePostagens(); 

    const mostrarPostagens = () => {
        return postagens && postagens.map(post => (
            
            <div
            className="col-12 col-md-3 bg-gray mx-0 mx-md-1 mb-5 rounded p-3 shadow cursor-pointer miniature"
            onClick={() => {
                localStorage.setItem("postagemSelecionada", JSON.stringify(post));
                navigate(`/postagem/${post.id}`);
            }}>
                            
                <div className="d-flex w-100 align-items-center mb-3">
                    <div className="pt-2 rounded bg-black me-3" style={{width: '30px', height: '30px'}}>
                    </div>
                    
                    <p className="m-0">{post.autor}</p>
                </div>
                            
                <p className="fs-5">{post.titulo}</p>
            </div>
        ))
    }

    const navigate = useNavigate()

    return(
        <>
            <section className="w-100 px-md-5 px-3 d-flex flex-column flex-grow-1 align-items-center">
                <div className="w-100 px-md-5">
                    <h3 className="fs-4 mt-5 mb-4">Posts</h3>
                </div>


                
                <div className="row w-100 justify-content-evenly aling-items-center ">
                { mostrarPostagens() } 

                </div>

                    
                    

            </section>
        </>
    )
}

export default Posts