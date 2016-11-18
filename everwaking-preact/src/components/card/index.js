import { h, Component } from 'preact';
import style from './style';

import Contact from '../contact';
import CurrentProject from '../current-project';

export default class Card extends Component {

	componentDidMount() {
		const docStyle = document.documentElement.style;
		const el = document.getElementById("nope");
		el.addEventListener("mousemove", (element) => {
				let x = element.clientX;
				let y = element.clientY;

				let height = window.innerHeight;
				let width = window.innerWidth;

				let calcX = (19 + (width / x)) / (width / x);
				let calcY = (19 + (height / y)) / (height / y);

				if (calcX > 10.5) {
					calcX = ((calcX) * -1 + 10);
				} else {
					calcX = (calcX - 10) * -1;
				}

				if (calcY > 10.5) {
					calcY = ((calcY) * -1 + 10);
				} else {
					calcY = (calcY - 10) * -1;
				}

				if (isNaN(calcX) || isNaN(calcY)) {
					calcX = 0;
					calcY = 0;
				}

				docStyle.setProperty('--x', calcX+'px');
				docStyle.setProperty('--y', calcY+'px');
		})
	}

	render() {
		return (
      <div id="nope" class="card">
      <div class="card-info">
        <Contact/>
        <CurrentProject/>
      </div>
      </div>
		);
	}
}
