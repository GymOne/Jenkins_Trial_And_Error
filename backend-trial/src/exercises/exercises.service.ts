import { Inject, Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { Model } from 'mongoose';
import { Exercise } from './entities/exercise.entity';

@Injectable()
export class ExercisesService {
  constructor(
    @Inject('EXERCISE_MODEL') private readonly exerciseModel: Model<Exercise>,
  ) {}

  async create(createExerciseDto: CreateExerciseDto): Promise<Exercise> {
    return await this.exerciseModel.create({
      name: createExerciseDto.name,
    });
  }
  async findAllByUserId() {
    return await this.exerciseModel.find().exec();
  }

  async findOneById(id: string) {
    return await this.exerciseModel.findById(id).exec();
  }
  async removeById(id: string) {
    return await this.exerciseModel.find({ _id: id }).deleteOne().exec();
  }
}
