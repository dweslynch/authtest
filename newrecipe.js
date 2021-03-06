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
    _this.recipeRef = props.recipeRef;
    _this.user = props.user;

    _this.titles = {
      peanutFree: "Peanut free",
      treenutFree: "Treenut free",
      fishFree: "Safe for fish allergies",
      shellfishFree: "Safe for shellfish allergies",
      dairyFree: "Dairy Free",
      eggFree: "Egg Free",
      kosher: "Kosher",
      vegetarian: "Vegetarian",
      vegan: "Vegan"
    };

    _this.state = {
      recipeName: "",
      ingredients: 1,
      ingredientlist: [],
      description: "",
      instructions: "",
      tags: {
        peanutFree: false,
        treenutFree: false,
        fishFree: false,
        shellfishFree: false,
        dairyFree: false,
        eggFree: false,
        kosher: false,
        vegetarian: false,
        vegan: false
      }
    };

    // Bind event handlers
    _this.handleNameChange = _this.handleNameChange.bind(_this);
    _this.handleRemoveIngredientButtonClick = _this.handleRemoveIngredientButtonClick.bind(_this);
    _this.handleAddIngredientButtonClick = _this.handleAddIngredientButtonClick.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleIngredientQuantityChange = _this.handleIngredientQuantityChange.bind(_this);
    _this.handleDescriptionChange = _this.handleDescriptionChange.bind(_this);
    _this.handleUnitChange = _this.handleUnitChange.bind(_this);
    _this.handleInstructionsChange = _this.handleInstructionsChange.bind(_this);
    _this.handleTagChange = _this.handleTagChange.bind(_this);
    return _this;
  }

  _createClass(NewRecipeForm, [{
    key: "handleTagChange",
    value: function handleTagChange(event) {
      var name = event.target.name;
      this.setState(function (state) {
        console.log(state.tags[name]);
        state.tags[name] = !state.tags[name];
        return state;
      });
    }
  }, {
    key: "handleNameChange",
    value: function handleNameChange(event) {
      var val = event.target.value; // Have to grab value because the callback erases it
      this.setState({ recipeName: val });
    }
  }, {
    key: "handleDescriptionChange",
    value: function handleDescriptionChange(event) {
      var val = event.target.value;
      this.setState({ description: val });
    }
  }, {
    key: "handleInstructionsChange",
    value: function handleInstructionsChange(event) {
      var val = event.target.value;
      this.setState({ instructions: val });
    }
  }, {
    key: "handleUnitChange",
    value: function handleUnitChange(i, units) {
      this.setState(function (state) {
        // Grab list from state and change units of ingredient
        var _list = [].concat(_toConsumableArray(state.ingredientlist));

        if (_list[i]) {
          _list[i].units = units;
        } else {
          // Don't set name, handleIngredientIChange will do that
          _list[i] = {
            units: units
          };
        }

        // Return new state
        var clone = Object.assign({}, state);
        clone.ingredientlist = _list;
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
        clone.ingredientlist.splice(i, 1);
        return clone;
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      // Prevent reload
      event.preventDefault();

      var _recipeRef = this.recipeRef;
      var _uid = this.user.uid;
      var _backtrack = this.backtrack;

      var food = {
        name: this.state.recipeName,
        ingredients: this.state.ingredientlist,
        description: this.state.description,
        instructions: this.state.instructions,
        tags: this.state.tags,
        author: this.user.displayName,
        authorid: this.user.uid
      };

      var encodedName = encodeURIComponent(food.name);
      console.log(encodedName);

      var submitRecipe = function submitRecipe(result) {
        if (result && result.results) {
          console.log("got result");

          var results = result.results;

          if (results[0] && results[0].nutrition && results[0].nutrition.nutrients && results[0].nutrition.nutrients[0] && results[0].nutrition.nutrients[0].amount && results[0].servings) {
            food.calories = Math.ceil(results[0].nutrition.nutrients[0].amount);
            food.servings = Math.ceil(results[0].servings);
          }
        }

        var newDishKey = _recipeRef.child(_uid).push().key;
        _recipeRef.child(_uid).child(newDishKey).set(food).then(_backtrack);
      };

      $.getJSON("https://api.spoonacular.com/recipes/complexSearch?apiKey=1ae72a2a9e844249aa21d5b8e4724842&query=" + encodedName + "&number=1&addRecipeNutrition=true", submitRecipe);

      /*
      // Get a key from Firebase for a new food
      let newDishKey = this.recipeRef.child(this.user.uid).push().key;
        // Push new recipe to database and rerender recipe finder
      this.recipeRef.child(this.user.uid).child(newDishKey).set(food).then(this.backtrack);
      */
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
          "Create New Recipe"
        ),
        React.createElement("input", { type: "text", className: "full", value: this.state.recipeName, placeholder: "Recipe Name", onChange: this.handleNameChange }),
        React.createElement("br", null),
        React.createElement("br", null),
        arr.map(function (i) {
          return React.createElement(
            "div",
            null,
            React.createElement("input", { type: "text", value: _this2.state.ingredientlist[i] ? _this2.state.ingredientlist[i].name : "", placeholder: "Ingredient " + (i + 1), onChange: function onChange(event) {
                return _this2.handleIngredientIChange(i, event.target.value);
              } }),
            "\xA0\xA0",
            React.createElement("input", { style: { "width": "75px" }, type: "text", value: _this2.state.ingredientlist[i] ? _this2.state.ingredientlist[i].quantity : "", placeholder: "Quantity", onChange: function onChange(event) {
                return _this2.handleIngredientQuantityChange(i, event.target.value);
              } }),
            "\xA0\xA0",
            React.createElement(
              "select",
              { value: _this2.state.ingredientlist[i] ? _this2.state.ingredientlist[i].units : "", onChange: function onChange(event) {
                  return _this2.handleUnitChange(i, event.target.value);
                } },
              React.createElement(
                "option",
                { selected: true, value: "" },
                " "
              ),
              React.createElement(
                "option",
                { value: "tsp" },
                "tsp"
              ),
              React.createElement(
                "option",
                { value: "Tbsp" },
                "Tbsp"
              ),
              React.createElement(
                "option",
                { value: "cups" },
                "Cup(s)"
              ),
              React.createElement(
                "option",
                { value: "oz" },
                "oz"
              ),
              React.createElement(
                "option",
                { value: "mL" },
                "mL"
              ),
              React.createElement(
                "option",
                { value: "L" },
                "Liter(s)"
              )
            ),
            React.createElement("input", { style: { "backgroundColor": "rgba(0,0,0,0)", border: "none" }, className: "clickable circle-button", type: "button", value: "X", onClick: function onClick(event) {
                return _this2.handleRemoveIngredientButtonClick(i);
              } }),
            React.createElement("br", null),
            React.createElement("br", null)
          );
        }),
        React.createElement("input", { type: "button", className: "dark-button fullest", value: "Add Ingredient", onClick: this.handleAddIngredientButtonClick }),
        React.createElement("br", null),
        React.createElement("br", null),
        Object.entries(this.state.tags).map(function (kvp) {
          return React.createElement(
            "span",
            null,
            React.createElement("input", { type: "button", className: kvp[1] ? "spaced dark-button" : "spaced light-button", name: kvp[0], value: _this2.titles[kvp[0]], onClick: _this2.handleTagChange }),
            "\xA0\xA0"
          );
        }),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(
          "label",
          null,
          "Description:"
        ),
        React.createElement("br", null),
        React.createElement("textarea", { value: this.state.description, className: "full", onChange: this.handleDescriptionChange }),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(
          "label",
          null,
          "Instructions:"
        ),
        React.createElement("br", null),
        React.createElement("textarea", { value: this.state.instructions, className: "full", onChange: this.handleInstructionsChange }),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("input", { type: "submit", className: "dark-button fullest", value: "Submit" }),
        React.createElement(
          "h2",
          { className: "clickable", onClick: function onClick(event) {
              return _this2.backtrack();
            } },
          "Return to Find Recipes\xA0\u203A"
        )
      );
    }
  }]);

  return NewRecipeForm;
}(React.Component);

function renderNewRecipeForm(user, recipeRef, backtrack, container) {
  ReactDOM.render(React.createElement(NewRecipeForm, { user: user, recipeRef: recipeRef, backtrack: backtrack }), container);
}