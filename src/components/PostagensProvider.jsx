// PostagensContext.js
import React, { createContext, useContext, useState } from 'react';

const PostagensContext = createContext();

export const usePostagens = () => useContext(PostagensContext);

export function PostagensProvider({ children }) {
    
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

    const adicionarPostagem = (autor, titulo, conteudo, imagem) => {
        if (!autor || !titulo || !conteudo || !imagem) {
            return alert('Preencha as informações corretamente!');
        }

        setPostagens(prevPostagens => [
            ...prevPostagens,
            { autor, titulo, conteudo, imagem, id: prevPostagens.length + 1 }
        ]);
    };

    return (
        <PostagensContext.Provider value={{ postagens, adicionarPostagem }}>
            {children}
        </PostagensContext.Provider>
    );
}
