import css from "./Profile.module.css";

const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div>
            <div className={css.profile}>
                <div className={css.description}>
                    <img
                        src={avatar}
                        alt={username}
                        className={css.avatar}
                    />
                    <p className={css.name}>{username}</p>
                    <p className={css.tag}>@{tag}</p>
                    <p className={css.location}>{location}</p>
                </div>

                <ul className={css.stats}>
                    <li className={css.statsItem}>
                        <span className={css.label}>Followers</span>
                        <span className={css.quantity}>{stats.followers}</span>
                    </li>
                    <li className={css.statsItem}>
                        <span className={css.label}>Views</span>
                        <span className={css.quantity}>{stats.views}</span>
                    </li>
                    <li className={css.statsItem}>
                        <span className={css.label}>Likes</span>
                        <span className={css.quantity}>{stats.likes}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export { Profile };