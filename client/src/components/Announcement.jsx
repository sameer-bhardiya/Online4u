import styled from "styled-components"

const Container = styled.div`
    height:30px;
    background-color:teal;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:bold;
`

const Announcement = () => {
  return (
    <Container>
       All the skills you need in one place
    </Container>
  )
}

export default Announcement