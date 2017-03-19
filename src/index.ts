import { Widget } from '@phosphor/widgets';
import { CommandRegistry } from '@phosphor/commands';
import { BoxPanel, DockPanel, Menu, MenuBar } from '@phosphor/widgets';
import { Content } from '../src/widgets/src/content';
import { Toggle } from '../src/widgets/src/toggle';
import { Button } from '../src/widgets/src/button';
import { Sidebar } from '../src/widgets/src/sidebar';

import 'font-awesome/css/font-awesome.min.css';
import '../style/index.css';

const commands = new CommandRegistry();

function main(): void {

  commands.addCommand('cut', {
    label: 'Cut',
    mnemonic: 1,
    icon: 'fa fa-cut',
    execute: () => {
      console.log('Cut');
    }
  });

  commands.addCommand('copy', {
    label: 'Copy File',
    mnemonic: 0,
    icon: 'fa fa-copy',
    execute: () => {
      console.log('Copy');
    }
  });

  commands.addCommand('paste', {
    label: 'Paste',
    mnemonic: 0,
    icon: 'fa fa-paste',
    execute: () => {
      console.log('Paste');
    }
  });

  commands.addCommand('new-tab', {
    label: 'New Tab',
    mnemonic: 0,
    caption: 'Open a new tab',
    icon: 'fa fa-plus',
    execute: () => {
      let content = new Content('New');
      dock.addWidget(content);
    }
  });

  commands.addCommand('close', {
    label: 'Close',
    mnemonic: 0,
    icon: 'fa fa-close',
    execute: () => {
      console.log('Close');
    }
  });

  commands.addCommand('default-theme', {
    label: 'Default theme',
    mnemonic: 0,
    icon: 'fa fa-paint-brush',
    execute: () => {
      console.log('Default theme');
    }
  });

  commands.addCommand('clean-theme', {
    label: 'Clean theme',
    mnemonic: 0,
    icon: 'fa fa-tint',
    execute: () => {
      console.log('Clean theme');
    }
  });

  commands.addCommand('toggle', {
    label: 'Toggle',
    mnemonic: 0,
    icon: 'fa fa-plus',
    execute: () => {
      console.log('Toggle');
    }
  });

  let menu1 = new Menu({ commands });
  menu1.title.label = 'File';
  menu1.title.mnemonic = 0;
  menu1.addItem({ command: 'new-tab' });
  menu1.addItem({ type: 'separator' });
  menu1.addItem({ command: 'close' });

  let menu2 = new Menu({ commands });
  menu2.title.label = 'Theme';
  menu2.title.mnemonic = 0;
  menu2.addItem({ command: 'default-theme' });
  menu2.addItem({ command: 'clean-theme' });

  let ctxt = new Menu({ commands });
  ctxt.addItem({ command: 'copy' });
  ctxt.addItem({ command: 'cut' });
  ctxt.addItem({ command: 'paste' });

  let bar = new MenuBar();
  bar.addMenu(menu1);
  bar.addMenu(menu2);
  bar.id = 'menuBar';

  let toggle = new Toggle({onLabel: 'ON', offLabel: 'OFF', command: 'toggle', commands: commands});
  toggle.id = 'daylightToggle';
  bar.node.appendChild(toggle.node);

  let sidebar = new Sidebar();
  sidebar.id = 'sidebar';

  let button = new Button({label: 'New Tab', command: 'new-tab', commands: commands});
  sidebar.addWidget(button);

  document.addEventListener('contextmenu', (event: MouseEvent) => {
    event.preventDefault();
    ctxt.open(event.clientX, event.clientY);
    console.log('ctxt menu');
  });

  let r1 = new Content('Red');
  let b1 = new Content('Blue');

  let dock = new DockPanel();
  dock.addWidget(r1);
  dock.addWidget(b1);
  dock.id = 'dock';

  BoxPanel.setStretch(dock, 1);

  let main = new BoxPanel({ direction: 'left-to-right', spacing: 0 });
  main.id = 'main';
  main.addWidget(sidebar);
  main.addWidget(dock);

  window.onresize = () => { main.update(); };

  Widget.attach(bar, document.body);
  Widget.attach(main, document.body);
}

window.onload = main;
