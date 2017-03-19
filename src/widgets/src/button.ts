import { Widget } from '@phosphor/widgets';
import { CommandRegistry } from '@phosphor/commands';

import '../style/button.css';

export
class Button extends Widget {
  
  /**
   * The commands object.
   */
  commands: CommandRegistry;

  /**
   * Command to execute for on click event.
   */
  command: string;

  static createNode(label: string): HTMLElement {
    let node = document.createElement('button');
    node.textContent = label;
    return node;
  }

  constructor(options: Button.IOptions) {
    super({ node: Button.createNode(options.label) }); 
    this.command = options.command;
    this.commands = options.commands;    
    this.node.onclick = () => this.onclick();
    this.addClass('button');
  }

  onclick() {
    this.commands.execute(this.command);
  }

  onCloseRequest() {
    this.dispose();
  }
}

/**
 * The namespace for the `Button` class.
 */
export
namespace Button {

  /**
   * An options object for initializing a toggle button.
   */
  export
  interface IOptions {
    /**
     * The commands object.
     */
    commands: CommandRegistry;

    /**
     * On click command.
     */
    command: string;

    /**
     * The label.
     */
    label: string;
  }
}