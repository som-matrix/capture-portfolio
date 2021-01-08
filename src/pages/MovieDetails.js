import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {MovieState} from '../movieState';
function MovieDetails() {
    const history = useHistory();
    const url = history.location.pathname // this is the exact url 
    const [movies,setMovies] = useState(MovieState);
    const [currentMovie, setCurrentMovie] = useState(null);
    
    // we will use useEffect hook to have this functionality
    useEffect(()=>{
        const current = movies.filter((stateMovie)=> stateMovie.url === url)
        setCurrentMovie(current[0]);
    
    },[movies,url]);
    return (
        // Check 
        <>
         {currentMovie && (
            <StyledDetails>
              <StyledHeadline>
                <h1>{currentMovie.title}</h1>  
              </StyledHeadline>
              <StyledMainImg>
                  <img src={currentMovie.mainImg} alt="Movie"/>
              </StyledMainImg>
              <StyledAwards>
                  {currentMovie.awards.map((award)=>(
                    <Award title={award.title} description={award.description}/>
                  ))}
              </StyledAwards>
              <StyledSecondImg>
                  <img src={currentMovie.secondaryImg} alt="Movie2"/>
              </StyledSecondImg>
            </StyledDetails>
         )}
        </>
    )
}

const StyledDetails = styled.div`
 min-height:90vh;
 /* padding-bottom:10rem; */
`
const StyledHeadline = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 padding:5rem 0;
 color:white;
 font-size:2rem;
 font-weight:lighter;
`
const StyledMainImg = styled.div`
 img{
     width:100%;
     height:70vh;
     object-fit:cover;
 }
`
const StyledSecondImg = styled.div`
img{
    width:100%;
}
`
const StyledAwards = styled.div`
 min-height:80vh;
 display:flex;
 justify-content:space-around;
 align-items:center;
 margin:5rem 10rem;
`
const StyledAward = styled.div`
 padding:5rem;
 h3{
     font-size:2rem;
 }
 .line{
     height:0.3rem;
     background-color:#62da97;
     width:100%;
     margin:2rem 0;
 }
 p{
     padding:2rem 0;
 }
`
// We are declaring a other component
const Award = ({title,description})=>{
    return(
        <StyledAward>
          <h3>{title}</h3>
          <div className="line"></div>
          <p>{description}</p>
        </StyledAward>
    )
}
export default MovieDetails
