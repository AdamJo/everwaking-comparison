import { Component } from '@angular/core';

@Component({
  selector: 'card',
  template: 
  `
      <div class="card">
        <div class="card-info">
          <contact></contact>
          <current-project></current-project>
        </div>
      </div>
  `,
  styles: [`
      .card {
      display: flex;
      flex-direction: row;
      justify-content: center;
      height: 100%;
    }

    .card-info {
      box-shadow: var(--x) var(--y) 5px rgba(100, 100, 100, .4);

      margin: auto;
      min-height: 250px;
      min-width: 400px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-wrap: wrap;
    }
  `]
})
export class CardComponent {}
