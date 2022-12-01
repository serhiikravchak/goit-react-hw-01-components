import styled from '@emotion/styled'

export const Item = styled.li`
 width: 200px;
  list-style: none;
  display: flex;
  align-items: center;
  box-shadow: 1px 1px 5px black;
`

const setStatus = props => {
    switch (props.status) {
        case true:
            return 'green';
        default:
            return 'red'
  }
    
}

export const Chip = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${setStatus};
  margin: 0 10px;
`

export const Name = styled.p`
 margin-left: 10px;
  font-weight: 900;
  font-size: 18px;
`

export const Avatar = styled.img`
 padding: 5px 0;
`