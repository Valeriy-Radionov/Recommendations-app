import FactCheckIcon from "@mui/icons-material/FactCheck"
import HomeIcon from "@mui/icons-material/Home"
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks"
import ListIcon from "@mui/icons-material/List"
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { width } from "@mui/system"
import styled from "styled-components"
export const Header = () => {
  const titles = [
    { title: "Home", img: HomeIcon, color: "#486bda" },
    { title: "Video", img: SmartDisplayIcon, color: "#ed0910" },
    { title: "Tutorials", img: LibraryBooksIcon, color: "#2dffb6" },
    { title: "Other", img: FactCheckIcon, color: "#7859ff" },
  ]

  return (
    <Wrapper>
      <Container component={"div"} sx={{ width: "25%" }} aria-labelledby="nested-list-subheader">
        <ListButton>
          <ListText primary="MENU" />
          <ListItemIcon>
            <ListIcon sx={{ color: "#ffa852" }} />
          </ListItemIcon>
        </ListButton>
        {titles.map((el) => {
          return (
            <ListButton key={el.title}>
              <ListItemIcon>
                <el.img sx={{ color: el.color }} />
              </ListItemIcon>
              <ListText primary={el.title} />
            </ListButton>
          )
        })}
      </Container>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.bgColor};
`
const Container = styled(List)<{ component?: React.ElementType }>`
  width: 25%;
  height: 100%;
  color: ${({ theme }) => theme.colors.bgColor};
  background: ${({ theme }) => theme.colors.textColor};
  width: ${({ theme }) => theme.size.conteinerWidth}%;
  & .MuiList-root {
    width: 25%;
  }
`

const ListButton = styled(ListItemButton)`
  font-family: ${({ theme }) => theme.fontFamily.base};
`
const ListText = styled(ListItemText)`
  & .MuiTypography-root {
    font-family: ${({ theme }) => theme.fontFamily.base};
    font-size: ${({ theme }) => theme.fontSizeEm.regular}e;
  }
`
