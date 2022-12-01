import styled from '@emotion/styled'

export const Transactions = styled.table`
margin: 30px auto;
  width: 350px;
  text-align: center;
  border-collapse:collapse;
  border-radius: 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 1px 1px 5px #000000;
`

export const Head = styled.th`
    :not(:last-child) {
    border-right: solid 1px black;
}
`

export const Row = styled.tr`
:nth-of-type(odd) {
background-color: rgb(219, 209, 209);
}
`

export const Data = styled.td`
:not(:last-child) {
border-right: solid 1px black;
}
`