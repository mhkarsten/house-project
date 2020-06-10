import { accountConstants } from '../actions/_constants'


const user = {
    username: 'adminerino',
    userId: 'admin',
    password: '',
    icon: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.uR3KgRq-sJayRblSz7i40QHaLF%26pid%3DApi&f=1',
}

export const accountReducer = (state={user:user}, action) => {
    switch(action.type) {
        case accountConstants.PWD_CHANGE:
            return {
                ...state,
                user: {
                    ...state.user,
                    password: action.newPassword
                }
            }
        case accountConstants.ICON_CHANGE:
            return {
                ...state,
                user: {
                    ...state.user,
                    icon: action.newIcon
                }
            }
        default:
            return state
    }
}