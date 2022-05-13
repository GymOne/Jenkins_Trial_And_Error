import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';

@Controller('exercise')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Post('create')
  create(@Body() createExerciseDto: CreateExerciseDto) {
    return this.exercisesService.create(createExerciseDto);
  }

  @Get('findAllExercise')
  findAllByUserId() {
    return this.exercisesService.findAllByUserId();
  }
}
