import { useState, } from "react"
import { Navigate, useNavigate } from "react-router-dom";

function Posts(){

    const [postagens, setPostagens] = useState([
        {   
            autor: 'The future is now',
            titulo: 'Make the Future Greener With New Updates',
            conteudo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis architecto voluptatibus officia itaque possimus tempore, voluptatem quisquam harum illo numquam dignissimos earum laudantium labore ut esse beatae perspiciatis. Asperiores, incidu Autem similique incidunt deleniti dolorum sint atque ducimus error a, hic adipisci maiores repudiandae veritatis tempora vitae. Natus exercitationem esse nisi non corporis molestiae, perferendis ab illum, in, quidem tenetur.',
            imagem: '',
            id: 1
        }, 
        {
            autor: 'Guilherme Andrade',
            titulo: 'Horta Vertical Usando Palets de Madeira e Galões de Plástico',
            conteudo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis architecto voluptatibus officia itaque possimus tempore, voluptatem quisquam harum illo numquam dignissimos earum laudantium labore ut esse beatae perspiciatis. Asperiores, incidu Autem similique incidunt deleniti dolorum sint atque ducimus error a, hic adipisci maiores repudiandae veritatis tempora vitae. Natus exercitationem esse nisi non corporis molestiae, perferendis ab illum, in, quidem tenetur.',
            imagem: '',
            id: 2
        }, 
        {
            autor: 'João Vitor',
            titulo: 'Técnicas para um Melhor Cultivo do Milho',
            conteudo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis architecto voluptatibus officia itaque possimus tempore, voluptatem quisquam harum illo numquam dignissimos earum laudantium labore ut esse beatae perspiciatis. Asperiores, incidu Autem similique incidunt deleniti dolorum sint atque ducimus error a, hic adipisci maiores repudiandae veritatis tempora vitae. Natus exercitationem esse nisi non corporis molestiae, perferendis ab illum, in, quidem tenetur.',
            imagem: '',
            id: 3
        },
        {
            autor: 'Codigo Fonte',
            titulo: 'Make the Future Greener With New Updates',
            conteudo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis architecto voluptatibus officia itaque possimus tempore, voluptatem quisquam harum illo numquam dignissimos earum laudantium labore ut esse beatae perspiciatis. Asperiores, incidu Autem similique incidunt deleniti dolorum sint atque ducimus error a, hic adipisci maiores repudiandae veritatis tempora vitae. Natus exercitationem esse nisi non corporis molestiae, perferendis ab illum, in, quidem tenetur.',
            imagem: '',
            id: 4
        }, 
        {
            autor: 'FIAP',
            titulo: 'Horta Vertical Usando Palets de Madeira e Galões de Plástico',
            conteudo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis architecto voluptatibus officia itaque possimus tempore, voluptatem quisquam harum illo numquam dignissimos earum laudantium labore ut esse beatae perspiciatis. Asperiores, incidu Autem similique incidunt deleniti dolorum sint atque ducimus error a, hic adipisci maiores repudiandae veritatis tempora vitae. Natus exercitationem esse nisi non corporis molestiae, perferendis ab illum, in, quidem tenetur.',
            imagem: '',
            id: 5
        }, 
        {
            autor: 'Elon Musk',
            titulo: 'Técnicas para um Melhor Cultivo do Milho',
            conteudo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis architecto voluptatibus officia itaque possimus tempore, voluptatem quisquam harum illo numquam dignissimos earum laudantium labore ut esse beatae perspiciatis. Asperiores, incidu Autem similique incidunt deleniti dolorum sint atque ducimus error a, hic adipisci maiores repudiandae veritatis tempora vitae. Natus exercitationem esse nisi non corporis molestiae, perferendis ab illum, in, quidem tenetur.',
            imagem: '',
            id: 6
        }
    ])

    const mostrarPostagens = () => {
        return postagens && postagens.map(post => (
            
            <div
            className="col-12 col-md-3 bg-gray mx-0 mx-md-1 mb-5 rounded p-3 shadow"
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

    const adicionarPostagem = (autor, titulo, conteudo, imagem) => {
        if(!autor || !titulo || !conteudo || !imagem || autor == '', conteudo == '', imagem == '' || titulo == ''){
            return alert('Preencha as informações corretamente!')
        }

        setPostagens(...arguments, {
            autor: autor,
            titulo: titulo,
            conteudo: conteudo,
            imagem: imagem
        })
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