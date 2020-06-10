import { homeConstants } from '../actions/_constants'
const stats = [
    {
        title: 'Jazz',
        userId: 'admin',
        time: '26/13/56', 
        checked: false,
        value: 1000,
    },
    {
        title: 'Fucks Given',
        userId: 'admin',
        time: '34/64/11', 
        checked: false,
        value: 0,
    },
    {
        title: 'joints smoked',
        userId: 'daniel',
        time: '12/53/77', 
        checked: false,
        value: 420,
    }
]

const posts = [
    {
        title: 'Hugo is unacceptable',
        userId: 'Daniel',
        time: '12/3/19',
        body: [
            {
              children: [
                {
                  text:
                    "By default, pasting content into a Slate editor will use the clipboard's ",
                },
                { text: "'text/plain'", code: true },
                {
                  text:
                    " data. That's okay for some use cases, but sometimes you want users to be able to paste in content and have it maintaing its formatting. To do this, your editor needs to handle ",
                },
                { text: "'text/html'", code: true },
                { text: ' data. ' },
              ],
            },
            {
              children: [{ text: 'This is an example of doing exactly that!' }],
            },
            {
              children: [
                {
                  text:
                    "Try it out for yourself! Copy and paste some rendered HTML rich text content (not the source code) from another site into this editor and it's formatting should be preserved.",
                },
              ],
            },
          ]
    },
    {
        title: 'Hugo will be hung',
        userId: 'admin',
        time: '24/8/17',
        body: [
            {
              type: 'title',
              children: [{ text: 'Enforce Your Layout!' }],
            },
            {
              type: 'paragraph',
              children: [
                {
                  text:
                    'This example shows how to enforce your layout with domain-specific constraints. This document will always have a title block at the top and at least one paragraph in the body. Try deleting them and see what happens!',
                },
              ],
            },
          ]
    },
    {
        title: 'Hugo is a bastard',
        userId: 'admin',
        time: '12/3/99',
        body: [
            {
              children: [
                { text: 'This is editable plain text, just like a <textarea>!' },
              ],
            },
          ]
    }
]

export const statsReducer = (state={stats:stats}, action) => {
    switch(action.type) {
        case homeConstants.STAT_NEW:
            return {
                ...state,
                stats: [
                    ...state.stats,
                    {
                        title: action.title,
                        userId: action.userId,
                        time: action.time,
                        value: parseInt(action.value),
                        checked: false
                    }
                ]
            }
        case homeConstants.STAT_DELETE:
            return {
                ...state,
                stats: state.stats.filter((stat) => {
                    return !stat.checked
                })
            }
        case homeConstants.STAT_SELECT:
            return {
                ...state,
                stats: state.stats.map((stat, index) => {
                    if(stat.title === action.statName) {
                        return {
                            ...stat,
                            checked: action.checked
                        }
                    }
                    return stat
                })
            }
        case homeConstants.STAT_INCREMENT:
            return {
                ...state,
                stats: state.stats.map((stat, index) => {
                    if (stat.checked) {
                        return {
                            ...stat,
                            value: stat.value + 1
                        }
                    }
                    return stat
                })
            }
        case homeConstants.STAT_DECREMENT:
            return {
                ...state,
                stats: state.stats.map((stat, index) => {
                    if (stat.checked) {
                        return {
                            ...stat,
                            value: stat.value - 1
                        }
                    }
                    return stat
                })
            }
        default:
            return state
    }
}

export const postsReducer = (state={posts:posts}, action) => {
    switch(action.type) {
        case homeConstants.POST_NEW:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        sender: action.sender,
                        time: action.postDate,
                        title: action.postTitle,
                        body: action.postBody
                    }
                ]
            }
        case homeConstants.POST_SELECT:
            return {
                ...state
            }
        default: 
            return state
    }
}

//send message
//recieve messages