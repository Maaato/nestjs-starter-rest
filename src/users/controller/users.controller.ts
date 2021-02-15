import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { UserDto } from '../dto/user-dto';
import { UserService } from '../services/user.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() createUser: UserDto, @Res() response) {
    this.userService
      .createUser(createUser)
      .then(data => {
        return response.status(HttpStatus.CREATED).json({
          statusCode: HttpStatus.CREATED,
          statusMsg: 'CREATED',
          data: [data],
        });
      })
      .catch(err => {
        const { statusCode, message, error } = err.response;
        return response.status(statusCode || HttpStatus.BAD_REQUEST).json({
          statusCode: statusCode || HttpStatus.BAD_REQUEST,
          statusMsg: error.toUpperCase(),
          error: message,
        });
      });
  }

  @Get()
  getAll(@Res() response) {
    this.userService
      .getAll()
      .then(data => {
        return response
          .status(HttpStatus.OK)
          .json({ statusCode: HttpStatus.OK, statusMsg: 'OK', data: data });
      })
      .catch(err => {
        const { statusCode, message, error } = err.response;
        return response.status(statusCode || HttpStatus.BAD_REQUEST).json({
          statusCode: statusCode || HttpStatus.BAD_REQUEST,
          statusMsg: error.toUpperCase(),
          error: message,
        });
      });
  }

  @Get(':id')
  getOne(@Param('id') id, @Res() response) {
    this.userService
      .getOne(id)
      .then(data => {
        if (data) {
          return response
            .status(HttpStatus.OK)
            .json({ statusCode: HttpStatus.OK, statusMsg: 'OK', data: [data] });
        } else {
          throw new NotFoundException(`User ID ${id} not found`);
        }
      })
      .catch(err => {
        const { statusCode, message, error } = err.response;
        return response.status(statusCode || HttpStatus.BAD_REQUEST).json({
          statusCode: statusCode || HttpStatus.BAD_REQUEST,
          statusMsg: error.toUpperCase(),
          error: message,
        });
      });
  }

  @Put(':id')
  update(@Body() updateUser: UserDto, @Param('id') id, @Res() response) {
    this.userService
      .update(id, updateUser)
      .then(data => {
        return response
          .status(HttpStatus.OK)
          .json({ statusCode: HttpStatus.OK, statusMsg: 'OK', data: data });
      })
      .catch(err => {
        const { statusCode, message, error } = err.response;
        return response.status(statusCode || HttpStatus.BAD_REQUEST).json({
          statusCode: statusCode || HttpStatus.BAD_REQUEST,
          statusMsg: error.toUpperCase(),
          error: message,
        });
      });
  }

  @Delete(':id')
  delete(@Res() response, @Param('id') id) {
    this.userService
      .remove(id)
      .then(() => {
        return response.status(HttpStatus.OK).json({
          statusCode: HttpStatus.OK,
          statusMsg: 'OK',
        });
      })
      .catch(err => {
        const { statusCode, message, error } = err.response;
        return response.status(statusCode || HttpStatus.BAD_REQUEST).json({
          statusCode: statusCode || HttpStatus.BAD_REQUEST,
          statusMsg: error.toUpperCase(),
          error: message,
        });
      });
  }
}
