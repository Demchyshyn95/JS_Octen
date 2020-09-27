export interface IUser {
  id: number;
  name: string;
  username: string;
  email:string;
  phone:string;
  website:string
}

export interface Ipost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Icomment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
