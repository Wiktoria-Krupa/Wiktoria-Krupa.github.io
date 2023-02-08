import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context 667*375
kaboom();


// wczytywanie obrazkow

loadSprite("tlo","mlodyjezyk.png")
loadSprite("ozdoba","jabko.png")
loadSound("muzyka","anioł pasterzom mówił.mp3")

// add a piece of text at position (120, 80)

add([
    text("hello"),
    pos(120, 80),
]);

add ([
    sprite("tlo"),
    pos(0,0)
])


 
const ozdoba = add ([
    sprite("ozdoba"),
    pos(270,140)
])




onUpdate(()=>{

 if (ozdoba.pos.x<600 && ozdoba.pos.y<300)
{
    ozdoba.pos.x=ozdoba.pos.x+1
    ozdoba.pos.y=ozdoba.pos.y+1
}
    else destroy (ozdoba)
})

onKeyPress("space", ()=> {
    play("muzyka")
})




