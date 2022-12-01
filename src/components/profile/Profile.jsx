import PropTypes from 'prop-types';
import { Container, Description, Avatar, Username, Tag, Location, Stats, Item, Label, Quantity } from 'components/profile/Profile.styled';

 export default function Profile({username, tag, location, avatar, followers, views, likes}) {
    return (
        <Container>
  <Description>
    <Avatar
      src={avatar}
      alt={username}
    />
                <Username>{username}</Username>
                <Tag> @{tag}</Tag>
                <Location>{location}</Location>
  </Description>

  <Stats>
    <Item>
      <Label>Followers</Label>
                    <Quantity> {followers}</Quantity>
    </Item>
    <Item>
      <Label>Views</Label>
                    <Quantity>{views}</Quantity>
    </Item>
    <Item>
      <Label>Likes</Label>
                    <Quantity> {likes}</Quantity>
    </Item>
  </Stats>
</Container>
    )
};


Profile.propTypes={
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};

