import { FriendListItem } from "../friendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
    return (
        <div>
            <ul className={css.friendList}>
                {friends.map(friend => (
                <FriendListItem key={friend.id} friend={friend} />
                ))}
            </ul>
        </div>
  );
};

export { FriendList };