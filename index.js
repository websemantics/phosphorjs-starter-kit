webpackJsonp([0],{

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./index.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var widgets_1 = __webpack_require__(7);
__webpack_require__(91);
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(options) {
        var _this = _super.call(this, { node: Button.createNode(options.label) }) || this;
        _this.command = options.command;
        _this.commands = options.commands;
        _this.node.onclick = function () { return _this.onclick(); };
        _this.addClass('button');
        return _this;
    }
    Button.createNode = function (label) {
        var node = document.createElement('button');
        node.textContent = label;
        return node;
    };
    Button.prototype.onclick = function () {
        this.commands.execute(this.command);
    };
    Button.prototype.onCloseRequest = function () {
        this.dispose();
    };
    return Button;
}(widgets_1.Widget));
exports.Button = Button;


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var widgets_1 = __webpack_require__(7);
__webpack_require__(92);
/**
 * Disposable content widget
 */
var Content = (function (_super) {
    __extends(Content, _super);
    function Content(label) {
        var _this = _super.call(this) || this;
        _this.addClass('content');
        _this.title.label = label;
        _this.title.closable = true;
        return _this;
    }
    Content.prototype.onCloseRequest = function () {
        this.dispose();
    };
    return Content;
}(widgets_1.Widget));
exports.Content = Content;


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var widgets_1 = __webpack_require__(7);
__webpack_require__(93);
var Sidebar = (function (_super) {
    __extends(Sidebar, _super);
    function Sidebar() {
        var _this = _super.call(this, { node: Sidebar.createNode() }) || this;
        _this.addClass('sidebar');
        return _this;
    }
    Sidebar.createNode = function () {
        var node = document.createElement('div');
        return node;
    };
    Sidebar.prototype.addWidget = function (widget) {
        this.node.appendChild(widget.node);
    };
    Sidebar.prototype.onCloseRequest = function () {
        this.dispose();
    };
    return Sidebar;
}(widgets_1.Widget));
exports.Sidebar = Sidebar;


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var widgets_1 = __webpack_require__(7);
__webpack_require__(94);
var Toggle = (function (_super) {
    __extends(Toggle, _super);
    function Toggle(options) {
        var _this = _super.call(this, { node: Toggle.createNode(options.onLabel, options.offLabel) }) || this;
        /**
         * Widget state.
         */
        _this.toggled = false;
        _this.command = options.command;
        _this.commands = options.commands;
        _this.node.onclick = function () { return _this.onclick(); };
        _this.addClass('toggle');
        return _this;
    }
    Toggle.createNode = function (onLabel, offLabel) {
        var node = document.createElement('div');
        node.innerHTML = "<i class='fa switch'></i>\n                      <label class='on'>" + onLabel + "</label>\n                      <label class='off'>" + offLabel + "</label>";
        return node;
    };
    Toggle.prototype.onclick = function () {
        this.toggled = !this.toggled;
        this.toggleClass('on');
        this.commands.execute(this.command);
    };
    Toggle.prototype.onCloseRequest = function () {
        this.dispose();
    };
    return Toggle;
}(widgets_1.Widget));
exports.Toggle = Toggle;


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".p-Widget.button {\n    font-size: 12px;\n    background-color: transparent;\n    border: 1px solid #DDDDDD;\n    color: #000;\n    border-radius: 2px;\n    cursor: pointer;\n    display: inline-block;\n    letter-spacing: .1rem;\n    line-height: 20px;\n    padding: 0 5px;\n    margin: 10px;\n    text-align: center;\n    text-decoration: none;\n    white-space: nowrap;\n}\n\n.p-Widget.button:hover {\n    background-color: rgba(0,0,0, 0.05);\n}\n\n.p-Widget.button:active {\n    background-color: rgba(0,0,0, 0.1);\n}\n\n.p-Widget.button:focus {\n    outline: none;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".p-Widget.content {\n  min-width: 50px;\n  min-height: 50px;\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n  border: 1px solid #DDDDDD;\n  border-top: none;\n  background-color: #FFFFFF;\n}", ""]);

// exports


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".p-Widget.sidebar {\n    min-width: 250px;\n    background-color: #F6F6F6;\n}", ""]);

// exports


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".p-Widget.toggle {\n    font-size: 15px;\n    padding: 3px 10px;\n    min-width: 70px;\n    cursor: pointer;\n    color: #AAAAAA;\n    -moz-user-select: none;\n    -khtml-user-select: none;\n    -webkit-user-select: none;\n}\n\n.p-Widget.toggle label {\n    display: inline-block;\n    padding: 1px 0 0 2px;\n    vertical-align: top;\n    font: 12px Helvetica, Arial, sans-serif;\n}\n\n.p-Widget.toggle label.off,\n.p-Widget.toggle.on label.on {\n    display: inline-block;\n}\n\n.p-Widget.toggle label.on,\n.p-Widget.toggle.on label.off {\n    display: none;\n}\n\n.p-Widget.toggle .switch {\n    font-size: 16px;\n}\n\n.p-Widget.toggle .switch:before {\n    content: \"\\F204\";\n}\n\n.p-Widget.toggle.on .switch:before {\n    content: \"\\F205\";\n}\n\n.p-Widget.toggle.on .switch:before {\n    color: #FFFFFF;\n    content: \"\\F205\";\n}\n\n", ""]);

// exports


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "body.\\--dark {\n    background-color: #393B4B;\n}\n\n.\\--dark .p-Widget,\n.\\--dark .p-TabBar-tab,\n.\\--dark .p-TabBar-content,\n.\\--dark .p-Menu-item > div::after,\n.\\--dark .p-TabBar-tab:hover:not(.p-mod-current),\n.\\--dark .p-MenuBar.p-mod-active .p-MenuBar-item.p-mod-active {\n    color: #e2e4e9;\n    border-color: #2E343D!important;\n}\n\n.\\--dark .p-Widget.button:hover,\n.\\--dark .p-Menu-item.p-mod-active,\n.\\--dark .p-TabBar-tab.p-mod-current,\n.\\--dark .p-MenuBar .p-MenuBar-item.p-mod-active,\n.\\--dark .p-MenuBar.p-mod-active .p-MenuBar-item.p-mod-active {\n    color: #ffffff;\n}\n\n.\\--dark .p-Menu,\n.\\--dark .p-MenuBar-item.p-mod-active,\n.\\--dark .p-Widget.p-Menu.p-MenuBar-menu,\n.\\--dark .p-TabBar-tab:hover:not(.p-mod-current) {\n    background-color: #383d47!important;\n}\n\n.\\--dark .p-MenuBar,\n.\\--dark .p-Widget.content,\n.\\--dark .p-Widget.sidebar,\n.\\--dark .p-TabBar-tab.p-mod-current {\n    background-color: #404551;\n}\n\n.\\--dark .p-TabBar-tab,\n.\\--dark .p-Menu-item.p-mod-active {\n    background-color: #2d3139;\n}", ""]);

// exports


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports
exports.i(__webpack_require__(66), "");
exports.i(__webpack_require__(69), "");
exports.i(__webpack_require__(83), "");
exports.i(__webpack_require__(84), "");
exports.i(__webpack_require__(85), "");
exports.i(__webpack_require__(86), "");
exports.i(__webpack_require__(81), "");

// module
exports.push([module.i, "/*-----------------------------------------------------------------------------\n| Copyright (c) 2014-2017, PhosphorJS Contributors\n|\n| Distributed under the terms of the BSD 3-Clause License.\n|\n| The full license is in the file LICENSE, distributed with this software.\n|----------------------------------------------------------------------------*/\n\nbody {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n\n#menuBar {\n  flex: 0 0 auto;\n}\n\n#main {\n  flex: 1 1 auto;\n}\n\n#sidebar {\n  min-width: 250px;\n  border-right: 1px solid #DDDDDD;\n}\n\n#dock {\n  padding: 4px;\n}\n\n#daylightToggle {\n  position: absolute;\n  top:0;\n  right:0;\n}", ""]);

// exports


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "/*-----------------------------------------------------------------------------\n| Copyright (c) 2014-2017, PhosphorJS Contributors\n|\n| Distributed under the terms of the BSD 3-Clause License.\n|\n| The full license is in the file LICENSE, distributed with this software.\n|----------------------------------------------------------------------------*/\n\n\n.p-DockPanel-overlay {\n  background: rgba(255, 255, 255, 0.6);\n  border: 1px dashed black;\n  transition-property: top, left, right, bottom;\n  transition-duration: 150ms;\n  transition-timing-function: ease;\n}\n", ""]);

// exports


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "/*-----------------------------------------------------------------------------\n| Copyright (c) 2014-2017, PhosphorJS Contributors\n|\n| Distributed under the terms of the BSD 3-Clause License.\n|\n| The full license is in the file LICENSE, distributed with this software.\n|----------------------------------------------------------------------------*/\n\n\n.p-Menu {\n  padding: 3px 0px;\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n  border: 1px solid #C0C0C0;\n  font: 12px Helvetica, Arial, sans-serif;\n  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.2);\n}\n\n\n.p-Menu-item.p-mod-active {\n  background: #E5E5E5;\n}\n\n\n.p-Menu-item.p-mod-disabled {\n  color: rgba(0, 0, 0, 0.25);\n}\n\n\n.p-Menu-itemIcon {\n  width: 21px;\n  padding: 4px 2px;\n}\n\n\n.p-Menu-itemLabel {\n  padding: 4px 35px 4px 2px;\n}\n\n\n.p-Menu-itemMnemonic {\n  text-decoration: underline;\n}\n\n\n.p-Menu-itemShortcut {\n  padding: 4px 0px;\n}\n\n\n.p-Menu-itemSubmenuIcon {\n  width: 16px;\n  padding: 4px 0px;\n}\n\n\n.p-Menu-item[data-type='separator'] > div {\n  padding: 0;\n  height: 9px;\n}\n\n\n.p-Menu-item[data-type='separator'] > div::after {\n  content: '';\n  display: block;\n  position: relative;\n  top: 4px;\n  border-top: 1px solid #DDDDDD;\n}\n\n\n.p-Menu-itemIcon::before,\n.p-Menu-itemSubmenuIcon::before {\n  font-family: FontAwesome;\n}\n\n\n.p-Menu-item.p-mod-toggled > .p-Menu-itemIcon::before {\n  content: '\\F00C';\n}\n\n\n.p-Menu-item[data-type='submenu'] > .p-Menu-itemSubmenuIcon::before {\n  content: '\\F0DA';\n}\n", ""]);

// exports


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "/*-----------------------------------------------------------------------------\n| Copyright (c) 2014-2017, PhosphorJS Contributors\n|\n| Distributed under the terms of the BSD 3-Clause License.\n|\n| The full license is in the file LICENSE, distributed with this software.\n|----------------------------------------------------------------------------*/\n\n\n.p-MenuBar {\n  padding-left: 5px;\n  background: #F6F6F6;\n  color: rgba(0, 0, 0, 0.87);\n  border-bottom: 1px solid #DDDDDD;\n  font: 13px Helvetica, Arial, sans-serif;\n}\n\n\n.p-MenuBar-menu {\n  transform: translateY(-1px);\n}\n\n\n.p-MenuBar-item {\n  padding: 4px 8px;\n  border-left: 1px solid transparent;\n  border-right: 1px solid transparent;\n}\n\n\n.p-MenuBar-item.p-mod-active {\n  background: #E5E5E5;\n}\n\n\n.p-MenuBar.p-mod-active .p-MenuBar-item.p-mod-active {\n  z-index: 10001;\n  background: white;\n  border-left: 1px solid #C0C0C0;\n  border-right: 1px solid #C0C0C0;\n  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);\n}\n", ""]);

// exports


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "/*-----------------------------------------------------------------------------\n| Copyright (c) 2014-2017, PhosphorJS Contributors\n|\n| Distributed under the terms of the BSD 3-Clause License.\n|\n| The full license is in the file LICENSE, distributed with this software.\n|----------------------------------------------------------------------------*/\n\n\n.p-TabBar {\n  min-height: 24px;\n  max-height: 24px;\n}\n\n\n.p-TabBar-content {\n  min-width: 0;\n  min-height: 0;\n  align-items: flex-end;\n  border-bottom: 1px solid #DDDDDD;\n}\n\n\n.p-TabBar-tab {\n  color: #BBBBBB;\n  padding: 0px 10px;\n  background: #F6F6F6;\n  border: 1px solid #DDDDDD;\n  border-bottom: none;\n  font: 12px Helvetica, Arial, sans-serif;\n  flex: 0 1 125px;\n  min-height: 20px;\n  max-height: 20px;\n  min-width: 35px;\n  margin-left: -1px;\n  line-height: 20px;\n}\n\n\n.p-TabBar-tab.p-mod-current {\n  background: white;\n  color: #000;\n}\n\n\n.p-TabBar-tab:hover:not(.p-mod-current) {\n  color: #999999;\n  background: #F0F0F0;\n}\n\n\n.p-TabBar-tab:first-child {\n  margin-left: 0;\n}\n\n\n.p-TabBar-tab.p-mod-current {\n  min-height: 23px;\n  max-height: 23px;\n  transform: translateY(1px);\n}\n\n\n.p-TabBar-tabIcon,\n.p-TabBar-tabLabel,\n.p-TabBar-tabCloseIcon {\n  display: inline-block;\n}\n\n\n.p-TabBar-tab.p-mod-closable > .p-TabBar-tabCloseIcon {\n  margin-left: 4px;\n}\n\n\n.p-TabBar-tab.p-mod-closable > .p-TabBar-tabCloseIcon:before {\n  content: '\\F00D';\n  font-family: FontAwesome;\n}\n\n\n.p-TabBar-tab.p-mod-drag-image {\n  min-height: 23px;\n  max-height: 23px;\n  min-width: 125px;\n  border: none;\n  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n  transform: translateX(-40%) translateY(-58%);\n}\n", ""]);

// exports


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./button.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./button.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./content.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./content.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./sidebar.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./sidebar.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./toggle.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./toggle.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var widgets_1 = __webpack_require__(7);
var commands_1 = __webpack_require__(15);
var widgets_2 = __webpack_require__(7);
var content_1 = __webpack_require__(31);
var toggle_1 = __webpack_require__(33);
var button_1 = __webpack_require__(30);
var sidebar_1 = __webpack_require__(32);
__webpack_require__(28);
__webpack_require__(29);
var commands = new commands_1.CommandRegistry();
function main() {
    commands.addCommand('cut', {
        label: 'Cut',
        mnemonic: 1,
        icon: 'fa fa-cut',
        execute: function () {
            console.log('Cut');
        }
    });
    commands.addCommand('copy', {
        label: 'Copy File',
        mnemonic: 0,
        icon: 'fa fa-copy',
        execute: function () {
            console.log('Copy');
        }
    });
    commands.addCommand('paste', {
        label: 'Paste',
        mnemonic: 0,
        icon: 'fa fa-paste',
        execute: function () {
            console.log('Paste');
        }
    });
    commands.addCommand('new-tab', {
        label: 'New Tab',
        mnemonic: 0,
        caption: 'Open a new tab',
        icon: 'fa fa-plus',
        execute: function () {
            var content = new content_1.Content('New');
            dock.addWidget(content);
        }
    });
    commands.addCommand('close', {
        label: 'Close',
        mnemonic: 0,
        icon: 'fa fa-close',
        execute: function () {
            console.log('Close');
        }
    });
    commands.addCommand('default-theme', {
        label: 'Default theme',
        mnemonic: 0,
        icon: 'fa fa-paint-brush',
        execute: function () {
            console.log('Default theme');
        }
    });
    commands.addCommand('clean-theme', {
        label: 'Clean theme',
        mnemonic: 0,
        icon: 'fa fa-tint',
        execute: function () {
            console.log('Clean theme');
        }
    });
    commands.addCommand('dark-toggle', {
        label: 'Toggle',
        mnemonic: 0,
        icon: 'fa fa-plus',
        execute: function () {
            document.body.classList.toggle('--dark');
        }
    });
    var menu1 = new widgets_2.Menu({ commands: commands });
    menu1.title.label = 'File';
    menu1.title.mnemonic = 0;
    menu1.addItem({ command: 'new-tab' });
    menu1.addItem({ type: 'separator' });
    menu1.addItem({ command: 'close' });
    var menu2 = new widgets_2.Menu({ commands: commands });
    menu2.title.label = 'Theme';
    menu2.title.mnemonic = 0;
    menu2.addItem({ command: 'default-theme' });
    menu2.addItem({ command: 'clean-theme' });
    var ctxt = new widgets_2.Menu({ commands: commands });
    ctxt.addItem({ command: 'copy' });
    ctxt.addItem({ command: 'cut' });
    ctxt.addItem({ command: 'paste' });
    var bar = new widgets_2.MenuBar();
    bar.addMenu(menu1);
    bar.addMenu(menu2);
    bar.id = 'menuBar';
    var toggle = new toggle_1.Toggle({ onLabel: 'Dark', offLabel: 'Light', command: 'dark-toggle', commands: commands });
    toggle.id = 'daylightToggle';
    bar.node.appendChild(toggle.node);
    var sidebar = new sidebar_1.Sidebar();
    sidebar.id = 'sidebar';
    var button = new button_1.Button({ label: 'New Tab', command: 'new-tab', commands: commands });
    sidebar.addWidget(button);
    document.addEventListener('contextmenu', function (event) {
        event.preventDefault();
        ctxt.open(event.clientX, event.clientY);
        console.log('ctxt menu');
    });
    var r1 = new content_1.Content('Red');
    var b1 = new content_1.Content('Blue');
    var dock = new widgets_2.DockPanel();
    dock.addWidget(r1);
    dock.addWidget(b1);
    dock.id = 'dock';
    widgets_2.BoxPanel.setStretch(dock, 1);
    var main = new widgets_2.BoxPanel({ direction: 'left-to-right', spacing: 0 });
    main.id = 'main';
    main.addWidget(sidebar);
    main.addWidget(dock);
    window.onresize = function () { main.update(); };
    widgets_1.Widget.attach(bar, document.body);
    widgets_1.Widget.attach(main, document.body);
}
window.onload = main;


/***/ })

},[95]);