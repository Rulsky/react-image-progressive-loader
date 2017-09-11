"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
      typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

var ProgressiveImage = (function (_Component) {
  _inherits(ProgressiveImage, _Component);

  function ProgressiveImage(props) {
    _classCallCheck(this, ProgressiveImage);

    var _this = _possibleConstructorReturn(
      this,
      (ProgressiveImage.__proto__ || Object.getPrototypeOf(ProgressiveImage))
        .call(this, props)
    );

    _this.state = {
      src: props.base64,
      style: Object.assign({}, props.style, {
        filter:
        "blur(" + props.blurStr + ") contrast(" + props.contrastStr + ")",
        transition:
        "filter " + props.transtionTime + " linear " + props.transitionDelay
      })
    };
    return _this;
  }

  _createClass(ProgressiveImage, [
    {
      key: "fetchSrc",
      value: function fetchSrc(url) {
        return new Promise(function (resolve, reject) {
          var img = new Image();
          img.onload = function () {
            return resolve(url);
          };
          img.onerror = function (error) {
            return reject(error);
          };
          img.src = url;
        });
      }
    },
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.fetchSrc(this.props.src)
          .then(function (url) {
            _this2.setState({
              src: url,
              style: Object.assign(
                {},
                _this2.state.style,
                {
                  filter: "blur(0) contrast(100%)"
                },
                _this2.props.style
              )
            });
          })
          .catch(function (error) {
            throw error;
          });
      }
    },
    {
      key: "render",
      value: function render() {
        return _react2.default.createElement("img", {
          src: this.state.src,
          alt: this.props.alt,
          className: this.props.className,
          style: this.state.style
        });
      }
    }
  ]);

  return ProgressiveImage;
})(_react.Component);

ProgressiveImage.defaultProps = {
  blurStr: "15px",
  contrastStr: "50%",
  transtionTime: ".2s",
  transitionDelay: ".05s"
};
exports.default = ProgressiveImage;
