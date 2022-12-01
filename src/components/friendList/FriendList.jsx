import PropTypes from 'prop-types';

import {List} from 'components/friendList/FriendList.styled'
import FriendListItem from 'components/friendList/FriendListItem';

export default function FriendList({ friends }) {
    return (
        <List>
            {friends.map(({ id, isOnline, avatar, name })=>(
            <FriendListItem
                key={id}
                isOnline={isOnline}
                avatar={avatar}
                name={name}
            />
             ) )
            }
        </List>
    )

}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number
        }))
    
    
    }

