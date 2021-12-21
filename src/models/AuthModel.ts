import { genderEnum } from "./common";
import { Moment } from "moment";

export interface UserDetailModel {
  userId: string;
  password?: string;
  userName: string;
  birthday: Moment;
  age: string;
  gender: genderEnum;
}

export interface SigninFormModel {
  userId: string;
  password: string;
}
