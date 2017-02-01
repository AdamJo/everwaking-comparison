import 'package:angular2/core.dart';
import 'card_component.dart';

@Component(
  selector: 'my-app',
  template: '<div class="flex-container"><card></card></div>',
  directives: const [CardComponent]
)

class AppComponent implements OnInit {}