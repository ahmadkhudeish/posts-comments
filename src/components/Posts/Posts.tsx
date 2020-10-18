import React, { useEffect, useCallback } from 'react'; 
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/TypedUseSelectorHook';
import { PostModel } from '../../models/PostModel';
import { getPosts } from '../../actions/PostActions';
import Post from './Post';

const Posts = (): JSX.Element =>{
     const posts = useTypedSelector(state => state.posts);
     const dispatch = useDispatch();
     const stableDispatch = useCallback(dispatch, []);

     useEffect(() => {
          stableDispatch(getPosts());
     }, [stableDispatch]);
      
     return (
          <>
               {posts?.posts?.map((post: PostModel) =>(
                    <Post key={post.id} userId={post.userId} id={post.id} title={post.title} body={post.body} />
               ))}
          </>
     );
} 

export default Posts;
