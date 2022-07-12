import { PageMainContainer } from "../GlobalStyledComponents/GlobalStyledComponents";
import styled from "styled-components";

const Heading = styled.h1`
margin: 0;
text-align: center;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

const HomePage = () => {
  return (
    <PageMainContainer> 
      <Heading>Welcome to DHC foundation official site</Heading>
    </PageMainContainer>
  )
}

export default HomePage;