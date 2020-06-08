import React from 'react';
import { Button, Typography, List, ListItem, TextField } from '@material-ui/core';
import { useState, useMemo } from 'react';
import { Slate, Editable, withReact } from 'slate-react'
import { createEditor } from 'slate'

import RichTextEditor from './slate/textEditor.jsx'

const initialValue = [
    {
      type: 'paragraph',
      children: [
        { text: 'This is editable!'},

      ]
    }
  ]
  
const MessageBoard = (props) => {
    const [selectedPost, setSelectedPost] = useState(false)
    const [newPost, setNewPost] = useState(initialValue)
    const [newPostTitle, setNewPostTitle] = useState('')

    const [selectValue, setSelectValue] = useState([])
    const viewPost = useMemo(() => withReact(createEditor()), [])

    function selectPost(event) {
        event.stopPropagation()
        props.posts.posts.forEach((post) => {
            if (event.target.title === post.time) {
                setSelectedPost(true)
                setView(post.body)
            }
        })
    }

    function setView(e) {
        setSelectValue(e)
    }

    function createNewPost(e) {
        e.preventDefault()
        props.newPost("Daniel", Date.now().toString(), newPostTitle, newPost)
    }

    function updateNewPostTitle(event) {
        setNewPostTitle(event.target.value)
    }

    return (
        <div className='messageBoardBody'>
            <div className='postList'>
                <Typography>Posts</Typography>
                <form onSubmit={createNewPost}>
                    <div> 
                        <List>
                            {
                                props.posts.posts.map((post, index) => {
                                    console.log(post.title)
                                    return (
                                        <ListItem key={post.time} className='postListItem'>
                                            <div title={post.time} onClick={selectPost}>{post.userId + ': :' + post.time + ': :' + post.title}</div>
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                    </div>
                    <div>
                        <Typography>Post Title</Typography>
                        <TextField id='standard-basic' label='Post Title' name='newStatName' onChange={updateNewPostTitle}/>
                        <Button type='submit'>Create Post</Button>
                    </div>
                </form>
            </div>
            <div className='viewPost'>
                <Typography>View Post</Typography>
                <div>
                    {
                        selectedPost ?
                        <Slate editor={viewPost} value={selectValue} onChange={setView}>
                            <Editable readOnly/>
                        </Slate>
                        :
                        <div>you have not selected a post</div>
                    }
                </div>
            </div>
            <div className='newPost'>
                <Typography>New Post</Typography>
                <div>
                    <RichTextEditor value={newPost} setValue={setNewPost}/>
                </div>
            </div>
        </div>
    );
}

export default MessageBoard;

