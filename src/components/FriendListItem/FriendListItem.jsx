import css from './FriendListItem.module.css'
import clsx from "clsx";

    function FriendListItem({ avatar, name, isOnline, id }) {

        
    return (
            
                    <div key={id + name} className={css.divItemFriend}>
            <img src={avatar} alt="Avatar" width="48" className={css.friendAvatar} />
                        <p className={css.friendName}>{name}</p>
            <p className={css[clsx( isOnline ? "online" : "offline" )]}>{isOnline ? "Online" : "Offline"}</p>
                    </div>)
            }
      
export default FriendListItem;