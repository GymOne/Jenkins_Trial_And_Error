import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal, ModalDismissReasons, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {CreateExercise, LoadExercises} from "../../shared/stores/actions/exercise.action";
import {ExerciseState} from "../../shared/stores/states/exercise.state";
import {Exercise} from "../../shared/stores/exercise.entity";
import {ExerciseService} from "../../shared/service/exercise.service";

@Component({
  selector: 'app-tracking',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class ExerciseComponent implements OnInit {
  name = ''
  isAddMode: boolean = true;
  @Select(ExerciseState.getExercises)
  exercises$!: Observable<Exercise[]>;

  constructor(private store:Store,private workoutService:ExerciseService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = true;
  }


  ngOnInit(): void {
    this.store.dispatch(new LoadExercises)
  }

  createExercise(name:string){
    this.store.dispatch(new CreateExercise(name))
  }

  open(content: any, isAddMode: boolean) {
    this.isAddMode = isAddMode;
    this.modalService.open(content);
  }

  open2(content: any) {
    this.modalService.open(content);
  }
}
