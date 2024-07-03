let pokemonList = document.querySelector(".pokemon-list")

const pokemonRender = (arr , list) => {
  arr.forEach(item => {
    let Item = document.createElement("li")
    
    Item.innerHTML = `
    <img src = "${item.img}" alt = "${item.img}">
    <div class = " items-center justify-center" >
        <div class = "mb-2">
           <h2>${item.name}</h2>
           <p>Type:${item.type[0]}</p>
        </div>
        <div class = "flex items-center justify-center gap-[20px]">
           <button class = "p-[5px] rounded-[5px] border-[2px] border-slate-500 ">Like</button>
           <button class = "p-[5px] rounded-[5px] border-[2px] border-slate-500 ">More</button>
        </div>
    </div>
    `
    Item.className = "w-[200px] p-3 border-[1px] border-slate-400 rounded-[5px]   justify-between"
    list.append(Item)

  })
}
pokemonRender(pokemons  , pokemonList);