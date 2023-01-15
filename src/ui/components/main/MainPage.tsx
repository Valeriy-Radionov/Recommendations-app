import { Box, Grid } from "@mui/material"
import styled from "styled-components"

export const MainPage = () => {
  return (
    <Wrapper>
      <Container></Container>
    </Wrapper>
  )
}
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.bgColor};
  width: ${({ theme }) => theme.size.conteinerWidth}%;
`
const Container = styled(Grid)`
  width: 100%;
  display: flex;
  margin-top: 15%;
  flex-direction: column;
`
