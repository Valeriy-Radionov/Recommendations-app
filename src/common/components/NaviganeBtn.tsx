import React, { ReactNode } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { AppRoutes } from "../routes/Routs"

type NavigateButtonPropsType = {
  to: AppRoutes
  name?: string
  callback?: () => void
  type?: string | undefined
}
export const NavigateButton: React.FC<NavigateButtonPropsType> = ({ to: rout, name, callback, type }) => {
  return (
    <NavigateLink type={type} to={rout} onClick={callback}>
      {name}
    </NavigateLink>
  )
}

const NavigateLink = styled(NavLink)<NavigateButtonPropsType>`
  color: ${({ theme }) => theme.colors.accessoryColor};
  padding: 10px;
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.base}, sans-serif;
  font-size: ${({ theme }) => theme.fontSizeEm.regular}em;
  &:hover {
    color: ${({ theme }) => theme.colors.textColor};
  }
`
