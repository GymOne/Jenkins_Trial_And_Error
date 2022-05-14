import { Inject, Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { Model } from 'mongoose';
import { Exercise } from './entities/exercise.entity';
import { GetExerciseDto } from './dto/GetExerciseDto';

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
    const listExercise = await this.exerciseModel.find().exec();
    //console.log(listExercise);
    const listSimple: GetExerciseDto[] = [];
    listExercise.map((ex) => {
      const h: GetExerciseDto = { name: ex.name };
      listSimple.push(h);
    });
    console.log(listSimple);
    return listSimple;
  }

  async findOneById(id: string) {
    return await this.exerciseModel.findById(id).exec();
  }
  async removeById(id: string) {
    return await this.exerciseModel.find({ _id: id }).deleteOne().exec();
  }
}
