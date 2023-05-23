import React, { useEffect, useContext, useState } from "react";
import {
  getSearchCall,
} from "../apis/AnimeFinder";
import { AnimeContext } from "../context/AnimeContext";
// import { useHistory, Link, Redirect, useParams } from "react-router-dom";
import { useNavigate, Link, Navigate, useParams } from "react-router-dom";
import MyLoader from "./MyLoader";

const SearchResults = (props) => {
  const { search } = useParams();
  const { anime, setAnime } = useContext(AnimeContext);
  // let history = useHistory();
  let navigate = useNavigate();
  const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",
  };
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSearchCall(search);
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        // console.log(response.data.data);
        setAnime(response.data.data.anime);
      } catch (err) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
      }
    };
    fetchData();
  }, []);
  // const deleteHandler = async (id) => {
  //   try {
  //     const response = await deleteAnimeCall(id);
  //     fetchData();
  //   } catch (err) {
  //     console.log(err);
  //     <Redirect to="/error" />;
  //   }
  // };

  // const editHandler = (id) => {
  //   history.push(`/anime/${id}/update`);
  // };

  if (requestStatus === REQUEST_STATUS.LOADING) return <MyLoader></MyLoader>;
  // if (requestStatus === REQUEST_STATUS.FAILURE) <Redirect to="/error" />;
  if (requestStatus === REQUEST_STATUS.FAILURE) <Navigate to="/error" />;
  return (
    <div id="margin">
    <div className="list-group">
      <table className="table-active table-bordered table-striped table-hover table-dark table-sm">
        <thead>
          <tr className="bg-secondary text-warning">
            <th scope="col" className="col-md-3-3 text-center border-light">
              Image
            </th>
            <th scope="col" className="col-md-3-3 text-center border-light">
              Name
            </th>
            <th scope="col" className="col-md-3-3 text-center border-light">
              Number of Episodes
            </th>
            <th scope="col" className="col-md-3-3 text-center border-light">
              Genre
            </th>

          </tr>
        </thead>
        <tbody>
          {anime &&
            anime.map((anime) => {
              return (
                <tr key={anime.id} className="table-active">
                  <td className="col-md-3 text-center border-light">
                    <Link to={`/anime/${anime.id}`}>
                      <img
                        src={anime.image}
                        className="img-fluid rounded h-25 w-75 p-1 border border-warning bg-warning"
                      ></img>
                    </Link>
                  </td>
                  <td className="col-md-3 text-center border-light">
                    {anime.name}
                  </td>
                  <td className="col-md-3 text-center border-light">
                    {anime.episodes}
                  </td>
                  <td className="col-md-3 text-center border-light">
                    {" "}
                    {anime.genre_name}
                  </td>
                  {localStorage.getItem("authenticatedUser") != null && (
                    <td className="col-md-3 text-center border-light">
                      <div className="btn-group-vertical">
                        <button
                          className="btn btn-warning"
                          // onClick={() => editHandler(anime.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          // onClick={() => deleteHandler(anime.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default SearchResults;
