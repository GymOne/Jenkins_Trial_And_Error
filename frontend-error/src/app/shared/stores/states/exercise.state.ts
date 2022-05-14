import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { append, patch } from '@ngxs/store/operators';
import {
  LoadExercises,
  CreateExercise,
} from '../actions/exercise.action';
import { Exercise } from '../exercise.entity';
import {ExerciseService} from "../../service/exercise.service";
import {ExerciseDto} from "../../service/dto/ExerciseDto";

export class ExerciseStateModel {
  exercises!: Exercise[];
}

@State<ExerciseStateModel>({
  name: 'exercise',
  defaults: {
    exercises: [],
  },
})
@Injectable()
export class ExerciseState {
  @Selector()
  static getExercises(state: ExerciseStateModel) {
    return state.exercises;
  }

  constructor(private _exercise: ExerciseService, private store: Store) {}

  @Action(LoadExercises)
  LoadExercises(ctx: StateContext<ExerciseStateModel>) {
    this._exercise.getAllExercise().subscribe(
      (value) => {
        ctx.patchState({
          exercises: value,
        });
      },
      (err) => {},
    );
  }

  @Action(CreateExercise)
  CreateExercise(
    ctx: StateContext<ExerciseStateModel>,
    action: CreateExercise,
  ) {
    var ex: ExerciseDto = {name: action.name}
    this._exercise.createExercise(ex).subscribe((value) => {
        ctx.setState(
          patch({
            exercises: append([value as Exercise]),
          }),
        );
      });
  }
}
