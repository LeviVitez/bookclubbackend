import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import Members from './member.entity';
import Payments from './Payments.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Post('/seed')
  async fillpayments() {
    const paymentrepo = this.dataSource.getRepository(Payments);
    for (let i=0; i < 16; i++){
      const payment=new Payments();
      payment.id=i;
      payment.amount= i = 1234;
      payment.member_id= i;
      payment.paid_at= "2023-04-25";
      await paymentrepo.save(payment);
    }
    return Payments;
  }

  @Get(/api/beemmrs)
  async getAllMembers() {
    const membersrepo = this.dataSource.getRepository(Members);
    return membersrepo.find();

  @Body()
  }
}
