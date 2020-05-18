import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "./device"

const ButtonStyle = styled(Link)`
  padding: 1rem;
  max-width: 100%;
  background: ${props => props.backgroundColor || "var(--color-primary)"};
  border-radius: 8px;
  transition: all 0.1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;

  &:hover {
    cursor: pointer;
    background: var(--bg-hex);
    color: ${props => props.backgroundColor || "var(--color-primary)"};
    box-shadow: 0 0 0 1px
      ${props => props.backgroundColor || "var(--color-primary)"} inset;
  }

  @media only screen and (min-width: 445px) {
    max-width: 10rem;
  }

  @media ${device.desktop} {
    padding: 0.5rem;
    font-size: 18px;
    max-width: 6rem;
  }
`

const ButtonPrimary = props => (
  <ButtonStyle
    as={props.asA}
    href={props.href}
    to={props.link}
    backgroundColor={props.color}
    hoverBackground={props.hoverBackground}
  >
    {props.text}
  </ButtonStyle>
)
export default ButtonPrimary
