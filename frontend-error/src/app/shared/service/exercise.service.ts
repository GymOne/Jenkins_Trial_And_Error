import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExerciseDto} from "./dto/ExerciseDto";
import {Observable} from "rxjs";
import {Exercise} from "../stores/exercise.entity";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private _http: HttpClient) { }

  createExercise(exerciseDto: ExerciseDto){
    return this._http.post('http://localhost:3000/exercise/create', exerciseDto)
  }

  getAllExercise():Observable<Exercise[]>{
    return this._http.get<Exercise[]>('http://localhost:3000/exercise/findAllExercise')
  }
}
