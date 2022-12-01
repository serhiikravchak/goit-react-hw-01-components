import PropTypes from 'prop-types';
import {Item, Chip, Avatar, Name} from 'components/friendList/FriendListItem.styled'

export default function FriendListItem({ isOnline, avatar, name }) {
    return (
        <Item>
            <Chip status={isOnline}></Chip>
            <Avatar src={avatar} alt={name} width="48"></Avatar>
            <Name>{name}</Name>
        </Item>
    )
}

FriendListItem.propTypes={
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired            
}