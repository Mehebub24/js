//maps
const map = new Map()
map.set("USA", "United States of America")
map.set("IN", "India")
map.set("FR", "France")

//console.log(map);

for (const [key , value] of map) {
    console.log(key,":-",value);
}