let albumArt = document.querySelector('.album-art-container')
let info = document.querySelector('.album-info')
//put images of albums on the screen
fetch('https://lit-fortress-6467.herokuapp.com/object')
  .then(function(data) {
    return data.json()
  }).then(function(results) {
    let ultimatePlaylist = [];
    for (let i = 0; i < results.results.length; i++) {
      let newImg = document.createElement('img')
      newImg.setAttribute('src', `./images/${results.results[i].cover_art}`);
      newImg.setAttribute('class', `album-art ${i}`)
      newImg.addEventListener('click', putInMiddle)
      albumArt.appendChild(newImg)

      function putInMiddle() {
        let albumInfo = document.createElement('p');
        albumInfo.innerText = `${results.results[i].artist}: ${results.results[i].title}`;
        info.appendChild(albumInfo)

        ultimatePlaylist.push(`${results.results[i].artist}: ${results.results[i].title}`)
      }
    }
//make the clear button work and submit the post request
let clearTracks = document.getElementById("clear-tracks");
let submitBin = document.getElementById("submit-bin");
clearTracks.addEventListener("click", e => {
  document.querySelector(".album--art-container").innerHTML = "";
});
submitBin.addEventListener("click", e => {
  if (playlist) {
    axios
      .post("https://lit-fortress-6467.herokuapp.com/post", playlist)
      .then(response => {
        console.log(response.data);
        document.querySelector(".album--art-container").innerHTML = "";
      })
      .catch(err => {
        console.log(err.message);
      });
  }
});
console.log(playlist);
});
