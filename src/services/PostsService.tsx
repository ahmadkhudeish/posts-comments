import { PostState } from "../models/PostModel"
import HttpService from "./HttpService"

class PostsService {
     static async FetchPosts(): Promise<PostState> {
         const response = await HttpService.get<PostState>('/posts');
         return response;
     }
} 

export default PostsService;