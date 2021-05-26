import axios from 'axios';
import React from 'react';
import styles from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        axios.get("").then(responce =>{
            props.setUsers([
                {
                    id: 1, photoUrl: 'https://tiermaker.com/images/templates/3914971591516394.jpg',
                    followed: false, fullName: 'Dmitriy', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' }
                },
                {
                    id: 2, photoUrl: 'https://tiermaker.com/images/templates/3914971591516394.jpg',
                    followed: true, fullName: 'Yaroslav', status: 'I am a boss', location: { city: 'Moskow', country: 'Rassia' }
                },
                {
                    id: 3, photoUrl: 'https://tiermaker.com/images/templates/3914971591516394.jpg',
                    followed: false, fullName: 'Iliya', status: 'I am a boss', location: { city: 'Tver', country: 'Rassia' }
                },
            ])
        });
       
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>

            </div>)
        }
    </div>
}

export default Users;