import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service.js';
import { EditProfileDto } from './editProfile.dto.js';
import { error } from 'console';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {

    }
  }

  @Post('/')
  @Render('index')
  editProfile(@Body() body: EditProfileDto) {
    const userRegex = /^[a-z][a-z\d]*$/;
    const nickRegex = /^[a-z -\d]{3,}$/img;
    const hexRegex = /^[#]{1}[a-f0-9]{6}$/img;
    const profileRegex = /^https:\/\/[a-z]{1}.+\.(png|jpg)$/mg;
    if (!userRegex.test(body.username) || !nickRegex.test(body.nickname) || !hexRegex.test(body.hex) || !profileRegex.test(body.https)) {
      const userErr = userRegex.test(body.username)? 'Invalid username' : null;
      const nickErr = nickRegex.test(body.nickname)? 'Invalid nickname' : null;
      const hexErr = userRegex.test(body.hex)? 'Invalid hexcode' : null;
      const profileErr = userRegex.test(body.https)? 'Invalid pictures' : null;

      return {
        error: "Invalid username"
      }
    } 
  }
}
