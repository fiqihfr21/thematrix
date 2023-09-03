import { Injectable } from '@nestjs/common';
import { Matrix } from '../database/models/matrix';
import { MatrixDto } from './dto/matrix.dto';



@Injectable()
export class MatrixService {
  constructor(
  ) {}

  async storeMatrix(matrixDto: MatrixDto): Promise<Matrix> {
    const inserted = Matrix.query().insert(matrixDto);

    return inserted;
  }

}
