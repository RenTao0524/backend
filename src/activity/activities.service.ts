import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateActivityDto } from './dto/create-activity.dto';
import { Activity } from './activity.entity';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>,
  ) {}

  create(createActivityDto: CreateActivityDto): Promise<Activity> {
    const activity = new Activity();
    console.log('createActivityDto:', createActivityDto)
    activity.name = createActivityDto.name;

    return this.activityRepository.save(activity);
  }

  async findAll(): Promise<Activity[]> {
    return this.activityRepository.find();
  }

  findOne(id: number): Promise<Activity> {
    return this.activityRepository.findOneBy({ id: id });
  }

  async remove(id: string): Promise<void> {
    await this.activityRepository.delete(id);
  }
}
