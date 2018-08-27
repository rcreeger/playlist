let firstAlbum = document.getElementById('one')
let secondAlbum = document.getElementById('two')
let thirdAlbum = document.getElementById('three')

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//randomize the album photos
fetch('https://lit-fortress-6467.herokuapp.com/object')
  .then(function(data) {
    return data.json()
  }).then(function(results) {
    let randomAlbum1 = getRandom(0,4)
    let randomAlbum2 = getRandom(0,4)
    let randomAlbum3 = getRandom(0,4)

    firstAlbum.setAttribute('src', `./images/${results.results[randomAlbum1].cover_art}`)

    if (randomAlbum2 !== randomAlbum1) {
      secondAlbum.setAttribute('src', `./images/${results.results[randomAlbum2].cover_art}`)
    }else {
      for(let i=0; i<5; i++){
        if(randomAlbum1 !== i){
          randomAlbum2 = i;
          secondAlbum.setAttribute('src', `./images/${results.results[randomAlbum2].cover_art}`)
        }
      }
    }
    if(randomAlbum3 !== randomAlbum2 && randomAlbum3 !== randomAlbum1) {
      thirdAlbum.setAttribute('src', `./images/${results.results[randomAlbum3].cover_art}`)
    }else {
      for(let j=0; j<5; j++){
        if(randomAlbum1 !== j && randomAlbum2 !== j){
          randomAlbum3 = j
          thirdlbum.setAttribute('src', `./images/${results.results[randomAlbum3].cover_art}`)
        }
      }
    }
  })
