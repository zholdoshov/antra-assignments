import React from "react";
import "./MovieItem.css";

export function MovieItem({ data }) {
    return (
        <li className="movie">
            <div>
                <img src={data.Poster} alt="movie-poster" />
            </div>
            <div>
                <p>
                    <b>Title:</b> {data.Title}
                </p>
                <p>
                    <b>Year:</b> {data.Year}
                </p>
                <p>
                    <b>Type:</b> {data.Type}
                </p>
            </div>
        </li>
    );
}
