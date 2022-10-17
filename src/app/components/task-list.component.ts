import { Component } from '@angular/core';
import { Store } from '@ngxs/store'; // read data from the store
import { ArchiveTask, PinTask } from '../state/task.state';
import { Observable } from 'rxjs';


// keep the presentational version of the TaskList separate is that it is easier to test and isolate.
// As it doesn't rely on the presence of a store, it is much easier to deal with from a testing perspective.
@Component({
  selector: 'app-task-list',
  template: `
    <app-pure-task-list
      [tasks]="tasks$ | async"
      (onArchiveTask)="archiveTask($event)"
      (onPinTask)="pinTask($event)"
    ></app-pure-task-list>
  `,
})
export class TaskListComponent {
  tasks$?: Observable<any>;

  constructor(private store: Store) {
     this.tasks$ = store.select((state) => state.taskbox.tasks);
  }

  /**
   * Component method to trigger the archiveTask event
   */
  archiveTask(id: string) {
    this.store.dispatch(new ArchiveTask(id));
  }

  /**
   * Component method to trigger the pinTask event
   */
  pinTask(id: string) {
    this.store.dispatch(new PinTask(id));
  }
}