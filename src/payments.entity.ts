import { IsString, Length, Min, IsNumber } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Payments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNumber()
  amount: number;

  @Column()
  member_id: number;

  @Column()
  paid_at: string;
}
