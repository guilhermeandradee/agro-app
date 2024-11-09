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
            id: 1,
            imagemAvatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAgVBMVEUAAAD+AFgQAQXhAEzAAkLIAkSPATHQAkf/AFbnAVD/AVl5ACoCAAEAAgEaAQkGAAJ/ACz5AFXuAVFoACMNAARjASIUAAeeATa3Aj+GAjCtAjyWATQkAg0gAgw5AhWnAjpwASZIBBs1ARJXAh8rAhBNAhvbA0xVAR4wAhJBARfNAUZruUYmAAAEB0lEQVR4nO3Z2WKiMBQGYE5dOEaCggtabdW2OnXe/wEngAtLElDolIv/u2itjcDPCTEBxwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4DfLHt+EZWsiW9n7Zi2fdlrz8tDSSVTGkF2+g1Eq9ofad/LMVrsVf108bzV13ZdnGmmkwMf5Xvo50eu5qs9iqGF47QZgEmb0lbbwXop55E+9qC7w2B+mTbh8ifpN35hPwaBBBQ7OXtNEL24K8UhBQ8G78f59747LpZtVjonDfUhB1bqobWStyINotSLwaG/RpYProiARHycvGHaxpELkNKfhwVhR8mg7GHMTx9gHzuJXRq3FFhoLUkZyZ+E3qRzBDkLTtVvXKudNClKZBvkLqx7+HRENDE0tFlDGxbUSsrWGQyYj4KOMT6lLg68+rJYhqP1e13NY7VquGQfbMu/Q7bSH4tNS2sVZEOkPmP9WHUOn5IMnZ79Hp+veARHrZFstiC6LGh2+mfa1DtWtUkcmOaHYdq/we9Za6zlVREdW3pjUOtEqjIEdBp9uYK8dCXfeaIdh+scsJi+lvj1p9GmWu0+WJha63V1Qk7Vq/GUSOWeSmWH4g/mo+ba+IM2Vq+2I3ThP0QT4C6vnZcymHTJrJozFIsr9lSOzXPVqLfEWuUQqFLgeJG+4Efedb+uo74aO0C+s3uxrAaScNc4JHmLpWrjraihwCijIHlDgGXJ48WoOcR0lZW7xGlqwm1ZyuFbhQ7EKQeKfeUk33vnInMl7zvRIfirswdi21PDyqPe6tK9C6bkF8zi57/MqKqGXhrLzufg84LE44zNfIOVJTxnU7a6t7RfpZy9zhlYPIeUgrrzw8qJGMi5PHbJD7ZufndRgXf9EwwFXmGjHXtxREzgdEZ91HPN9/KbyVDbIOL4Kk8GH03daNFN3FHt8QsFdEqiVhZNqkba41vHZgtWTncDzRtX9OPohhm4UgnjNxya3dtbNB3mcXi8/zm2WPj8sFMW21OGrJiGghtfe7NF8IuYtdZl94PxXEpNi1Dkz9ee1dVMy1WvJgkHS/KwprdCx5qVjFXKslz1RkQfH9BovZdJwZmDsaRDpbptDaseSasmuljgZxnA2F5tuKCbVYzNx57GqQLYuN/RJNFkv3yWNHgyxPVJpNFaiYEQW31VJHg4yJj5VPReQ2nnhe/uhmENX9k05jv+ksndn9zmM3gwxIVFzpTrLQkCsR+LK73yOftkc6OWciN50HdykI8yWIy7r7JFob5n3yInKj9h56Nvb8ocjMz59T6xmxLExaH9n69WFnV2ryRJDrOWrtAXTr6j/uuz3E72oUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/+wfW34o56ZTW7cAAAAASUVORK5CYII='
        }, 
        {
            autor: 'Guilherme Andrade',
            titulo: 'Horta Vertical Usando Palets de Madeira e Galões de Plástico',
            conteudo: 'Aprenda a criar uma horta vertical em casa, utilizando materiais recicláveis como palets de madeira e galões de plástico. Este projeto sustentável é ideal para quem vive em ambientes urbanos e deseja cultivar seus próprios alimentos. Além de ser uma opção ecologicamente correta, ajuda a melhorar a qualidade do ar e a reduzir o desperdício.',
            imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Bp9VM9ZLPvhC5zRFO_AbfAkxiBcXnsaLGQ&s',
            id: 2,
            imagemAvatar: 'https://media.istockphoto.com/id/1364917563/pt/foto/businessman-smiling-with-arms-crossed-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=r_8Lomp1Zu5spWoh3oJpW6gM_uFG4oEHMS7FHv81RCI='
        }, 
        {
            autor: 'João Vitor',
            titulo: 'Técnicas para um Melhor Cultivo do Milho',
            conteudo: 'Descubra as melhores práticas para o cultivo de milho, incluindo técnicas de plantio, cuidados com o solo, e estratégias de irrigação. Este guia é perfeito para produtores que desejam maximizar o rendimento da colheita, minimizar pragas e doenças, e garantir a sustentabilidade da produção. O milho é um dos cereais mais cultivados do mundo, e aplicar essas técnicas pode transformar sua produtividade.',
            imagem: '',
            id: 3,
            imagemAvatar: 'https://media.istockphoto.com/id/1464048328/pt/foto/business-man-looking-outside-the-window-in-an-office.jpg?b=1&s=612x612&w=0&k=20&c=PuMv5vVEJnH-IzILIDw6vHow1635duDbeRPhQB92OnU='
        },
        {
            autor: 'Fazendeiro agrotech',
            titulo: 'Novas Atualizações para um Futuro Mais Verde',
            conteudo: 'Com nossas novas funcionalidades, estamos promovendo uma revolução verde na agricultura. As atualizações permitem que agricultores gerenciem de forma mais eficiente o uso de recursos naturais, como água e nutrientes, além de monitorar as condições climáticas em tempo real. Essas melhorias visam apoiar práticas agrícolas mais sustentáveis e ajudar a preservar o meio ambiente para as gerações futuras.',
            imagem: '',
            id: 4,
            imagemAvatar: 'https://images.pexels.com/photos/163752/harvest-grain-combine-arable-farming-163752.jpeg?auto=compress&cs=tinysrgb&w=600'
        }, 
        {
            autor: 'Seu lobato',
            titulo: 'Cultivando Hortas Verticais em Pequenos Espaços',
            conteudo: 'Para quem tem pouco espaço, mas quer cultivar sua própria horta, as hortas verticais são uma excelente solução. Utilizando materiais recicláveis e técnicas de cultivo vertical, é possível plantar uma grande variedade de hortaliças e temperos em varandas ou pequenos quintais. Neste guia, explicamos tudo o que você precisa saber para começar sua horta vertical em casa.',
            imagem: '',
            id: 5,
            imagemAvatar: 'https://images.pexels.com/photos/45852/farmer-smile-man-person-45852.jpeg?auto=compress&cs=tinysrgb&w=600'
        }, 
        {
            autor: 'Elon Musk',
            titulo: 'Inovações no Cultivo de Milho para um Futuro Sustentável',
            conteudo: 'Com o avanço da tecnologia, o cultivo de milho está se tornando mais eficiente e sustentável. Este artigo aborda as últimas inovações em genética, manejo do solo e técnicas de cultivo que estão revolucionando a produção agrícola. Além disso, exploramos como práticas sustentáveis podem ajudar a mitigar o impacto ambiental, preservando os recursos para o futuro.',
            imagem: '',
            id: 6,
            imagemAvatar: 'data:image/webp;base64,UklGRsgUAABXRUJQVlA4ILwUAAAQegCdASo4ATgBPoFAm0olI6kmotHqGSAQCWduz2fsae8zfcoI5bK9lP7q2m/f+Ifn6+ozOLj/uinT/tvFXba4G/uOI5/H/5/pp9l/+fslFAL+gf5D1jP9vzCai36+db0drdHtU84e7u7u7u7u8TjN861CcD3iMFGtrWceYWipiQEhEdcEdOpBYrhgvf9BnntAtF5F4GX6n3hz4AN1jWJw0kyibOLilKUf4WPqNVnYnp2gCfznhCndsf4osAcmqlrUl8p0KIpC6wk0YZ94QQXYY6KNn4cIzuKXlcthy8C0lvGyDVG7fe+CBQTe/qjtYFKjSFN3AV9AXnS81Cn4SodQdxUgoO47j5LiD4nFWn0prk7vos4LT7oAR9/m3bLTIlseZhHMm3RaaY8tn5PWl2KL31eqPmTHDRkVuT9BqfYYcAH454q/dCpF+bvMQA2+T9u2XBZPDfAieXIySNwCM7QOXexjVAqEHfAbvBu8up/1aTG2mrGzN4WjDC5E1l7VrsogGEIngJQPWqEOIJr323TAw2FYfnQwcqQ7hbJgvRHqmHvcfJrMtnzLbB1zG569i2Bc8AbGmBhxzJYXGq3CTZY53r7ISFv5E1wn9hoQgS6aXXisgsVNdq2LmYnIeNM1iWRSyPQl7/GGAaUFrZQWW/jYus5rExBOFo/yx8rp6GS40JDBSOw3j9Ny2w2DsRGt33ebbMaf72YTBXnw+OuJVk7+mVuKvGYA1kCBk9jfGUHkcd+S//xg3gIw2krHhaxoY8ZlsnhJ6YosI0dMRca5pCQTraicui8n8c3725PV9MTPpokveIgwH2VxxIN2INQ8dGHl9Fl6t36JD3UF9M3ae0v74mJZLTlN4GNxu4tVGv+GTHuOoAiTFy1wXv3fEBhImHqSNzENE03ihtjkBP2pSjgJPxJebKMgF4ddMakS7LkkdhOy6D/6yMT2g+zbScgKHHsii7nc2vHsA6ukb0WrgOeR/NxvBLt93o3Eh3G++VSCFo1FBM4KrCi50ljXKarlXXHb0VxDv3IJRY9GClkvFlSREcUqSDdTTSH82xuhwWaloLOrKDooF76yPqS42LTxZBoHZ4Hp6uil2YSXBOm1id69DY4NA+Lxz4ldlvl2bwE6Q55eB5KA8PfXfLFrREuxC9mxmnysO5r79cE+yQSJxIiuCZOgOlk9+CydRoWaAp15fsLxB0j7gmlY+G4tGcI/XbUUrIqgygx1PN4ucUA607XJNxUQpyxdUw4Uq5W0COF0f68vBnvAKS4L/EysiN1XM7ZCam6pIwbwl6gaAd0tr6dwM/555+sQnFUAAP7w00Fa3L6eaEGNv9/RmZbmENDgGOOFs5fqFlrKDdcuovkbPLCmiIndIGEJxa1FGyJWaNmzPBg5bdNpfbzTFsChpLMZLDD5ZCSIuknmzEyFEeqjTNl5zhxdKihM9ODVoYjACFxaPwJogWmPEbcX+WshmO0FRZUdjfLMQ5Uf+0NLeGzsJav6sQyaSxGB6rg1hR9ulwTzVfdWk7gQeVlzsxseHga0O2U93UA2ZRPy7KC84F57ci1zR3PuEarKPdCt+J5y8GH/Xsxg9xLrMy9s2breSdyGMC9F1QQLVFvH7dfo6BK8tUyUsxdPYWkr6xhJQSygV2lQtO6NgSbmKFXacGDcynZaNbPmDKlfxu0HvX9iEyqmVx3Lg4IxOXPurDvz3fSG92WW3dYNrLhUbJilsYGK6qPOQ1R5jc5b6SVnEBH3QeWM/EhYpCkmXgPnymF+gfbmcqL8l9/Wga0+0+Zze3mwxKlBZPjtgSUDeilttkOFDcRI7ZkkBifAa6aEnAqwXQ+9rEfAu1j9ITi9jS4CiYgg6kW2gfFfX3Rv3sYMYTBaZIPs5ka/SBbEGzDHLwfd6OGW0oeSP1lFSqoArIN26NWX01vAwcdPqAKfyGQbFg/0OHME5NBFrCrVoEx58XDTMEkKCvDPAj3l7tlhQWQOVr0wVjlGAXBvOR2xnP2OC5COGirXgyljJ1LeFARUklTIii7QScZ9iscIG6nfXo44/x+l8YZO7dSJtKRQTx2WwJp1NpieVfCKwcEfOrD0Yryuw/wqqA1/Drria3d2sHXjje0YEfPdwVODUf111H7FWNLUmqY9ZvTO74Kepajz9sdzhrqoSO5VwYTtZ57fiDEjDv15rWiE7XzxTxAFsQYjbHX3zhvqn3W1HbhVr8Ar3IZEJ/dBGnxhb+rIWzSxuVj+cDDHKcSfS+/TI25rF+1XisQEDsG/+gXa6J/dopartkFlvIpdm8D4PJyGh6LuDYsak4PzpvHIHQINHgaZipKQaXQOOHEXOWaWe7JCkAfUk9CdOi+eEUwGMeUCocpnrzWyoNTUPtIiXxKLfwebV3qVjqAXbGdZWUip8FBE2IeeExIm6G79SupucSfrj875i+sueV7CdlDjmZjik0A2wK9UIrqtfO4PvxrnjebJxo609ZQgJ7EH9il+0UsD4s2nsKj3OB4O1GkPyOaZtjUx0pwm+U047vWuxD/8By0huG85J4B0DT7qGUMOiXEKiTA5oXOQZt6L+lJ7QIyxuzUI4fhJRi8Nr3hJx8c1hu1N2/N9esnEoidcCXh8hgbbia0v++mxoy4ULg4fAh8CWkof3mC9WZiK2k6fLLRyWiN3YIqXv0yr590S5vDS1saqGDVwMjwfZ+IApp66xivNjFSZVQk+8+8wq9Y7gV0FwB4TW+fgsqjKXub7FJ/eSzyoP8fdDfgOUS+6rXZsHtBB6+6g54aMjAJDbZ0k7ZVbTYKD2bRByISgibOcXZwKc0Q5SBRcUV6mhZlSNcIZDV3hDKaVpSKiyhT5Qd3cxd4a4SCQzYHKynU9MWOmNW+00Q3pru6uKaJD2bBct7gb8XD05ZI0khJL1MqwNlpWUgbu+r9vWTPf6uFwU+zQraauPjWz2OuS7imr9bep+JxK/Gx56c+6a9daxCHAaD5qmXEXu4esiEmx5cAo9QXW6W+Os7uHoijdnZv0ulQl4mJSn+rZa4kQN5V6m2cwXcTwyighcttTlZqsZWaCj7wLwMTNuA/udgtS1MovCFE0xibOdLAvmcGdIcSrfhQ9noSlA0JOmNXF6NW5mUHnCpQXeVCBhTxTXeinzZzzUyFj2SRClnbRCQ6guRl2Rk+1frNRDGNP4vxyE1qVQLEAJU6IjupNMfMk+NSNWvuvf3PHyZnJYXKmshxSYSeJQ1zkzbOeviydYA+l8trqB4KGlYlBeus2DmoOSExpY0QHFRJE/5+Hx98nUGvuz1S6tWZhF/685FU6c7jMYPH1mZ7tAEoiuiJ6yMW9R44za+smi15ynFW2v+TAa7MRDTMwI3XOZOkEnWoWDFUogFGtJZrk7ZSwcf7qJLu25XX4qBRQYZ3UPBurfd1qyekzqLw9AN2hKx5GVNCGVVRnZQRBznhWq0zg8rJQhqABe2EHwnO2ai0QMdwa/QhT4T+xSZnFppZKDx5lFyPe0i6/UeiE+MMUMyGnPH9C2W3wbmiCwgYF1jSymVt7vY2RMhbJCUFLNYpnux3VotLmnfbP+tXz1/WsWEncqpGzFk6VMVtOTV1Qf8O/dTj9AyN89NXvpFyzqYDNKsUO73UafPFaNO9I7bDP8RlppSjBm5/XX00ohcHnMbs/1eVibSBH82N6HtY6VcvwKqj+megYOajVgvWBk6eIdlDP8xTi785YCkXBbAtoymL1rcTPLhpdoAtw7v1loi5xa399+HlPs7rOvGQZUBNbX2eMOMneopibjZv128id0MttZaIMbp9uLUApBQ2mIsz3pl3zUxI80AwM0rD8f0LzvCqynxwJIYNujusHa2rkOI9Mh6a+vaCuOFcKM6cghqcr+Dk5ezdTdbJedkIXLUkdzYIh/HZxnifAHFL6gGq07zRm4ErKJ/ODBrBAfLjmGsXDfLG6GJqxEC1a3n4pA5MJS0y9fefhMc3vo2F/5GpDNBuffdzkb1jCpZ82ToUXfTqhlKONbq7JTzkOcfCtnmmcYHUbjlSalSaeKpcr6oZUE4E/q8wOOH3XdyUA1+LUlmMYzdMcEy0w3ia8kpXBRtvi4RNosBztp44QpSCQJFC+5MuB8GlpVHgpqdcZShwgU7PM7wPA1ysU7yiSzy4h4NxjDe69b68p79rz5SGJbT6LzSqeSLGvbc+7Oyv0qVrlKKk3m+DQTOdb0Lzfr5yBHLmnOqNfutsWv7lxUK/olQBrUQCsA4lz+txNcNjsGbjW+KExoEFUq+bYr1IcpPwrjr+CDq/fzUyKOBOTwaLoBJjV4xRumlIMKAE32DSFU6uCstRBxLOs+jS93rZQ3vNX9tmPpJ4R88Z/sE12CWrIeX89y++8NgckNuJio60T4UH8iOa9Gt7FVfCTemMIZUyeRp9g5PsaEzEza5kTEOqY1/GOszVATjTbCVkh1JEuLztLBLHf7YTbxNOVwKXdydfU6g/tOYZ91BKs6KxJiaLgAL0cHgi+YF2h6hOemuSegvIpvkNf3fNPXoUqnjI1hsAvsr31d8MQc3Y/bqejseeO59OPmn4vvO8D6e6tjAWdvyfmPrM/sZjI1NbvgYwlrCoOh/ahzhUL2OBbk17vN3TYSVDrdMYe5vrMFt6zfMutR59F0oVZURBOUKCvPodNYrt8Pm2MWF6+VM+w7teKKnarauK6v92N5zAiedCn3Dp2Iy5fZ34TBYqOGkLHgcTl3t4QOzqimVZiRLRMA4tZQXFKfE41oGXsxL2FjkY2i55pKcria5igB20P42jegY4XsiSYni8if0SwWPghL2lafUyp88ylhsPwRt50bwW0eeJ/98lHCgGlj/FOFJIp2eYVMg/Od804a4eOUT2fAm32nUWkKIXKeXwfKe4phMD2ifN2CTzn974i6+v/GzrAtxPnOEirunQnbsjjLRMBjLtm6BPl92lYNVhzTJQkFQCJ/v/MS8ayoFcLyVsmjWqz/00zpsbYttg3hMpXxfd/tqie2sL2VVa9/Pixkj2BRM9k47f7/fzEBKZmTuzlqRBzi+7cIkhUsR9QzYA0a1akyb9jzQHxVYJ4EE45pAwQhYhNuI76wKNNilfPWnn0onuTc4U+oppPjy0esoYOEhyG/ItpFiY4zRJhW5KUADq3+ba8i1VsDkWxf6WAe9mAifboHSMzFj4JudH8pWC1TYKIMBO88O8eEEJA7+YpzreVQjCybKHHZ0hEa64DYuQeZOjjIK7McSOPZjHDbGjWbiTVUljkKoGAtSItIWgGWXRC0k8dRf+awm+zgI3iG0MlHnOSZMZvLvwdMdbn3xw9Zw667nUAx6+GUAzf3zlaFSV31mAAIBhk2gNeYJ4t3ZXQ2eNJfoMX/QMCmYN1BPic733skKEDOM7LhgMObBSaxhbZgUY6a5la6v0o/MQvNp4/vqPYPFiRKe7naiOK8X4IL2lcwgQ5f0SyDRYIi29hzY2CAvOxNOTexGqvoGryy471d4A+LaqAYorygWSMMgkPXbIddaCXLrcQn91L7cMal/qcli+FHKpuswVtmEmGfGDDqYEvFPvnq1TmS+/CLQaPf5W+cpCg/qtPalg+bYEoCmmhdVaGhQpZc9eAvkHhYKA+8rVhDxhvy+RFZ8Ujf/FE8OHJP3hCJkGSg9SqX/eFzsDnZxsBxdjGt/ijs+FOaCQOi9OicF7QzrOvVl4keVdHOXP/UtHHct6/MT4DhykMCQJVqVxYl7MSEYaT8EiHbRfidtfEzQ+LLOCUZ0NIntKsaIZwaZRkROJPEaGDcRzK5lbI2WcRT1YJd3r0ab5Y5LRV6BFaKc1gtBt51vLtfsyqKx6g/ZUwX1iFfoYmjULRRhP9gMfHGI96iGFv4F/UAtnDZd6HNoEOT/qx0qAevlHA/LXnCTvLJpumPoaZfkx9NiO0XDHmOw565hD4OARXDtJWzkX0OyAjGgI6jz/Wa2D12UiH9MH5+4OQM6XoePLf6CxWWLxy5VmEyMQoD514qccbfVsVMss3xib8wH13wf1tDxPopQNvsDq2OqCNm885J9bt+R6xuH0+DplET5EDKnsKXx8bhzsCCYp9/NFPJcLtKwlW5+U50FQh88xQaYs1X1ul/CFMJsuoOgEfoxROI9CJVLH+OwOrk+CTRimA8xBBNKvM1S33ywwYEvhiQ0HcoQjNEnFmp0OZUsjM2RbeknXThpTZjz6anYrCkkNnGK09XBACqeI6eM9i1jm6KIVUWC4dtpFAwpHhkGWbP392a91Sugr6MTvZpjyTOXkCj7F1k5rUXpzkEh/ZVv1K71JorWl+2wkN6GSWJIPecKywsE4V/L3+GKKWIR3hFsRFn448VulhgnThwFod6ltJQTVe8VeCSDBqNOI54Kk8I5jkv74bzuOsg0MsFRQ70UhK0DKFd4Y8yM/RZlUpt60mJO4te5AyXnX6I8W5AmWuXAm3artdb05NhRyteqOe4vdOWKedIK5uhjGBv45ZeDC7zw2Ur6FtTkSizpScl3z6xoW0ZzJL4Ali/+WqYPGP5AffKaL2Ok2FKx6nTbvCB1VJW9e2zg69XZLC4NWhR0hZFywLyspwWaq8pbTFQKHUejNrbb3nfvB/3LmeT0/yVuYlFd8cijC43K4msMB88WdUt9D75/E/rv0531/QJiOxJZ7fwTzi5nFVa7ghMiCdWxI/3LSbKfA/Y3EFqHMoy9xA6xGQm9hgtrCzhYyPXYnkiblxDm3J6RvThaaDI8qMjZPK/PY9wcAPgzXgdvmd7iw2Nnnq2yHhYd36JXjicaYOpJ9//SOCPVLZWoZeC8f4LEsyLwljsrJ1q3LZEWwSylpPR7IG+q9/lkXoKsAJrFq8TqtT3P6JlgameSbPDckdILDpEzxHE4/f3fufKXRs8bn6uxwKa/9ZXon9jkHzcWoS8rdwL4H3hDQyvIOrFjQHEw1uByZV5oxpTWBd3P/G4ZguMGQ+69nMw1rOXE8FpPt2YhsfP5yeacTihl/HE3MFnYD4XxgzBu4EqxnFaAvoMrvyJkHO6I9txrgDrcX3mU0W4NKUNhxCJo9TNSLfX/ZVUnNqJLbI3k8YUd8xn7xEvMTGqO6rRZ+jTanYmEXyqLf6H6yoCAAA'
        }
    ])
    
    const adicionarPostagem = (autor, titulo, conteudo, imagem) => {
        if (!autor || !titulo || !conteudo) {
            throw new Error('Preencha as informações corretamente!')
        }

        setPostagens(prevPostagens => [
            ...prevPostagens,
            { autor, titulo, conteudo, imagem, id: prevPostagens.length + 1, imagemAvatar: 'https://media.licdn.com/dms/image/v2/C4D03AQFng8d8K2w2qA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1659192660234?e=1736380800&v=beta&t=pDzmRWoL43jmveUo4hS_Gj6VSDE5jSqQ7ZdjeNUeD5U' }
        ]);
    };

    return (
        <PostagensContext.Provider value={{ postagens, adicionarPostagem }}>
            {children}
        </PostagensContext.Provider>
    );
}
