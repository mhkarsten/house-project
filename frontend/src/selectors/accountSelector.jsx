import { createSelector } from 'reselect'

const postSelector = state => state.posts.posts
const statSelector = state => state.stats.stats
const userSelector = state => state.user.user

export const userPostSelector = createSelector(
    postSelector,
    userSelector,
    // eslint-disable-next-line
    (posts, user) => {return posts.filter((post) => {if(post.userId === user.userId){ return post }})}
)

export const userStatSelector = createSelector(
    statSelector,
    userSelector,
    // eslint-disable-next-line
    (stats, user) => {return stats.filter((stat) => {if (stat.userId === user.userId) { return stat }})}
)