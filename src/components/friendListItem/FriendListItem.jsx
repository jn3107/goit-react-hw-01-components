import css from "./FriendListItem.module.css";

const FriendListItem = ({ friend }) => {
  console.log(friend.isOnline);
    return (
        <div>
            <li className={css.item}>
                <span
                    className={friend.isOnline ? css.statusOnline : css.statusOffline}
                ></span>
                <img
                    className={css.avatar}
                    src={friend.avatar}
                    alt={friend.name}
                    width="48"
                />
                <p className={css.name}>{friend.name}</p>
            </li>
        </div>
  );
};

export { FriendListItem };