import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "adil",
            "email": "adil.rangila@gmail.com",
            "role": 'Intern'
        },
        {
            "id": 2,
            "name": "Rangila",
            "email": "rangila.rangila@gmail.com",
            "role": 'Admin'
        },
        {
            "id": 3,
            "name": "Habib",
            "email": "habibi.rangila@gmail.com",
            "role": 'Engineer'
        },
        {
            "id": 4,
            "name": "Khan",
            "email": "Khan.rangila@gmail.com",
            "role": 'Engineer'
        }
    ]

    findAll(role?: 'Intern|Engineer|Admin') {
        if (role) {

            const roleArrey = this.users.filter(user => user.role === role)
            if (roleArrey.length === 0) return new NotFoundException("Not Found")
            return roleArrey
        }
        return this.users
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id)
        return user
    }

    create(createUserDto: CreateUserDto) {
        const lengthOfUsers = this.users.length
        const newUser = {
            id: lengthOfUsers + 1,
            ...createUserDto
        }
        this.users.push(newUser)
        return newUser
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updateUserDto }
            }
            return user
        })
        return this.findOne(id)
    }

    delete(id: number) {
        const removedUser = this.findOne(id)

        this.users = this.users.filter(user => user.id !== id)
        return removedUser
    }
}
