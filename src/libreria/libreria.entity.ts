import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('libreria')
export class Libreria {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  titulo: string;

  @Column()
  autor: string;

  @Column()
  isbn: string;

  @Column()
  precio: number;

  @Column()
  stock: number;

  @Column()
  fechaPublicacion: Date;

  @Column()
  categoria: string;
}