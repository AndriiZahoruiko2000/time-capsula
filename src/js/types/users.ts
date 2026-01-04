export interface User {
  _id: string;
  cognitoSub: string;
  nickname: string;
  name: string;
  avatar: string;
  awards: string[];
}

export interface RegisterBody {
  email: string;
  password: string;
}

export interface ConfirmUserEmail {
  email: string;
  code: string;
}
export interface LoginResponse {
  accessToken: string;
  user: User;
}
