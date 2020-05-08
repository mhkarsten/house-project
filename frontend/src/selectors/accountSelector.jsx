import { createSelector } from 'reselect'

const postSelector = state => state.posts.posts
const statSelector = state => state.stats.stats
const userSelector = state => state.user.user.userName

const userPostSelector = createSelector(
    postSelector,
    userSelector,
    (posts, user) => posts.filter((post, index) => {?post.poster == user})
)