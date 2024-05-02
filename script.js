document.addEventListener("DOMContentLoaded", function() {
    fetch('content.json')
        .then(response => response.json())
        .then(data => {
            const maincontainer = document.getElementById("maincontainer");
            data.forEach(item => {
                const img = document.createElement("img");
                img.src = item.imagem;
                img.alt = item.nome;
                img.classList.add("frontpageimg");

                maincontainer.appendChild(img);
            });
        })
        .catch(error => {
            console.error("Ocorreu um erro ao carregar o conteúdo:", error);
        });
});