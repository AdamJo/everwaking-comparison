import { h, Component } from 'preact';
import style from './style';

export default class Contact extends Component {
	render() {
		return (
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
		);
	}
}
