import React from 'react';
import { connect } from "react-redux";
import {
    follow,
    unfollow, 
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, requestUsers } from '../../redux/users-selectors';



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUserscount={this.props.totalUserscount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
};

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUserscount: state.usersPage.totalUserscount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress 
//     }
// };

let mapStateToProps = (state) => {
    return {
        users: requestUsers(state),
        pageSize: getPageSize(state),
        totalUserscount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};




export default compose(
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers })
)(UsersContainer)