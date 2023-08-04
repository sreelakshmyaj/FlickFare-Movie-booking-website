const movies = document.querySelectorAll(".movie-container");
const info = [
    {
        "img": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/elemental-et00356210-1680175819.jpg",
        "title": "Elemental",
        "date": "June 23",
        "rating": "8.8",
        "duration": "201",
        "genre": "Adventure, Animation, Comedy",
        "cert": "U",
        "video": "https://www.youtube.com/watch?v=hXzcyx9V0xw",
    },
    {
        "img": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/barbie-et00072466-1688969871.jpg",
        "title": "Barbie",
        "date": "July 21",
        "rating": "7.7",
        "duration": "114",
        "genre": "Adventure, Comedy, Fantasy",
        "cert": "UA",
        "video": "https://www.youtube.com/watch?v=pBk4NYhWNMM",
    },
    {
        "img": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/oppenheimer-et00347867-1683533414.jpg",
        "title": "Oppenheimer",
        "date": "July 21",
        "rating": "8.8",
        "duration": "190",
        "genre": "Biography, Drama, Historical",
        "cert": "UA",
        "video": "https://www.youtube.com/watch?v=uYPbbksJxIg&t=1s",
    },
    
    {
        "img": "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-dark-knight-et00001549-17-03-2021-06-39-49.jpg",
        "title": "The Dark Knight",
        "date": "July 18",
        "rating": "8.9",
        "duration": "144",
        "genre": "Action, Sci-Fi, Thriller",
        "cert": "UA",
        "video": "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    },
    
    {
        "img": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man-across-the-spider-verse-et00347275-1684425314.jpg",
        "title": "Spider-Man: Across the Spider-Verse",
        "date": "June 1",
        "rating": "9.3",
        "duration": "140",
        "genre": "Action, Adventure, Animation",
        "cert": "UA",
        "video": "https://www.youtube.com/watch?v=cqGjhVJWtEg",
    },
    
    {
        "img": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/john-wick-chapter-4-et00311714-1679379542.jpg",
        "title": "John Wick: Chapter 4",
        "date": "March 24",
        "rating": "9.0",
        "duration": "171",
        "genre": "Action, Thriller",
        "cert": "A",
        "video": "https://www.youtube.com/watch?v=yjRHZEUamCc",
    },
    
    {
        "img": "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-super-mario-bros-movie-et00343051-1686571962.jpg",
        "title": "The Super Mario Bros",
        "date": "April 7",
        "rating": "8.6",
        "duration": "92",
        "genre": "Adventure, Animation, Comedy, Family",
        "cert": "U",
        "video": "https://www.youtube.com/watch?v=TnGl01FkMMo",
    },
    
    {
        "img": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/mission-impossible-dead-reckoning--part-one-et00329481-1688284554.jpg",
        "title": "Mission Impossible: Dead Reckoning",
        "date": "July 12",
        "rating": "9.1",
        "duration": "165",
        "genre": "Action, Adventure, Thriller",
        "cert": "UA",
        "video": "https://www.youtube.com/watch?v=avz06PDqDbM",
    },
    {
        "img": "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-flash-et00047401-1689833276.jpg",
        "title": "The Flash",
        "date": "July 15",
        "rating": "6.9",
        "duration": "144",
        "genre": "Action, Adventure, Fantast",
        "cert": "UA",
        "video": "https://www.youtube.com/watch?v=hebWYacbdvc",
    },
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
