export interface PostModel {
     userId: number,
     id: number,
     title: string,
     body: string
};

export interface PostState {
     posts?: PostModel[],
     error?: string
}