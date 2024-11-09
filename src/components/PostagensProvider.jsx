// PostagensContext.js
import React, { createContext, useContext, useState } from 'react';

const PostagensContext = createContext();

export const usePostagens = () => useContext(PostagensContext);

export function PostagensProvider({ children }) {
    
    const [postagens, setPostagens] = useState([
        {   
            autor: 'The Future is Now',
            titulo: 'Make the Future Greener With New Updates',
            conteudo: 'Estamos introduzindo novas atualizações focadas na sustentabilidade para agricultores e produtores rurais. Com funcionalidades aprimoradas, agora você pode otimizar o uso de água, melhorar a saúde do solo e monitorar a biodiversidade das suas plantações. Nossa missão é ajudar a construir um futuro mais verde, promovendo práticas agrícolas sustentáveis e tecnologias inovadoras para proteger o planeta.',
            imagem: '',
            id: 1
        }, 
        {
            autor: 'Guilherme Andrade',
            titulo: 'Horta Vertical Usando Palets de Madeira e Galões de Plástico',
            conteudo: 'Aprenda a criar uma horta vertical em casa, utilizando materiais recicláveis como palets de madeira e galões de plástico. Este projeto sustentável é ideal para quem vive em ambientes urbanos e deseja cultivar seus próprios alimentos. Além de ser uma opção ecologicamente correta, ajuda a melhorar a qualidade do ar e a reduzir o desperdício.',
            imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Bp9VM9ZLPvhC5zRFO_AbfAkxiBcXnsaLGQ&s',
            id: 2
        }, 
        {
            autor: 'João Vitor',
            titulo: 'Técnicas para um Melhor Cultivo do Milho',
            conteudo: 'Descubra as melhores práticas para o cultivo de milho, incluindo técnicas de plantio, cuidados com o solo, e estratégias de irrigação. Este guia é perfeito para produtores que desejam maximizar o rendimento da colheita, minimizar pragas e doenças, e garantir a sustentabilidade da produção. O milho é um dos cereais mais cultivados do mundo, e aplicar essas técnicas pode transformar sua produtividade.',
            imagem: '',
            id: 3
        },
        {
            autor: 'Codigo Fonte',
            titulo: 'Novas Atualizações para um Futuro Mais Verde',
            conteudo: 'Com nossas novas funcionalidades, estamos promovendo uma revolução verde na agricultura. As atualizações permitem que agricultores gerenciem de forma mais eficiente o uso de recursos naturais, como água e nutrientes, além de monitorar as condições climáticas em tempo real. Essas melhorias visam apoiar práticas agrícolas mais sustentáveis e ajudar a preservar o meio ambiente para as gerações futuras.',
            imagem: '',
            id: 4
        }, 
        {
            autor: 'FIAP',
            titulo: 'Cultivando Hortas Verticais em Pequenos Espaços',
            conteudo: 'Para quem tem pouco espaço, mas quer cultivar sua própria horta, as hortas verticais são uma excelente solução. Utilizando materiais recicláveis e técnicas de cultivo vertical, é possível plantar uma grande variedade de hortaliças e temperos em varandas ou pequenos quintais. Neste guia, explicamos tudo o que você precisa saber para começar sua horta vertical em casa.',
            imagem: '',
            id: 5
        }, 
        {
            autor: 'Elon Musk',
            titulo: 'Inovações no Cultivo de Milho para um Futuro Sustentável',
            conteudo: 'Com o avanço da tecnologia, o cultivo de milho está se tornando mais eficiente e sustentável. Este artigo aborda as últimas inovações em genética, manejo do solo e técnicas de cultivo que estão revolucionando a produção agrícola. Além disso, exploramos como práticas sustentáveis podem ajudar a mitigar o impacto ambiental, preservando os recursos para o futuro.',
            imagem: '',
            id: 6
        }
    ])
    
    const adicionarPostagem = (autor, titulo, conteudo, imagem) => {
        if (!autor || !titulo || !conteudo) {
            throw new Error('Preencha as informações corretamente!')
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
