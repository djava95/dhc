import { Link } from "react-router-dom";
import { capitalize } from "../services/helpers/helpers";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";

interface PropsI {
  linkName : string,
  active : boolean,
  handleToggle: (linkName : string)=> void
}

const LinkContainer = styled.div.attrs((props: {active: boolean}) => props)`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => (props.active ? "white" : "#161663")};
  background-color: ${(props) => (props.active ? "#161663" : "white")};
`

const CustomLink = styled(Link)`
  display: block;
  padding: 20px;
  text-decoration: none;
  color: inherit;
  &:hover {
    color: white;
    background-color: #6464a0;
  }
`

const NavLink = ({linkName, active, handleToggle}: PropsI) => {
  
  return (
    <LinkContainer active = {active} onClick={() => handleToggle(linkName)}>
      <CustomLink to={`/${linkName}`}> {capitalize(linkName)} </CustomLink>
    </LinkContainer>
  )
}

export default NavLink;