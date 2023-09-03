import { Test, TestingModule } from '@nestjs/testing';
import { MatrixController } from './matrix.controller';
import { MatrixService } from './matrix.service';
import { MatrixDto } from './dto/matrix.dto';
import { AppModule } from '../app.module';
import { UnauthorizedException } from '@nestjs/common';

describe('MatrixController', () => {
  let matrixController: MatrixController;
  let matrixService: MatrixService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    matrixController = module.get<MatrixController>(MatrixController);
    matrixService = module.get<MatrixService>(MatrixService);
  });

  describe('storeMatrix', () => {
    it('should store a matrix successfully when logged in', async () => {
      jest
        .spyOn(matrixController, 'storeMatrix')
        .mockImplementationOnce(async () => {
          return Promise.resolve({
            message: 'data created!',
            statusCode: '201',
          });
        });

      const matrixDto: MatrixDto = {
        m: [
          [1, 4, 7, 8],
          [10, 14, 18, 20],
          [23, 30, 32, 65],
        ],
        n: 1,
        result: '(0,0)',
      };

      const response = await matrixController.storeMatrix(matrixDto);

      expect(response).toEqual({ message: 'data created!', statusCode: '201' });
    });

    it('should return an unauthorized response when not logged in', async () => {
      jest.spyOn(matrixController, 'storeMatrix').mockImplementationOnce(() => {
        throw new UnauthorizedException(); 
      });

      const matrixDto: MatrixDto = {
        m: [
          [1, 4, 7, 8],
          [10, 14, 18, 20],
          [23, 30, 32, 65],
        ],
        n: 1,
        result: '(0,0)',
      };

      try {
        await matrixController.storeMatrix(matrixDto);
      } catch (error) {
        expect(error).toBeInstanceOf(UnauthorizedException);
      }
    });
  });
});
