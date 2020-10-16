var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewRecipeForm = function (_React$Component) {
  _inherits(NewRecipeForm, _React$Component);

  function NewRecipeForm(props) {
    _classCallCheck(this, NewRecipeForm);

    // Allows the form to submit groceries to the database
    var _this = _possibleConstructorReturn(this, (NewRecipeForm.__proto__ || Object.getPrototypeOf(NewRecipeForm)).call(this, props));

    _this.flowup = props.flowup;
    _this.backtrack = props.backtrack;

    _this.state = { recipeName: "", ingredients: 1, ingredientlist: [], description: "" };

    // Bind event handlers
    _this.handleNameChange = _this.handleNameChange.bind(_this);
    _this.handleRemoveIngredientButtonClick = _this.handleRemoveIngredientButtonClick.bind(_this);
    _this.handleAddIngredientButtonClick = _this.handleAddIngredientButtonClick.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleIngredientQuantityChange = _this.handleIngredientQuantityChange.bind(_this);
    _this.handleDescriptionChange = _this.handleDescriptionChange.bind(_this);
    return _this;
  }

  _createClass(NewRecipeForm, [{
    key: "handleNameChange",
    value: function handleNameChange(event) {
      var val = event.target.value; // Have to grab value because the callback erases it
      this.setState(function (state) {
        var clone = Object.assign({}, state);
        clone.recipeName = val;
        return clone;
      });
    }
  }, {
    key: "handleDescriptionChange",
    value: function handleDescriptionChange(event) {
      var val = event.target.value;
      this.setState(function (state) {
        var clone = Object.assign({}, state);
        clone.description = val;
        return clone;
      });
    }
  }, {
    key: "handleIngredientIChange",
    value: function handleIngredientIChange(i, name) {
      this.setState(function (state) {
        // Grab list from state and change name of ingredient
        var _list = [].concat(_toConsumableArray(state.ingredientlist));

        // Update name if ingredient exists, otherwise create one
        if (_list[i]) {
          _list[i].name = name;
        } else {
          // Don't set quantity, handleIngredientQuantityChange will do that
          _list[i] = {
            name: name
          };
        }

        // Return new state
        var clone = Object.assign({}, state);
        clone.ingredientlist = _list;
        return clone;
      });
    }
  }, {
    key: "handleIngredientQuantityChange",
    value: function handleIngredientQuantityChange(i, quantity) {
      this.setState(function (state) {
        // Grab list from state and change quantity of ingredient
        var _list = [].concat(_toConsumableArray(state.ingredientlist));

        if (_list[i]) {
          _list[i].quantity = quantity;
        } else {
          // Don't set name, handleIngredientIChange will do that
          _list[i] = {
            quantity: quantity
          };
        }

        // Return new state
        var clone = Object.assign({}, state);
        clone.ingredientlist = _list;
        return clone;
      });
    }
  }, {
    key: "handleAddIngredientButtonClick",
    value: function handleAddIngredientButtonClick(event) {
      // Add a new ingredient slot
      this.setState(function (state) {
        var clone = Object.assign({}, state);
        clone.ingredients = clone.ingredients + 1;
        return clone;
      });
    }
  }, {
    key: "handleRemoveIngredientButtonClick",
    value: function handleRemoveIngredientButtonClick(i) {
      // Remove a specified ingredient slot
      this.setState(function (state) {
        var clone = Object.assign({}, state);
        clone.ingredients = clone.ingredients - 1;
        clone.ingredientlist = clone.ingredientlist.splice(i, 1);
        return clone;
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      // Prevent reload
      event.preventDefault();

      var food = {
        name: this.state.recipeName,
        ingredients: this.state.ingredientlist,
        description: this.state.description
      };

      // Send recipe back up to page to update database
      this.flowup(food);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // let arr = [1..this.state.ingredients]
      var arr = [];
      for (var i = 0; i < this.state.ingredients; i++) {
        arr.push(i);
      }

      return React.createElement(
        "form",
        { onSubmit: this.handleSubmit },
        React.createElement(
          "h2",
          null,
          "Add New Recipe"
        ),
        React.createElement(
          "label",
          null,
          "Recipe Name:"
        ),
        React.createElement("br", null),
        React.createElement("input", { type: "text", value: this.state.recipeName, onChange: this.handleNameChange }),
        React.createElement("br", null),
        React.createElement("br", null),
        arr.map(function (i) {
          return React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              null,
              "Ingredient ",
              i + 1,
              ":\xA0\xA0"
            ),
            React.createElement("input", { type: "text", value: _this2.state.ingredientlist[i] ? _this2.state.ingredientlist[i].name : "", onChange: function onChange(event) {
                return _this2.handleIngredientIChange(i, event.target.value);
              } }),
            React.createElement("input", { type: "text", value: _this2.state.ingredientlist[i] ? _this2.state.ingredientlist[i].quantity : "", onChange: function onChange(event) {
                return _this2.handleIngredientQuantityChange(i, event.target.value);
              } }),
            React.createElement("input", { style: { "background-color": "rgba(0,0,0,0)", border: "none" }, className: "clickable", type: "button", value: "X", onClick: function onClick(event) {
                return _this2.handleRemoveIngredientButtonClick(i);
              } }),
            React.createElement("br", null),
            React.createElement("br", null)
          );
        }),
        React.createElement("input", { type: "button", value: "Add Ingredient", onClick: this.handleAddIngredientButtonClick }),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(
          "label",
          null,
          "Description and Instructions:"
        ),
        React.createElement("br", null),
        React.createElement("textarea", { value: this.state.description, onChange: this.handleDescriptionChange }),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("input", { type: "submit", value: "Submit" }),
        React.createElement(
          "h2",
          { className: "clickable", onClick: function onClick(event) {
              return _this2.backtrack();
            } },
          "Return to My Recipes\xA0\u203A"
        )
      );
    }
  }]);

  return NewRecipeForm;
}(React.Component);

function renderNewRecipeForm(flowup, backtrack, container) {
  ReactDOM.render(React.createElement(NewRecipeForm, { flowup: flowup, backtrack: backtrack }), container);
}