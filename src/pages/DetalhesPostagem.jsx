const DetalhesPostagem = () => {
    const post = JSON.parse(localStorage.getItem("postagemSelecionada"));

    alert(post.id)
}

export default DetalhesPostagem