const movies = document.querySelectorAll(".movie-container");
const info = [
    {
        "img": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/elemental-et00356210-1680175819.jpg",
        "title": "Elemental",
        "date": "June 23",
        "rating": "8.8",
        "duration": "201",
        "genre": "Adventure, Animation, Comedy",
        "cert": "U"
    },
    {
        "img": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/barbie-et00072466-1688969871.jpg",
        "title": "Barbie",
        "date": "July 21",
        "rating": "7.7",
        "duration": "114",
        "genre": "Adventure, Comedy, Fantasy",
        "cert": "UA"
    },
    {
        "img": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/oppenheimer-et00347867-1683533414.jpg",
        "title": "Oppenheimer",
        "date": "July 21",
        "rating": "8.8",
        "duration": "190",
        "genre": "Biography, Drama, Historical",
        "cert": "UA"
    },
    
    {
        "img": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/oppenheimer-et00347867-1683533414.jpg",
        "title": "The Dark Knight",
        "date": "July 18",
        "rating": "8.9",
        "duration": "144",
        "genre": "Action, Sci-Fi, Thriller",
        "cert": "UA"
    }
]

movies.forEach((movie) => {
    movie.addEventListener("click", (e) => {
        const movieTitle = movie.querySelector('p').textContent;
        info.forEach((i) => {
            if(i.title === movieTitle){
                localStorage.setItem('movieInfo', JSON.stringify(i));
            }
        })
        localStorage.setItem('movieTitle', movieTitle);
    })
})
