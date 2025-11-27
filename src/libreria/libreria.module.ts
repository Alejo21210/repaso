import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibreriasService } from './libreria.service';
import { LibreriasController } from './libreria.controller';
import { Libreria } from './libreria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Libreria])],
  controllers: [LibreriasController],
  providers: [LibreriasService],
})
export class LibreriasModule {}