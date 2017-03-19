import { Widget } from '@phosphor/widgets';
import { CommandRegistry } from '@phosphor/commands';

import '../style/toggle.css';

export
class Toggle extends Widget {
  
  /**
   * Widget state.
   */
  toggled = false;

  /**
   * The commands object.
   */
  commands: CommandRegistry;

  /**
   * Command to execute for on click event.
   */
  command: string;

  static createNode(onLabel: string, offLabel: string): HTMLElement {
    let node = document.createElement('div');
    node.innerHTML = `<i class='fa btn'></i>
                      <label class='on'>${onLabel}</label>
                      <label class='off'>${offLabel}</label>`;
    return node;
  }

  constructor(options: Toggle.IOptions) {
    super({ node: Toggle.createNode(options.onLabel, options.offLabel) }); 
    this.command = options.command;
    this.commands = options.commands;    
    this.node.onclick = () => this.onclick();
    this.addClass('toggle');
  }

  onclick() {
    this.toggled = !this.toggled;
    this.toggleClass('on');
    this.commands.execute(this.command);
  }

  onCloseRequest() {
    this.dispose();
  }
}


/**
 * The namespace for the `Toggle` class.
 */
export
namespace Toggle {

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
     * The label for the on state.
     */
    onLabel: string;

    /**
     * The label for the off state.
     */
    offLabel: string;
  }
}