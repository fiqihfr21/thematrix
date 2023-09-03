import { IsNotEmpty } from 'class-validator';

export class MatrixDto {
  @IsNotEmpty()
  m: number[][];

  @IsNotEmpty()
  n: number;

  @IsNotEmpty()
  result: string;
}
