import React from 'react';
import { PostModel } from '../../models/PostModel';
import { Message } from 'semantic-ui-react'
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react'
import { getComments } from '../../actions/PostActions';

const Post = ({ userId, id, title,  body }: PostModel) => {
  const dispatch = useDispatch();

  return (
    <Message>
        <Message.Header >{title}</Message.Header>
        <Message content={body}/>
        <Button onClick={() => dispatch(getComments(id))}>View More</Button>
    </Message>
  )
};


export default Post;
