import React from "react"
import './App.css';
import Banner from "./Components/Banner/Banner";
import Nav from "./Components/Nav/Nav";
import requests from "./Components/Requests/requests";
import Row from "./Components/Row/Row";


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row 
      title='NETFLIX ORIGINALS' 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true}
      />
      <Row 
      title='Trending Now'
      fetchUrl={requests.fetchTrending}
      />
      <Row 
      title='Top Rated'
      fetchUrl={requests.fetchTopRatedMovies}
      />
      <Row 
      title='Action Movies'
      fetchUrl={requests.fetchActionMovies}
      />
      <Row 
      title='Comedy Movies'
      fetchUrl={requests.fetchComedyMovies}
      />
      <Row 
      title='Horror Movies'
      fetchUrl={requests.fetchHorrorMovies}
      />
      <Row 
      title='Romance Movies'
      fetchUrl={requests.fetchRomanceMovies}
      />
      <Row 
      title='Documentaries'
      fetchUrl={requests.fetchDocumentaries}
      />
      <Row 
      title='Animations'
      fetchUrl={requests.fetchAnimations}
      />
      <Row 
      title='Adventures'
      fetchUrl={requests.fetchAdventures}
      />
      <Row 
      title='Dramas'
      fetchUrl={requests.fetchDramas}
      />
      <Row 
      title='Crimes'
      fetchUrl={requests.fetchCrimes}
      />
      <Row 
      title='Families'
      fetchUrl={requests.fetchFamilies}
      />
      <Row 
      title='Fantasies'
      fetchUrl={requests.fetchFantasies}
      />
      <Row 
      title='Histories'
      fetchUrl={requests.fetchHistories}
      />
      <Row 
      title='Musices'
      fetchUrl={requests.fetchMusices}
      />

    </div>
  );
}

export default App;
