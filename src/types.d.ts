import { SetStateAction } from "react";

export interface IAuthContext {
  signed: boolean;
  user: IUser | null;
  loading: boolean;
  error: boolean;
  logout: () => void;
  login: (data: IAuthResponse) => void;
  dispatch: React.Dispatch<any>;
}

export interface IUser {
  id:	number
name:	string
email:	string
createdAt:	Date
updatedAt:	Date

}

export interface IAuthResponse{
  accessToken: string;
  user: IUser;
}

export interface ILogin{
  email: string;
  password: string;
}

export interface IRegister{
  name: string;
  email: string;
  password: string;
}

export interface IArticle {
  data: SetStateAction<IArticle>;
  id: number;
  title: string;
  description?: string;
  body: string;
  featuredAsset: string;
}

export interface IArticleResponse{
  data: IArticle;
}


