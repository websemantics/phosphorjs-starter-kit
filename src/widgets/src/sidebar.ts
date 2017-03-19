import { Widget } from '@phosphor/widgets';
import '../style/sidebar.css';

export
class Sidebar extends Widget {
  
  static createNode(): HTMLElement {
    let node = document.createElement('div');
    return node;
  }

  constructor() {
    super({ node: Sidebar.createNode() }); 
    this.addClass('sidebar');
  }

  addWidget(widget: Widget){
    this.node.appendChild(widget.node);
  }

  onCloseRequest() {
    this.dispose();
  }
}