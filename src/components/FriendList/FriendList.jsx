import css from './FriendList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem'

const FriendList = ({friends}) => {
    return (
    <ul className={css.listFriends}>
	{friends.map(fr => <li key={fr.id} >
                <FriendListItem {...fr} />
	</li>)}
</ul>
  )
}

export default FriendList