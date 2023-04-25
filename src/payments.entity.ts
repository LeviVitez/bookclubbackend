import { IsString, Length, Min, IsNumber } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Payments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  nev: string;

  @Column()
  @Min(5)
  @IsNumber()
  amount: number;

  @Column()
  member_id: number;

  @Column()
  paid_at: string;
}
