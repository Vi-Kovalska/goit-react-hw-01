
import css from './Profile.module.css'

const Profile = ({name, tag, location, image, stats}) => {
  return (
    <div className={css.wrapperProfile}>
  <div className={css.containerAvatarAndInfo}>
    <img className={css.avatar}
      src={image}
      alt="User avatar"
    />
    <p className={css.nameProfile}>{name}</p>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <ul className={css.listActivity}>
    <li className={css.itemActivity}>
      <span className={css.spanAfter}>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li className={css.itemActivity}>
      <span className={css.spanBefore}>Views</span>
      <span>{stats.views}</span>
    </li>
    <li className={css.itemActivity}>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>

  )
}

export default Profile;