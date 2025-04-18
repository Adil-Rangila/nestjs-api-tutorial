import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    login() {
        return {
            "mesage": 'login',
        }
    }
    signup() {
        return {
            "mesage": 'signup',
        }
    }
}