import React, { useEffect, useState } from "react";
import { MovieItem } from "../MovieItem/MovieItem";
import "./MovieList.css";
import axios from "axios";

export function MovieList() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const moviesPerPage = 10;

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://www.omdbapi.com/?s=spider&apikey=263d22d8&page=${page}`)
            .then((res) => {
                setMovies(res.data.Search);
                setTotalResults(res.data.totalResults);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setLoading(false));
    }, [page]);

    if (loading) return <p>Loading...</p>;

    const totalPages = Math.ceil(totalResults / moviesPerPage);

    const handleNextPage = () => {
        if (page < totalPages) setPage(page + 1);
    };

    const handlePrevPage = () => {
        if (page > 1) setPage(page - 1);
    };

    return (
        <div>
            <ul className="movies">
                {movies.map((movie) => {
                    return <MovieItem data={movie} key={movie.imdbID} />;
                })}
            </ul>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={page === 1}>
                    {"<"}
                </button>
                <span>
                    Page {page} of {totalPages}
                </span>
                <button onClick={handleNextPage} disabled={page === totalPages}>
                    {">"}
                </button>
            </div>
        </div>
    );
}
