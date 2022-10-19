import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserInfoController } from './user-info/user-info.controller';
import { OrderController } from './order/order.controller';

@Module({
  imports: [],
  controllers: [AppController, UserInfoController, OrderController],
  providers: [AppService],
})
export class AppModule {}
