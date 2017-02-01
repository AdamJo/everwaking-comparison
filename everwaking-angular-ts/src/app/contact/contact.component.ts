import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  template: 
  `
    <div class="contacts light">
      <ul class="on-light content">
        <li>
          <b>adam.johannesmeyer@gmail.com</b>
        </li>
        <li>
          Full Stack Developer
        </li>
        <li class="github-link">
          <a class="on-light-link" href="https://github.com/adamjo">Github</a>
        </li>
      </ul>
    </div>
  `,
  styles: [`
      .contacts {
        flex: 1;
        padding-top: 20px;
      }

      ul {
        margin: 0;
        padding: 0;
      }

      li {
        list-style-type: none;
        margin-bottom: 10px;
        width: 100%;
      }

      .contact-link {
        color: hsl(0, 0%, 90%);
      }

      .contact-link:visited {
        color: hsl(0, 0%, 80%);
      }

      .contact-link:active {
        color: hsl(0, 0%, 85%);
      }

      .github-link {
        padding: 10px 0;
      }

      li:first-child {
        border-bottom: 1px solid grey;
        width: 90%;
        margin: auto;
        margin-bottom: 10px;
      }

      li:last-child {
        margin-bottom: 0px;
      }
    `]
})
export class ContactComponent {}
