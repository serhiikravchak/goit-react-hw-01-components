import Profile from "components/Profile";
import Statistics from "components/Statistics";
import user from "path/to/user.json"
import data from "path/to/data.json";

export const App = () => {
  return (
    <div>
      <Profile
      key={user.tag}
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
   </div>
  );
};
 