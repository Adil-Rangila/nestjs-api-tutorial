import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(["Intern", "Engineer" ,"Admin"],{
        message: "Valid role is required"
    })
    role: "Intern" | "Engineer" | "Admin";
}