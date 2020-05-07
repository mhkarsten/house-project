import { accountConstants } from '../actions/_constants'


const user = {
    username: 'admin',
    icon: 'https://ronewzakcleveland.files.wordpress.com/2018/01/15155306479543.jpg?w=788&quality=80&strip=all&h=1024',
}

export const accountReducer = (state={user:user}, action) => {
    switch(action.type) {
        case accountConstants.PWD_CHANGE:
            return {

            }
        case accountConstants.ICON_CHANGE:
            return {

            }
        default:
            return state
    }
}