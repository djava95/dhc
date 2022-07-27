import { Link } from "react-router-dom";
import { capitalize } from "../services/helpers/helpers";
import styled from "styled-components";

interface PropsI {
  linkName : string,
  active : boolean,
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

const NavLink = ({linkName, active}: PropsI) => {
  
  return (
    <LinkContainer active = {active}>
      <CustomLink to={`/${linkName}`}> {capitalize(linkName)} </CustomLink>
    </LinkContainer>
  )
}

export default NavLink;