let albumArt = document.querySelector('.album-art-container')
let info = document.querySelector('.album-info')

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
//make the clear button work
    let clearButton = document.querySelector('.clear-tracks')
    clearButton.addEventListener('click', function() {
      info.innerText = '';
      ultiamtePlaylist = []
    });
//submit the info and get the post request
    let submitButton = document.querySelector('.submit-bin')
    submitButton.addEventListener('click', function(){
      let httpRequest = new XMLHttpRequest()
      httpRequest.open('POST', 'https://lit-fortress-6467.herokuapp.com/post', true);
      httpRequest.send(ultimatePlaylist);
      httpRequest.onreadystatechange = function()
        {
            if (httpRequest.readyState == 4)
              if (httpRequest.status == 200)
                console.log(httpRequest)
        };
    })
});
