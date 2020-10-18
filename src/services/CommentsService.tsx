import { CommentState } from "../models/CommentModel"
import HttpService from "./HttpService"

class CommentsService {
     static async FetchComments(postId: number): Promise<CommentState> {
         const response = await HttpService.get<CommentState>(`/comments?postId=${postId}`);
         return response;
     }
} 

export default CommentsService;