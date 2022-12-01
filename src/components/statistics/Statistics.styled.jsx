import styled from '@emotion/styled'



export const Section = styled.section`
width: 350px;
  padding-top: 15px;
  box-shadow: 1px 1px 5px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #ffffff;
  align-items: center;
  margin: 30px auto;
`

export const Title = styled.h2`
 margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
`

export const StatList = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  

`
const getRandomHexColor = props =>{
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Item = styled.li`
 display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0px;
  align-items: center;
  color: #ffffff;
  font-weight: 700;
  background-color: ${getRandomHexColor};

`

export const Label = styled.span`
color: #000000;
  font-size: 12px;
`

export const Percentage = styled.span`
font-size: 20px;
`

