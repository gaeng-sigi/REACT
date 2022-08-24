import { useState, useEffect } from "react";
import Movie from "./components/Movie";
import "./MovieApp.css";

export default function MovieApp() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const url =
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";
        const json = await (await fetch(url)).json(); //통신
        setMovies(json.data.movies); // 영화 정보를 movies 배열에 넣음.
        setLoading(false); // 통신이 성공하면 loading이 false가 된다.
    };

    useEffect(() => {
        getMovies();
    });

    return (
        <div className="movieList">
        {loading ? ( // 통신성공 여부
            <h1> Loading... </h1> // loading = false
        ) : (
            // loading = true , 아래 내용 출력
            <ul>
            {movies.map(
                (
                movie // movies 반복문
                ) => (
                <Movie data={movie} />
                // './components/Movie' 에 movie를 data라는 이름으로 보내줌
                )
            )}
            </ul>
        )}
        </div>
    );
}
