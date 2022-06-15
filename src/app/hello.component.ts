import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  tasks: Array<string> = [];
  task: string = '';

  addTask() {
    this.tasks.push(this.task);
  }
  deleteTask(idx: number) {
    this.tasks = this.tasks.filter((task, index) => {
      return index !== idx;
    });
  }
}
