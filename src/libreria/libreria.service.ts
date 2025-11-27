import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libreria } from './libreria.entity';
import { CreateLibreriaDto } from './dto/create-libreria.dto';
import { UpdateLibreriaDto } from './dto/update-libreria.dto';

@Injectable()
export class LibreriasService {
  constructor(
    @InjectRepository(Libreria)
    private readonly libreriaRepository: Repository<Libreria>,
  ) {}

  create(createLibreriaDto: CreateLibreriaDto) {
    const libreria = this.libreriaRepository.create(createLibreriaDto);
    return this.libreriaRepository.save(libreria);
  }

  findAll() {
    return this.libreriaRepository.find();
  }

  findOne(id: string) {
    return this.libreriaRepository.findOne({ where: { id } });
  }

  async update(id: string, updateLibreriaDto: UpdateLibreriaDto) {
    const libreria = await this.libreriaRepository.findOne({ where: { id } });
    if (!libreria) return null;
    Object.assign(libreria, updateLibreriaDto);
    return this.libreriaRepository.save(libreria);
  }

  async remove(id: string) {
    const libreria = await this.libreriaRepository.findOne({ where: { id } });
    if (!libreria) return null;
    return this.libreriaRepository.remove(libreria);
  }

  calcularPromedio(costos: number[], limite: number) {
  let suma = 0;
  let contador = 0;
  const listaFiltrada: number[] = [];

  for (const costo of costos) {
    if (costo <= limite) {
      suma += costo;
      listaFiltrada.push(costo);
      contador++;
    }
  }
  const promedio = contador > 0 ? suma / contador : 0;
  return {
    listaFiltrada: listaFiltrada,
    suma: suma,
    promedio: promedio,
  };
}
}
