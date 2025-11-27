import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { LibreriasService } from './libreria.service';
import { CreateLibreriaDto } from './dto/create-libreria.dto';
import { UpdateLibreriaDto } from './dto/update-libreria.dto';

@Controller('librerias')
export class LibreriasController {
  constructor(private readonly libreriasService: LibreriasService) {}

  @Post()
  create(@Body() createLibreriaDto: CreateLibreriaDto) {
    return this.libreriasService.create(createLibreriaDto);
  }

  @Get()
  findAll() {
    return this.libreriasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.libreriasService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateLibreriaDto: UpdateLibreriaDto) {
    return this.libreriasService.update(id, updateLibreriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.libreriasService.remove(id);
  }

  @Post('calculo-promedio-costo')
  calcularPromedio(@Body() body:{ costos: number[], limite: number}) {
    return this.libreriasService.calcularPromedio(body.costos, body.limite)
  }
}