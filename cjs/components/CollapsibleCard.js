'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _Card = require('@material-ui/core/Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardActions = require('@material-ui/core/CardActions');

var _CardActions2 = _interopRequireDefault(_CardActions);

var _CardHeader = require('@material-ui/core/CardHeader');

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardContent = require('@material-ui/core/CardContent');

var _CardContent2 = _interopRequireDefault(_CardContent);

var _Collapse = require('@material-ui/core/Collapse');

var _Collapse2 = _interopRequireDefault(_Collapse);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _ExpandMore = require('@material-ui/icons/ExpandMore');

var _ExpandMore2 = _interopRequireDefault(_ExpandMore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    card: {
      maxWidth: 400,
      margin: 4,
      marginBottom: 6,
      paddingBottom: 8
    },
    actions: {
      paddingTop: 4,
      paddingBottom: 0,
      paddingRight: 16,
      display: "block",
      textAlign: "right"
    },
    header: {
      float: "left",
      paddingTop: 8,
      paddingLeft: 12,
      paddingBottom: 0
    },
    title: {
      fontSize: 15,
      fontWeight: 500
    },
    content: {
      padding: 0,
      paddingBottom: "4px !important"
    },
    collapse: {
      clear: "both"
    },
    expand: (0, _defineProperty3.default)({
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      }),
      padding: 0,
      marginLeft: 'auto'
    }, theme.breakpoints.up('sm'), {
      marginRight: -8
    }),
    expandOpen: {
      transform: 'rotate(180deg)'
    }
  };
};

var CollapsibleCard = function (_React$Component) {
  (0, _inherits3.default)(CollapsibleCard, _React$Component);

  function CollapsibleCard() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CollapsibleCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CollapsibleCard.__proto__ || (0, _getPrototypeOf2.default)(CollapsibleCard)).call.apply(_ref, [this].concat(args))), _this), _this.state = { expanded: true }, _this.handleExpandClick = function () {
      _this.setState(function (state) {
        return { expanded: !state.expanded };
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CollapsibleCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          title = _props.title,
          actions = _props.actions,
          children = _props.children;
      var expanded = this.state.expanded;


      return _react2.default.createElement(
        _Card2.default,
        { className: classes.card, raised: true },
        _react2.default.createElement(_CardHeader2.default, {
          title: title,
          classes: { root: classes.header, title: classes.title }
        }),
        _react2.default.createElement(
          _CardActions2.default,
          { className: classes.actions, disableActionSpacing: true },
          expanded ? actions : null,
          _react2.default.createElement(
            _IconButton2.default,
            {
              className: (0, _classnames3.default)(classes.expand, (0, _defineProperty3.default)({}, classes.expandOpen, expanded)),
              onClick: this.handleExpandClick,
              'aria-expanded': expanded
            },
            _react2.default.createElement(_ExpandMore2.default, null)
          )
        ),
        _react2.default.createElement(
          _Collapse2.default,
          { 'in': expanded, timeout: 'auto', unmountOnExit: true, className: classes.collapse },
          _react2.default.createElement(
            _CardContent2.default,
            { classes: { root: classes.content } },
            children
          )
        )
      );
    }
  }]);
  return CollapsibleCard;
}(_react2.default.Component);

CollapsibleCard.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(CollapsibleCard);