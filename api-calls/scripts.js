async function getData() {
  const res = await fetch("https://ghibliapi.herokuapp.com/films")
  const data = await res.json();
  return data;
}

// whenever you receive data from an async function you have to write await
async function displayMovieTitle() {
  let data = await getData();
  const logo = document.createElement("img");
  logo.src = "https://github.com/taniarascia/sandbox/blob/master/ghibli/logo.png?raw=true";
  
  data.forEach(movie => {
    //console.log(movie.title);
    //console.log(movie.description);
    
    const h1 = document.createElement('h1');
    h1.textContent = movie.title;
    /*
    selects element by their id and puts it into the div id title tag
    document.getElementById("title").appendChild(h1);
    */
    document.body.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = `${movie.description}...`;
    document.body.appendChild(p);
  });
}

displayMovieTitle();



