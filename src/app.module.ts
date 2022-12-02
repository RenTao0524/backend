import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserInfoController } from './user-info/user-info.controller';
import { OrderController } from './order/order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { DataSource } from 'typeorm';
import { ActivitiesModule } from './activity/activities.module';
import { Activity } from './activity/activity.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rentao@1638',
      database: 'userinfo',
      // autoLoadEntities: true,
      entities: [User, Activity],
      synchronize: true,
    }),
    UsersModule,
    ActivitiesModule,
  ],
  controllers: [AppController, UserInfoController, OrderController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
