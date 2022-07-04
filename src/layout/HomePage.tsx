import styled from "styled-components";

const MainContainer = styled.div`
width: 100%;
padding: 30px;
box-sizing: border-box;    
`
const Heading = styled.h1`
margin: 0;
text-align: center;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

const HomePage = () => {
  return (
    <MainContainer> 
      <Heading>Welcome to DHC foundation official site</Heading>
    </MainContainer>
  )
}

export default HomePage;