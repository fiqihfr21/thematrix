import {
  Controller,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MatrixService } from './matrix.service';
import { MatrixDto } from './dto/matrix.dto';

@Controller('matrix')
@UseGuards(AuthGuard())
export class MatrixController {

  constructor(private readonly matrixService: MatrixService) {}

  @Post('/store')
  async storeMatrix(@Body() matrixDto: MatrixDto) {
    this.matrixService.storeMatrix(matrixDto);
    return { message: 'data created!', statusCode: '201' };
  }
}
