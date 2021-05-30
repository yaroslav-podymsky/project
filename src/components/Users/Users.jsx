import * as axios from 'axios';
import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import s from '../Users/Users.module.css';


class Users extends React.Component  {

componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    .then(responce => {
        this.props.setUsers(responce.data.items);
        this.props.setTotalUsersCount(responce.data.totalCount);
    });
}

onPageChanget = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page= ${pageNumber} &count=${this.props.pageSize}`)
    .then(responce => {
        this.props.setUsers(responce.data.items);
    });
}

render() {

let pagesCount = Math.ceil (this.props.totalUserscount / this.props.pageSize);

let pages = [];
for (let i=1; i <= pagesCount; i++ ) {
    pages.push(i);
}

    return <div>
        <div>
            {pages.map(p => {
                return <span className={`${s.pageNumber} ${this.props.currentPage === p && styles.selectedPage}`}
                onClick={(e) =>{this.onPageChanget(p)}}
                >{p}</span>  
            })}
        </div>
    {
        this.props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src= { u.photos.small != null ? u.photos.small : userPhoto } className={styles.userPhoto} />
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                        : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}

                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>

        </div>)
    }
</div>
}
}

export default Users;