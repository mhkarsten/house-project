import { accountConstants } from './_constants'

export const accountActions = {
    changePassword,
    changeIcon
}

function changePassword(newPassword, oldPassword) {
    return {type: accountConstants.PWD_CHANGE, newPassword, oldPassword}
}

function changeIcon(newIcon) {
    return {type: accountConstants.ICON_CHANGE, newIcon}
}