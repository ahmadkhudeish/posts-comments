import React from 'react'; 
import { useDispatch } from 'react-redux';
import { Button, Header } from 'semantic-ui-react';
import { clearComments } from '../../actions/PostActions';
import { useTypedSelector } from '../../hooks/TypedUseSelectorHook';
import { CommentModel } from '../../models/CommentModel';
import CommentItem from './Comment';

const Comments = (): JSX.Element =>{
     const comments = useTypedSelector(state => state.comments);
     const dispatch = useDispatch();

     return (
          <>
               <Button onClick={() => dispatch(clearComments())} labelPosition='left' icon='left chevron' content='Back' />
               <Header as='h3' dividing>
               Comments
               </Header>
               {comments?.comments?.map((comment: CommentModel) =>(
                    <CommentItem key={comment.id} {...comment}/>
               ))}
          </>
     );
} 

export default Comments;
