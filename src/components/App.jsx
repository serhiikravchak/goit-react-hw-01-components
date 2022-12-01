import Profile from "components/profile/Profile";
import user from "path/to/user.json";

import Statistics from "components/statistics/Statistics";
import data from "path/to/data.json";

import FriendList from "components/friendList/FriendList";
import friends from "path/to/friends.json";

import TransactionHistory from "components/transaction/TransactionHistory";
import transactions from "path/to/transactions.json";


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
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
   </div>
  );
};
 