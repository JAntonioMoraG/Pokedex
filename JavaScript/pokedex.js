const fetchPokemon=()=>{
    //Obtencion de datos de la pagina
    const nameInput=document.getElementById("name");
    pokename=nameInput.value;
    pokename=pokename.toLowerCase();
    //url de la API
    const url="https://pokeapi.co/api/v2/pokemon/"+pokename;
    fetch(url).then((res) => {
        if(res.status != "200"){
            pokeImage("./Images/error.jpg")
            pokeName("")
            pokeId("")
            pokeType("")
            pokeMoves("");
            pokeStats("");
        }
        else{
            return res.json();
        }
    }).then((data) => {
        if (data) {
            let namepokemon= data.species.name;
            let idpokemon=data.id;
            let pokeImg = data.sprites.front_default;
            let typepokemon= data.types[0].type.name;
            let numeromovimientos=Number(Object.keys(data.moves).length-1);
            var cadenamovimientos="";
            var cadenaestadisticas="";
            for(let i=0;i<=numeromovimientos;i++){
                let movespokemon=data.moves[i].move.name;    
                cadenamovimientos=cadenamovimientos+movespokemon+", ";
                if(i>1){
                    if(i%3==0){
                        cadenamovimientos=cadenamovimientos+"<br>";
                    }
                }
                
                
            }
            for(let i=0;i<6;i++){
                let statspokemon=data.stats[i].stat.name;
                cadenaestadisticas=cadenaestadisticas+statspokemon+":";
                let statsnumber=data.stats[i].base_stat;
                cadenaestadisticas=cadenaestadisticas+" "+statsnumber+"<br>";
            }
            pokeImage(pokeImg);
            pokeName(namepokemon);
            pokeId(idpokemon);
            pokeType(typepokemon);
            pokeMoves(cadenamovimientos);
            pokeStats(cadenaestadisticas);
            
        }
    });
}
const pokeImage=(url)=>{
    const imagen=document.getElementById("pokeImg");
    imagen.src=url;
}
const pokeName=(url)=>{
    const nombre=document.getElementById("pokeName");
    nombre.innerHTML=url;
}
const pokeId=(url)=>{
    const id=document.getElementById("pokeId");
    id.innerHTML=url;
}
const pokeType=(url)=>{
    const tipo=document.getElementById("pokeType");
    tipo.innerHTML=url;
}
const pokeMoves=(url)=>{
    const movimientos=document.getElementById("pokeMoves");
    movimientos.innerHTML=url;
}
const pokeStats=(url)=>{
    const estadisticas=document.getElementById("pokeStats");
    estadisticas.innerHTML=url;
}