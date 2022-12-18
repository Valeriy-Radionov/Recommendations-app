import { Button } from "@mui/material"
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import styled from "styled-components"

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type CommonBtnPropsType = DefaultButtonPropsType & {
  width: string
  height: string
  name?: string
}
export const CommonButton: React.FC<CommonBtnPropsType> = ({ name, width, height }) => {
  return (
    <Btn width={width} height={height} type="submit">
      {name}
    </Btn>
  )
}

const Btn = styled.button<CommonBtnPropsType>`
  font-family: ${({ theme }) => theme.fontFamily.base};
  font-size: ${({ theme }) => theme.fontSizeEm.regular}em;
  color: ${({ theme }) => theme.colors.bgColor};
  background-color: ${({ theme }) => theme.colors.buttonColor};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: none;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    border: 2px solid;
    border-color: ${({ theme }) => theme.colors.accessoryColor};
    background-color: ${({ theme }) => theme.colors.bgColor};
    color: ${({ theme }) => theme.colors.textColor};
  }
`
