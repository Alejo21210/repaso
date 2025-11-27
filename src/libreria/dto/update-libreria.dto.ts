import { IsNumber, IsString } from 'class-validator';

export class UpdateLibreriaDto {
  @IsString()
  name: string;

  @IsString()
  titulo: string;

  @IsString()
  autor: string;

  @IsString()
  isbn: string;

  @IsNumber()
  precio: number;

  @IsNumber()
  stock: number;

  @IsString()
  fechaPublicacion: string;

  @IsString()
  categoria: string;
}