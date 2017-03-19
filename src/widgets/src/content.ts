import { Widget } from '@phosphor/widgets';
import '../style/content.css';

/**
 * Disposable content widget
 */
export
class Content extends Widget {

  constructor(label: string) {
    super();
    this.addClass('content');
    this.title.label = label;
    this.title.closable = true;
  }

  onCloseRequest() {
    this.dispose();
  }
}
