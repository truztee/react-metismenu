'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * src/components/Container.jsx
                                                                                                                                                                                                                                                                   * Author: H.Alper Tuna <halpertuna@gmail.com>
                                                                                                                                                                                                                                                                   * Date: 16.09.2016
                                                                                                                                                                                                                                                                   */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Item = require('../containers/Item');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(_ref, _ref2) {
  var items = _ref.items,
      visible = _ref.visible;
  var classStore = _ref2.classStore;
  return _react2.default.createElement(
    'ul',
    {
      className: (0, _classnames2.default)(classStore.classContainer, visible && classStore.classContainerVisible)
    },
    items.map(function (item, i) {
      return _react2.default.createElement(_Item2.default, _extends({ key: i }, item));
    })
  );
};

Container.propTypes = {
  items: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  visible: _propTypes2.default.bool
};

Container.contextTypes = {
  classStore: _propTypes2.default.object.isRequired
};

exports.default = Container;