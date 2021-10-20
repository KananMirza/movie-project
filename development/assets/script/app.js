import header from './header.js';

function getdataText(){
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=92d9b5ed56e1b3fa6560470920e30f22')
    .then(response => response.json())
    .then(json =>{
        let movie = '';
        for(let i=0;i<=11;i++){
            movie +=`<a href="" class="trending__link">
            <div class="trending__item">
            <img src="https://i.pinimg.com/236x/8d/36/a6/8d36a6e0c7a6fb251682b3f0e1856a03.jpg" alt="" class="trending__image">
            <div class="trending__about">
            <p class="trending__subtitle">${json.results[i].original_title}</p>
            <p class="trending__date"> ${json.results[i].release_date}
            </div>
            </div>`
          }
          console.log(json.results)
        document.getElementsByClassName("trending__list")[0].innerHTML = movie
        
    })
    
    }






    getdataText();