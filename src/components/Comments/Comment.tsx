import React from 'react'
import { Comment } from 'semantic-ui-react'
import { CommentModel } from '../../models/CommentModel';

const CommentItem = ({name, email, body, id, postId}: CommentModel) => (
     <Comment.Group>
       <Comment>
         <Comment.Content>
           <Comment.Author as='a'>{name}</Comment.Author>
           <Comment.Metadata>
             <p>{email}</p>
           </Comment.Metadata>
           <Comment.Text>{body}</Comment.Text>
         </Comment.Content>
       </Comment>
     </Comment.Group>
);

export default CommentItem;