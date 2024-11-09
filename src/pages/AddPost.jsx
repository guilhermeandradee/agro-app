import Header from "../components/Header"
import '../App.css'
import { MdOutlineImage } from "react-icons/md";
import { IoPaperPlane } from "react-icons/io5";


import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePostagens } from "../components/PostagensProvider";

function AddPost(){

    const [showImage, setShowImage] = useState(false)
    const navigate = useNavigate();

    const [mensagemAdicionarPostagem, setMensagemAdicionarPostagem] = useState({
        message: null,
        success: null
    })

    const { adicionarPostagem } = usePostagens()

    const [autor, setAutor] = useState('Você');
    const [titulo, setTitulo] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [imagem, setImagem] = useState('');

    const handleSubmit = () => {
        try {
            adicionarPostagem(autor, titulo, conteudo, imagem)

            setMensagemAdicionarPostagem({ message: 'Post publicado!', success: true})

            setTimeout(() => {
                setMensagemAdicionarPostagem({ message: null,success: null }) 
                navigate('/')
            }, 3000);
        } catch (error) {
            setMensagemAdicionarPostagem({ message: error.message, success: false})

            setTimeout(() => {
               setMensagemAdicionarPostagem({ message: null,success: null }) 
            }, 3000);
        }
    }

    useEffect(() => {
        if(showImage == false) {
            setImagem('')
        }
    }, [showImage])

    return(
        <>
            <Header buttonModifier={'add-post'} />
            <main className="h-100-vh d-flex flex-column  align-items-center">
                
                <div className="row w-100 d-flex justify-content-center">
                    <div className="col-md-8 col-10 mt-5 p-3 bg-gray d-flex flex-column justify-content-center rounded-3 shadow">
                        <div className="d-flex justify-content-between">
                            <input
                            onChange={(e) => setTitulo(e.target.value)} 
                            placeholder="Titulo" 
                            className="w-100 me-4 rounded px-3 py-2  border-0 shadow" 
                            type="text" />

                            <button 
                            onClick={() => setShowImage(!showImage)}
                            className="w-30 p-1 rounded border-0 shadow" ><MdOutlineImage/></button>
                        </div>
                        <div className="col-12 mt-3">
                            <textarea 
                            onChange={(e) => setConteudo(e.target.value)}
                            placeholder="Conteúdo" 
                            className=" px-3 py-2 rounded w-100 border-0 shadow" 
                            name="" 
                            id=""></textarea>
                        </div>

                        { showImage ? <input
                            onChange={(e) => setImagem(e.target.value)} 
                            placeholder="https://images.pexels.com/photos/image.png" 
                            className="w-100 me-4 rounded px-3 mt-3 py-2 border-0 shadow" 
                            type="text" /> : null }

                        
                        <div className="w-100 mt-3 d-flex justify-content-end px-3">
                            <div 
                            onClick={handleSubmit}
                            className="bg-black btn-adicionar text-light d-flex justify-content-center align-items-center rounded-circle cursor-pointer" 
                            style={{width: '30px', height: '30px'}}>
                                <IoPaperPlane/>
                            </div>
                        </div>
                         
                    </div>

                    { mensagemAdicionarPostagem.message ? (<div className={`col-md-8 col-10 mt-5 p-3 ${ mensagemAdicionarPostagem.success === true ? 'bg-success' : mensagemAdicionarPostagem.success === false && 'bg-danger' } text-light d-flex flex-column justify-content-center rounded-3 shadow text-center`}>{mensagemAdicionarPostagem.message}</div>) : null }
                </div>

            </main>
            <Footer />
        </>
    )
}

export default AddPost