import { createSelector } from 'reselect'

const postSelector = state => state.posts.posts
const statSelector = state => state.stats.stats
const userSelector = state => state.user.user

export const userPostSelector = createSelector(
    postSelector,
    userSelector,
    (posts, user) => posts.filter((post, index) => {if(post.userId == user.userId){ return post }})
)

export const userStatSelector = createSelector(
    statSelector,
    userSelector,
    (stats, user) => stats.filter((stat, index) => {if (stat.userId == user.userId) { return stat }})
)