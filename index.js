const message = document.querySelector('aside')

console.log('hello world')
const addMovie = (event) =>{
    event.preventDefault();
    const inputField = document.querySelector('input');
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value ;
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);
    document.querySelector('ul').appendChild(movie);
    inputField = ('');
}

document.querySelector('form').addEventListener('submit', addMovie);

const deleteMovie = (event) => {
    event.target.parentNode.remove();
    message.textContent = "Movie deleted!"
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked');
    if(event.target.classList.contains('checked')){
        message.textContent = "Movie Watched"
    }
    else {message.textContent = "Movie added back!"
}
} 























