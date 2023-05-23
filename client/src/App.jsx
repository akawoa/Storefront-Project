import "./App.css";
import React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import RegistrationPage from "./routes/RegistrationPage";
import LoginPage from "./routes/LoginPage";
import NewAnime from "./routes/NewAnime";
import NewGenre from "./routes/NewGenre";
import AnimeDetailPage from "./routes/AnimeDetailPage";
import UpdatePage from "./routes/UpdatePage";
import UpdateGenre from "./routes/UpdateGenre";
import GenrePage from "./routes/GenrePage";
import ErrorPage from "./routes/ErrorPage";
import AllAnimeList from "./routes/AllAnimeList";
import SearchResultsPage from "./routes/SearchResultsPage";
import { AnimeContextProvider } from "./context/AnimeContext";
import { GenresContextProvider } from "./context/GenreContext";
import { UsersContextProvider } from "./context/UserContext";
import './App.css'

const App = (async) => {
  return (
    <div className="fill-window">
      <AnimeContextProvider>
        <GenresContextProvider>
          <UsersContextProvider>
            <BrowserRouter>
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/anime" element={<AllAnimeList />} />
              <Route path="/anime/search/:search" element={<SearchResultsPage />} />
              <Route path="/anime/new" element={<NewAnime />} />
              <Route path="/anime/:id/update" element={<UpdatePage />} />
              <Route path="/anime/:id" element={<AnimeDetailPage />} />
              <Route path="/genre/new" element={<NewGenre />} />
              <Route path="/genre/:id/update" element={<UpdateGenre />} />
              <Route path="/anime/genre/:id" element={<GenrePage />} />
              <Route path="/error" element={<ErrorPage />} />
              </Routes>
            </BrowserRouter>
          </UsersContextProvider>
        </GenresContextProvider>
      </AnimeContextProvider>
    </div>
  );
};

export default App

// const App = (async) => {
//   return (
//     <div className="fill-window">
//       <AnimeContextProvider>
//         <GenresContextProvider>
//           <UsersContextProvider>
//             <BrowserRouter>
//               <Switch>
//                 <Route exact path="/">
//                   <Home />
//                 </Route>
//                 <Route exact path="/register">
//                   <RegistrationPage />
//                 </Route>
//                 <Route exact path="/login">
//                   <LoginPage />
//                 </Route>
//                 <Route exact path="/anime">
//                   <AllAnimeList />
//                 </Route>
//                 <Route exact path="/anime/search/:search">
//                   <SearchResultsPage />
//                 </Route>
//                 <Route exact path="/anime/new">
//                   <NewAnime />
//                 </Route>
//                 <Route exact path="/anime/:id/update">
//                   <UpdatePage />
//                 </Route>
//                 <Route exact path="/anime/:id">
//                   <AnimeDetailPage />
//                 </Route>
//                 <Route exact path="/genre/new">
//                   <NewGenre />
//                 </Route>
//                 <Route exact path="/genre/:id/update">
//                   <UpdateGenre />
//                 </Route>
//                 <Route exact path="/anime/genre/:id">
//                   <GenrePage />
//                 </Route>
//                 <Route exact path="/error">
//                   <ErrorPage />
//                 </Route>
//               </Switch>
//             </BrowserRouter>
//           </UsersContextProvider>
//         </GenresContextProvider>
//       </AnimeContextProvider>
//     </div>
//   );
// };

// export default App;
