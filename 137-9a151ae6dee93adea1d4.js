(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{"+Uxa":function(e,t,n){"use strict";n.r(t),n.d(t,"_demoSrcFiles",(function(){return a}));var r=n("mXGw"),o=n.n(r),s=n("ozwr");t.default=function(){return o.a.createElement(s.a,{type:"atm"})};var a={".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.8.3",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo1";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"src/styles.less":"","../../esm/index.js":'export * from "./_/index.js";',"../../esm/_/index.js":"// 这个文件作为js编译入口\nexport { default as Input } from './components/input';\nexport { default as Menu } from './components/menu';\nexport { default as Nav } from './components/nav';\nexport { default as Tag } from './components/tag';\nexport { default as Icon } from './components/icon';\nexport { default as Grid } from './components/grid';\nexport { default as Button } from './components/button';\nexport { default as MenuButton } from './components/menu-button';\nexport { default as SplitButton } from './components/split-button';\nexport { default as Breadcrumb } from './components/breadcrumb';\nexport { default as Step } from './components/step';\nexport { default as Tab } from './components/tab';\nexport { default as Pagination } from './components/pagination';\nexport { default as Form } from './components/form';\nexport { default as Field } from './components/field';\nexport { default as Checkbox } from './components/checkbox';\nexport { default as Radio } from './components/radio';\nexport { default as Select } from './components/select';\nexport { default as TreeSelect } from './components/tree-select';\nexport { default as CascaderSelect } from './components/cascader-select';\nexport { default as DatePicker } from './components/date-picker';\nexport { default as TimePicker } from './components/time-picker';\nexport { default as NumberPicker } from './components/number-picker';\nexport { default as Switch } from './components/switch';\nexport { default as Range } from './components/range';\nexport { default as Rating } from './components/rating';\nexport { default as Transfer } from './components/transfer';\nexport { default as Upload } from './components/upload';\nexport { default as Search } from './components/search';\nexport { default as Table } from './components/table';\nexport { default as Collapse } from './components/collapse';\nexport { default as Card } from './components/card';\nexport { default as Badge } from './components/badge';\nexport { default as Slider } from './components/slider';\nexport { default as Calendar } from './components/calendar';\nexport { default as Progress } from './components/progress';\nexport { default as Timeline } from './components/timeline';\nexport { default as Tree } from './components/tree';\nexport { default as Cascader } from './components/cascader';\nexport { default as Message } from './components/message';\nexport { default as Dialog } from './components/dialog';\nexport { default as Balloon } from './components/balloon';\nexport { default as Loading } from './components/loading';\nexport { default as ConfigProvider } from './components/config-provider';\nexport { default as Overlay } from './components/overlay';\nexport { default as Dropdown } from './components/dropdown';\nexport { default as Animate } from './components/animate';\nexport { default as Affix } from './components/affix';","../../esm/_/components/input/index.js":"import Input from '@alifd/next/lib/input';\nexport default Input;","../../esm/_/components/menu/index.js":"import Menu from '@alifd/next/lib/menu';\nexport default Menu;","../../esm/_/components/nav/index.js":"import Nav from '@alifd/next/lib/nav';\nexport default Nav;","../../esm/_/components/icon/index.js":"import Icon from '@alifd/next/lib/icon';\nexport default Icon;","../../esm/_/components/tag/index.js":"import Tag from '@alifd/next/lib/tag';\nimport Colored from './Colored';\nimport ColoredGroup from './ColoredGroup';\nimport { PROTECTED_TYPE } from './constants';\nTag.Colored = Colored;\nTag.ColoredGroup = ColoredGroup; // Add protected property as component indentity\n\nTag[PROTECTED_TYPE] = 'Tag';\nexport default Tag;","../../esm/_/components/grid/index.js":"import Grid from '@alifd/next/lib/grid';\nexport default Grid;","../../esm/_/components/button/index.js":"import Button from '@alifd/next/lib/button';\nexport default Button;","../../esm/_/components/menu-button/index.js":"import MenuButton from '@alifd/next/lib/menu-button';\nexport default MenuButton;","../../esm/_/components/split-button/index.js":"import SplitButton from '@alifd/next/lib/split-button';\nexport default SplitButton;","../../esm/_/components/breadcrumb/index.js":"import Breadcrumb from '@alifd/next/lib/breadcrumb';\nexport default Breadcrumb;","../../esm/_/components/step/index.js":'import _Reflect$construct from "@babel/runtime-corejs2/core-js/reflect/construct";\nimport _extends from "@babel/runtime-corejs2/helpers/extends";\nimport _objectWithoutProperties from "@babel/runtime-corejs2/helpers/objectWithoutProperties";\nimport _classCallCheck from "@babel/runtime-corejs2/helpers/classCallCheck";\nimport _createClass from "@babel/runtime-corejs2/helpers/createClass";\nimport _inherits from "@babel/runtime-corejs2/helpers/inherits";\nimport _possibleConstructorReturn from "@babel/runtime-corejs2/helpers/possibleConstructorReturn";\nimport _getPrototypeOf from "@babel/runtime-corejs2/helpers/getPrototypeOf";\nimport _defineProperty from "@babel/runtime-corejs2/helpers/defineProperty";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nimport React, { Component } from \'react\';\nimport PropTypes from \'prop-types\';\nimport hoistStatics from \'hoist-non-react-statics\';\nimport classNames from \'classnames\';\nimport Step from \'@alifd/next/lib/step\';\nimport getDisplayName from \'../../utils/getDisplayName\';\nimport withWindConfig from \'../../utils/withWindConfig\';\n\n/* eslint-disable react/static-property-placement */\n\n/**\n * 提供size: \'small\'选项，（目前仅对圆形step有效）\n */\nvar enhance = function enhance(WrappedComponent) {\n  // eslint-disable-next-line react/prefer-stateless-function\n  var EnhancedStep = /*#__PURE__*/function (_Component) {\n    _inherits(EnhancedStep, _Component);\n\n    var _super = _createSuper(EnhancedStep);\n\n    function EnhancedStep() {\n      _classCallCheck(this, EnhancedStep);\n\n      return _super.apply(this, arguments);\n    }\n\n    _createClass(EnhancedStep, [{\n      key: "render",\n      value: function render() {\n        var _this$props = this.props,\n            size = _this$props.size,\n            windConfig = _this$props.windConfig,\n            className = _this$props.className,\n            restProps = _objectWithoutProperties(_this$props, ["size", "windConfig", "className"]);\n\n        var _restProps$shape = restProps.shape,\n            shape = _restProps$shape === void 0 ? \'circle\' : _restProps$shape,\n            _restProps$direction = restProps.direction,\n            direction = _restProps$direction === void 0 ? \'hoz\' : _restProps$direction,\n            _restProps$labelPlace = restProps.labelPlacement,\n            labelPlacement = _restProps$labelPlace === void 0 ? \'\' : _restProps$labelPlace;\n        var prefix = windConfig && windConfig.prefix ? windConfig.prefix : \'next-\';\n        var sizeClassName = "".concat(prefix, "enhanced-step-size-").concat(size);\n        var dotClassName = [\'circle\', \'dot\'].includes(shape) && direction === \'hoz\' ? "".concat(prefix, "step-dot-circle-hoz").concat(labelPlacement ? \'-placement\' : \'\') : \'\';\n        return /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, restProps, {\n          className: classNames(sizeClassName, className, dotClassName)\n        }));\n      }\n    }]);\n\n    return EnhancedStep;\n  }(Component);\n\n  _defineProperty(EnhancedStep, "displayName", "WindEnhanced(".concat(getDisplayName(WrappedComponent, \'Step\'), ")"));\n\n  _defineProperty(EnhancedStep, "propTypes", {\n    size: PropTypes.oneOf([\'medium\', \'small\']),\n    className: PropTypes.string\n  });\n\n  _defineProperty(EnhancedStep, "defaultProps", {\n    size: \'medium\'\n  });\n\n  hoistStatics(EnhancedStep, Step);\n  return EnhancedStep;\n};\n\nexport default withWindConfig(enhance(Step));',"src/demo/demo1.js":"import React from 'react'\nimport { Icon } from '@alicloud/console-components'\n\nconst Demo1 = () => ( <Icon type=\"atm\" /> )\nexport default Demo1","../../esm/_/components/tab/index.js":"import Tab from '@alifd/next/lib/tab';\nexport default Tab;","../../esm/_/components/pagination/index.js":"import Pagination from '@alifd/next/lib/pagination';\nexport default Pagination;","../../esm/_/components/form/index.js":"import _extends from \"@babel/runtime-corejs2/helpers/extends\";\nimport _typeof from \"@babel/runtime-corejs2/helpers/typeof\";\nimport * as React from 'react';\nimport Form from '@alifd/next/lib/form';\nimport hoistStatics from 'hoist-non-react-statics';\nvar Item = Form.Item;\nvar PropsCtx = React.createContext();\n\nvar WrappedForm = function WrappedForm(props) {\n  return /*#__PURE__*/React.createElement(PropsCtx.Provider, {\n    value: props\n  }, /*#__PURE__*/React.createElement(Form, props));\n};\n\nvar WrappedItem = function WrappedItem(props) {\n  return /*#__PURE__*/React.createElement(PropsCtx.Consumer, null, function (formProps) {\n    // fusion默认label靠右对齐，wind希望默认靠左对齐\n    var labelTextAlign = function () {\n      // Item有可能不用在Form中\n      if (_typeof(formProps) !== 'object') return 'left';\n      if (formProps.labelTextAlign === 'right') return 'right';\n      return 'left';\n    }();\n\n    return /*#__PURE__*/React.createElement(Item, _extends({\n      labelTextAlign: labelTextAlign\n    }, props));\n  });\n};\n\nhoistStatics(WrappedForm, Form);\nhoistStatics(WrappedItem, Item);\nWrappedForm.Item = WrappedItem;\nexport default WrappedForm;","../../esm/_/components/field/index.js":"import Field from '@alifd/next/lib/field';\nexport default Field;","../../esm/_/components/radio/index.js":"import Radio from '@alifd/next/lib/radio';\nexport default Radio;","../../esm/_/components/select/index.js":"import Select from '@alifd/next/lib/select';\nexport default Select;","../../esm/_/components/tree-select/index.js":"import TreeSelect from '@alifd/next/lib/tree-select';\nexport default TreeSelect;","../../esm/_/components/cascader-select/index.js":"import CascaderSelect from '@alifd/next/lib/cascader-select';\nexport default CascaderSelect;","../../esm/_/components/checkbox/index.js":"import Checkbox from '@alifd/next/lib/checkbox';\nexport default Checkbox;","../../esm/_/components/date-picker/index.js":'import _Object$defineProperty from "@babel/runtime-corejs2/core-js/object/define-property";\nimport _Object$defineProperties from "@babel/runtime-corejs2/core-js/object/define-properties";\nimport _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs2/core-js/object/get-own-property-descriptors";\nimport _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs2/core-js/object/get-own-property-descriptor";\nimport _Object$getOwnPropertySymbols from "@babel/runtime-corejs2/core-js/object/get-own-property-symbols";\nimport _Object$keys from "@babel/runtime-corejs2/core-js/object/keys";\nimport _Reflect$construct from "@babel/runtime-corejs2/core-js/reflect/construct";\nimport _objectWithoutProperties from "@babel/runtime-corejs2/helpers/objectWithoutProperties";\nimport _classCallCheck from "@babel/runtime-corejs2/helpers/classCallCheck";\nimport _createClass from "@babel/runtime-corejs2/helpers/createClass";\nimport _inherits from "@babel/runtime-corejs2/helpers/inherits";\nimport _possibleConstructorReturn from "@babel/runtime-corejs2/helpers/possibleConstructorReturn";\nimport _getPrototypeOf from "@babel/runtime-corejs2/helpers/getPrototypeOf";\nimport _defineProperty from "@babel/runtime-corejs2/helpers/defineProperty";\n\nfunction ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nimport React, { Component } from \'react\';\nimport PropTypes from \'prop-types\';\nimport DatePicker from \'@alifd/next/lib/date-picker\';\nimport moment from \'moment\';\n\n/**\n * Compatible `locale` to moment\'s locale format\n * moment\'s doesn\'t recognize regionless chinese locale like `zh`\n * @param {String} locale\n */\nvar fixLocale = function fixLocale(locale) {\n  return locale === \'zh\' ? \'zh-cn\' : locale;\n};\n/**\n * Give `format` prop a default value, based on current locale.\n */\n\n\nvar withIntlFormat = function withIntlFormat(WrappedComponent) {\n  var _class, _temp;\n\n  return (// eslint-disable-next-line react/prefer-stateless-function\n    _temp = _class = /*#__PURE__*/function (_Component) {\n      _inherits(H, _Component);\n\n      var _super = _createSuper(H);\n\n      function H() {\n        _classCallCheck(this, H);\n\n        return _super.apply(this, arguments);\n      }\n\n      _createClass(H, [{\n        key: "render",\n        // Access context temporary\n        // TODO: Will be refactor with PR\n        value: function render() {\n          var _this$props = this.props,\n              format = _this$props.format,\n              restProps = _objectWithoutProperties(_this$props, ["format"]); // Access context temporary\n          // TODO: Will be refactor with PR\n\n\n          var _this$context$nextLoc = this.context.nextLocale;\n          _this$context$nextLoc = _this$context$nextLoc === void 0 ? {} : _this$context$nextLoc;\n          var momentLocale = _this$context$nextLoc.momentLocale; // dummy momentInstance to normalize locale string\n\n          var momentInstance = moment();\n          var currentLocale = momentInstance.locale(fixLocale(momentLocale) || \'en\'); // if value is a moment instance already, get locale from it\n\n          var value = restProps.value,\n              defaultValue = restProps.defaultValue;\n          var exactValue = value || defaultValue;\n\n          if (moment.isMoment(exactValue)) {\n            currentLocale = exactValue.locale();\n          }\n\n          var defaultFormat = moment.localeData(currentLocale).longDateFormat(\'ll\');\n          var exactFormat = typeof format !== \'undefined\' ? format : defaultFormat;\n\n          var props = _objectSpread(_objectSpread({}, restProps), {}, {\n            format: exactFormat\n          });\n\n          return /*#__PURE__*/React.createElement(WrappedComponent, props);\n        }\n      }]);\n\n      return H;\n    }(Component), _defineProperty(_class, "displayName", "withIntlFormat(".concat(WrappedComponent.displayName, ")")), _defineProperty(_class, "propTypes", {\n      format: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object])\n    }), _defineProperty(_class, "contextTypes", {\n      nextLocale: PropTypes.objectOf(PropTypes.any)\n    }), _temp\n  );\n};\n\nvar RangePicker = DatePicker.RangePicker,\n    MonthPicker = DatePicker.MonthPicker,\n    YearPicker = DatePicker.YearPicker,\n    WeekPicker = DatePicker.WeekPicker;\nvar WrappedDatePicker = withIntlFormat(DatePicker);\nWrappedDatePicker.RangePicker = withIntlFormat(RangePicker);\nWrappedDatePicker.MonthPicker = withIntlFormat(MonthPicker);\nWrappedDatePicker.YearPicker = withIntlFormat(YearPicker);\nWrappedDatePicker.WeekPicker = withIntlFormat(WeekPicker);\nexport default WrappedDatePicker;',"../../esm/_/components/time-picker/index.js":"import TimePicker from '@alifd/next/lib/time-picker';\nexport default TimePicker;","../../esm/_/components/number-picker/index.js":"import NumberPicker from '@alifd/next/lib/number-picker';\nexport default NumberPicker;","../../esm/_/components/switch/index.js":"import Switch from '@alifd/next/lib/switch';\nexport default Switch;","../../esm/_/components/range/index.js":"import Range from '@alifd/next/lib/range';\nexport default Range;","../../esm/_/components/rating/index.js":"import Rating from '@alifd/next/lib/rating';\nexport default Rating;","../../esm/_/components/transfer/index.js":"import Transfer from '@alifd/next/lib/transfer';\nexport default Transfer;","../../esm/_/components/upload/index.js":"import Upload from '@alifd/next/lib/upload';\nexport default Upload;","../../esm/_/components/search/index.js":"import Search from '@alifd/next/lib/search';\nexport default Search;","../../esm/_/components/table/index.js":"import Table from '@alifd/next/lib/table';\nexport default Table;","../../esm/_/components/collapse/index.js":"import Collapse from '@alifd/next/lib/collapse';\nexport default Collapse;","../../esm/_/components/card/index.js":'import _Reflect$construct from "@babel/runtime-corejs2/core-js/reflect/construct";\nimport _extends from "@babel/runtime-corejs2/helpers/extends";\nimport _objectWithoutProperties from "@babel/runtime-corejs2/helpers/objectWithoutProperties";\nimport _classCallCheck from "@babel/runtime-corejs2/helpers/classCallCheck";\nimport _createClass from "@babel/runtime-corejs2/helpers/createClass";\nimport _inherits from "@babel/runtime-corejs2/helpers/inherits";\nimport _possibleConstructorReturn from "@babel/runtime-corejs2/helpers/possibleConstructorReturn";\nimport _getPrototypeOf from "@babel/runtime-corejs2/helpers/getPrototypeOf";\nimport _defineProperty from "@babel/runtime-corejs2/helpers/defineProperty";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nimport React, { Component } from \'react\';\nimport PropTypes from \'prop-types\';\nimport Card from \'@alifd/next/lib/card\';\nimport classNames from \'classnames\';\nimport hoistStatics from \'hoist-non-react-statics\';\nimport getDisplayName from \'../../utils/getDisplayName\';\nimport withWindConfig from \'../../utils/withWindConfig\';\n\nvar enhance = function enhance(WrappedComponent) {\n  // eslint-disable-next-line react/prefer-stateless-function\n  var EnhancedCard = /*#__PURE__*/function (_Component) {\n    _inherits(EnhancedCard, _Component);\n\n    var _super = _createSuper(EnhancedCard);\n\n    function EnhancedCard() {\n      _classCallCheck(this, EnhancedCard);\n\n      return _super.apply(this, arguments);\n    }\n\n    _createClass(EnhancedCard, [{\n      key: "render",\n      value: function render() {\n        var _this$props = this.props,\n            hasBorder = _this$props.hasBorder,\n            windConfig = _this$props.windConfig,\n            className = _this$props.className,\n            restProps = _objectWithoutProperties(_this$props, ["hasBorder", "windConfig", "className"]);\n\n        var prefix = windConfig && windConfig.prefix ? windConfig.prefix : \'next-\';\n        var borderClassName = hasBorder ? "".concat(prefix, "enhanced-card-has-border") : \'\';\n        return /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, restProps, {\n          className: classNames(borderClassName, className)\n        }));\n      }\n    }]);\n\n    return EnhancedCard;\n  }(Component);\n\n  _defineProperty(EnhancedCard, "displayName", "WindEnhanced(".concat(getDisplayName(WrappedComponent, \'Card\'), ")"));\n\n  _defineProperty(EnhancedCard, "propTypes", {\n    hasBorder: PropTypes.bool,\n    className: PropTypes.string\n  });\n\n  hoistStatics(EnhancedCard, Card);\n  return EnhancedCard;\n};\n\nexport default withWindConfig(enhance(Card));',"../../esm/_/components/badge/index.js":"import Badge from '@alifd/next/lib/badge';\nexport default Badge;","../../esm/_/components/slider/index.js":"import Slider from '@alifd/next/lib/slider';\nexport default Slider;","../../esm/_/components/calendar/index.js":"import Calendar from '@alifd/next/lib/calendar';\nexport default Calendar;","../../esm/_/components/timeline/index.js":"import Timeline from '@alifd/next/lib/timeline';\nexport default Timeline;","../../esm/_/components/progress/index.js":"import Progress from '@alifd/next/lib/progress';\nexport default Progress;","../../esm/_/components/tree/index.js":"import Tree from '@alifd/next/lib/tree';\nexport default Tree;","../../esm/_/components/message/index.js":"import Message from '@alifd/next/lib/message';\nexport default Message;","../../esm/_/components/cascader/index.js":"import Cascader from '@alifd/next/lib/cascader';\nexport default Cascader;","../../esm/_/components/dialog/index.js":"import Dialog from '@alifd/next/lib/dialog';\nexport default Dialog;","../../esm/_/components/balloon/index.js":"import Balloon from '@alifd/next/lib/balloon';\nexport default Balloon;","../../esm/_/components/loading/index.js":"import Loading from '@alifd/next/lib/loading';\nexport default Loading;","../../esm/_/components/config-provider/index.js":"import ConfigProvider from '@alifd/next/lib/config-provider';\nexport default ConfigProvider;","../../esm/_/components/overlay/index.js":"import Overlay from '@alifd/next/lib/overlay';\nexport default Overlay;","../../esm/_/components/dropdown/index.js":"import Dropdown from '@alifd/next/lib/dropdown';\nexport default Dropdown;","../../esm/_/components/animate/index.js":"import Animate from '@alifd/next/lib/animate';\nexport default Animate;","../../esm/_/components/affix/index.js":"import Affix from '@alifd/next/lib/affix';\nexport default Affix;","../../esm/_/components/tag/Colored.js":'import _Object$defineProperty from "@babel/runtime-corejs2/core-js/object/define-property";\nimport _Object$defineProperties from "@babel/runtime-corejs2/core-js/object/define-properties";\nimport _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs2/core-js/object/get-own-property-descriptors";\nimport _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs2/core-js/object/get-own-property-descriptor";\nimport _Object$getOwnPropertySymbols from "@babel/runtime-corejs2/core-js/object/get-own-property-symbols";\nimport _Object$keys from "@babel/runtime-corejs2/core-js/object/keys";\nimport _Object$values from "@babel/runtime-corejs2/core-js/object/values";\nimport _defineProperty from "@babel/runtime-corejs2/helpers/defineProperty";\nimport _extends from "@babel/runtime-corejs2/helpers/extends";\nimport _objectWithoutProperties from "@babel/runtime-corejs2/helpers/objectWithoutProperties";\n\nfunction ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nimport React from \'react\';\nimport PropTypes from \'prop-types\';\nimport classNames from \'classnames\';\nimport Tag from \'@alifd/next/lib/tag\';\nimport { Color, COLORED_CLASS_NAME, PROTECTED_TYPE } from \'./constants\';\n\nvar ColoredTag = function ColoredTag(_ref) {\n  var type = _ref.type,\n      className = _ref.className,\n      restProps = _objectWithoutProperties(_ref, ["type", "className"]);\n\n  return /*#__PURE__*/React.createElement(Tag, _extends({}, restProps, {\n    className: classNames(COLORED_CLASS_NAME, "".concat(COLORED_CLASS_NAME, "-").concat(type), className)\n  }));\n};\n/**\n * Prop types\n * @static\n * @type {Object}\n */\n\n\nColoredTag.propTypes = _objectSpread(_objectSpread({}, Tag.propTypes), {}, {\n  // Specific color of tag\n  type: PropTypes.oneOf(_Object$values(Color)),\n  // Class name of tag\n  className: PropTypes.string\n});\n/**\n * Default props\n * @static\n * @type {Object}\n */\n\nColoredTag.defaultProps = {\n  type: Color.LIGHT_STEEL_BLUE\n};\nColoredTag[PROTECTED_TYPE] = \'Tag\';\nexport default ColoredTag;',"../../esm/_/components/tag/ColoredGroup.js":"import _extends from \"@babel/runtime-corejs2/helpers/extends\";\nimport React, { Children } from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames';\nimport Tag from '@alifd/next/lib/tag';\nimport ColoredTag from './Colored';\nimport { Color, COLORED_GROUP_CLASS_NAME, PROTECTED_TYPE } from './constants';\nvar TagGroup = Tag.Group;\nvar defaultAvaliableColors = [Color.LIGHT_STEEL_BLUE, Color.PLUM, Color.MISTY_ROSE, Color.LIGHT_GOLDENROD_YELLOW, Color.PALE_GREEN];\n\nvar ColoredGroup = function ColoredGroup(_ref) {\n  var className = _ref.className,\n      style = _ref.style,\n      _ref$avaliableColors = _ref.avaliableColors,\n      avaliableColors = _ref$avaliableColors === void 0 ? defaultAvaliableColors : _ref$avaliableColors,\n      children = _ref.children;\n  return /*#__PURE__*/React.createElement(TagGroup, {\n    className: classNames(COLORED_GROUP_CLASS_NAME, className),\n    style: style\n  }, Children.map(children, function (elem, i) {\n    var hijackedElem = elem;\n\n    try {\n      var protectedElemType = elem.type[PROTECTED_TYPE];\n\n      if (protectedElemType === 'Tag') {\n        hijackedElem = /*#__PURE__*/React.createElement(ColoredTag, _extends({}, elem.props, {\n          type: avaliableColors[i % 5]\n        }));\n      }\n    } catch (err) {\n      /** DO NOT thrown unexpected error but swallow it */\n    }\n\n    return hijackedElem;\n  }));\n};\n\nColoredGroup.propTypes = {\n  className: PropTypes.string,\n  style: PropTypes.objectOf(PropTypes.any),\n  avaliableColors: PropTypes.arrayOf(PropTypes.string),\n  children: PropTypes.node\n};\nexport default ColoredGroup;","../../esm/_/utils/getDisplayName.js":"var getDisplayName = function getDisplayName(ReactComponent) {\n  var defaultName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Component';\n\n  if (!ReactComponent) {\n    return defaultName;\n  }\n\n  return ReactComponent.displayName || ReactComponent.name || defaultName;\n};\n\nexport default getDisplayName;","../../esm/_/components/tag/constants.js":"import _Symbol from \"@babel/runtime-corejs2/core-js/symbol\";\n\n/**\n * Allowed colors of tag\n * @enum {String}\n */\nexport var Color = {\n  LIGHT_STEEL_BLUE: 'light-steel-blue',\n  PLUM: 'plum',\n  MISTY_ROSE: 'misty-rose',\n  LIGHT_GOLDENROD_YELLOW: 'light-goldenrod-yellow',\n  PALE_GREEN: 'pale-green',\n  SILVER: 'silver',\n  GRAY: 'gray'\n};\n/**\n * @const\n * @type {String}\n */\n\nexport var COLORED_CLASS_NAME = 'wind-tag-colored';\n/**\n * @const\n * @type {String}\n */\n\nexport var COLORED_GROUP_CLASS_NAME = \"\".concat(COLORED_CLASS_NAME, \"-group\");\n/**\n * @const\n * @type {Symbol}\n */\n\nexport var PROTECTED_TYPE = _Symbol('TAG_PROTECTED_TYPE');","../../esm/_/utils/withWindConfig.js":"import _extends from \"@babel/runtime-corejs2/helpers/extends\";\nimport React from 'react';\nimport hoistStatics from 'hoist-non-react-statics'; // 不从'../index.js'引ConfigProvider，避免循环依赖\n\nimport ConfigProvider from '../components/config-provider';\nexport default function withWindConfig(Wrapped) {\n  var ConfifgConsumer = ConfigProvider.Consumer;\n\n  var HOC = function HOC(props) {\n    return /*#__PURE__*/React.createElement(ConfifgConsumer, null, function (context) {\n      return /*#__PURE__*/React.createElement(Wrapped, _extends({}, props, {\n        windConfig: context\n      }));\n    });\n  };\n\n  hoistStatics(HOC, Wrapped);\n  return HOC;\n}","demoMeta.json":'{"entryPath":"src/demo/demo1.js"}'}}}]);
//# sourceMappingURL=137-9a151ae6dee93adea1d4.js.map