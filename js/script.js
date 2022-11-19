function aparacerPoke() {

    const ash = $('#ash');
    ash.animate({
        width: "20%",
        opacity: 0.5,
        marginLeft: "0.6in",

    }, 3000);


    const pokeball = $('#pokeball');
    pokeball.animate({
        width: "20%",
        opacity: 0.5,
        marginLeft: "0.6in",

    }, 3000);

    const titulo = $('#titulo');
    titulo.animate({
        opacity: 0.5,
    }, 2000);

    const texto = $('#texto');
    texto.animate({
        opacity: 0.5,
    }, 2000);

    const num = $('#num');
    num.animate({
        opacity: 0.5,
    }, 2000);

    const btn = $('#btn');
    btn.animate({
        opacity: 0.5,
    }, 2000);

    const poke = $('#poke');
    poke.animate({
        width: "16%",
    
    }, 3000);

    const nomePoke = $('#nomePoke');
    nomePoke.animate({
        fontSize: "60px",
    }, 3000);


    let numPoke = document.getElementById("num").value;

    fetch('https://pokeapi.co/api/v2/pokemon/' + numPoke)
        .then(response => response.json())
        .then(data => {
            console.table(data);
            document.getElementById('nomePoke').innerText = data.name;
            document.getElementById('poke').src = data.sprites.front_default;
        });


}

