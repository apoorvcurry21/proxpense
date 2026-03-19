import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import { PrismaService } from 'src/prisma/prisma.service';

import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) { }
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async signup(dto: SignupDto) {

    const userFound = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (userFound) {
      throw new ForbiddenException('Email already exists');
    }


    const hash = await bcrypt.hash(dto.password, 10);


    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: hash,
        name: dto.name,
      },
    });
    const { password, ...result } = user;
    return result;
  }
  async signin(dto: SigninDto) {
    // 1. Find the user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) {
      throw new ForbiddenException('Invalid credentials');
    }
    // 3. Compare password
    const isMatch = await bcrypt.compare(dto.password, user.password);

    if (!isMatch) {
      throw new ForbiddenException('Credentials incorrect');
    }
    const { password: _, ...result } = user;
    return result;
  }
}

