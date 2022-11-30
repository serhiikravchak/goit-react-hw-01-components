import PropTypes from 'prop-types';

export default function FriendListItem({ isOnline, avatar, name }) {
    return (
        <li class="item">
            <span class="status"></span>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class={name}></p>
        </li>
    )
}

FriendListItem.propTypes={
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired            
}