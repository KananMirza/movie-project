import header from './header.js';

function getdataText(){
     fetch('https://api.themoviedb.org/3/movie/popular?api_key=92d9b5ed56e1b3fa6560470920e30f22')
    .then(response=>{
        console.log(response.text())
    })
    }

    getdataText();