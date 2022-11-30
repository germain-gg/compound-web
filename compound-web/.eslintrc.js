module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:@stencil/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "matrix-org",
    ],
    "rules": {
      "no-restricted-properties": [
        "error",
        ...buildRestrictedPropertiesOptions(
            ["window.innerHeight", "window.innerWidth", "window.visualViewport"],
            "Use UIStore to access window dimensions instead.",
        ),
        ...buildRestrictedPropertiesOptions(
            ["*.mxcUrlToHttp", "*.getHttpUriForMxc"],
            "Use Media helper instead to centralise access for customisation.",
        ),
      ],
      // Ban matrix-js-sdk/src imports in favour of matrix-js-sdk/src/matrix imports to prevent unleashing hell.
      "no-restricted-imports": ["error", {
        "paths": [{
            "name": "matrix-js-sdk",
            "message": "Please use matrix-js-sdk/src/matrix instead",
        }, {
            "name": "matrix-js-sdk/",
            "message": "Please use matrix-js-sdk/src/matrix instead",
        }, {
            "name": "matrix-js-sdk/src",
            "message": "Please use matrix-js-sdk/src/matrix instead",
        }, {
            "name": "matrix-js-sdk/src/",
            "message": "Please use matrix-js-sdk/src/matrix instead",
        }, {
            "name": "matrix-js-sdk/src/index",
            "message": "Please use matrix-js-sdk/src/matrix instead",
        }, {
            "name": "matrix-react-sdk",
            "message": "Please use matrix-react-sdk/src/index instead",
        }, {
            "name": "matrix-react-sdk/",
            "message": "Please use matrix-react-sdk/src/index instead",
        }],
        "patterns": [{
            "group": ["matrix-js-sdk/lib", "matrix-js-sdk/lib/", "matrix-js-sdk/lib/**"],
            "message": "Please use matrix-js-sdk/src/* instead",
        }],
      }],
      /**
       * Disabling the following rule due to an issue with the stencil eslint plugin
       * https://github.com/ionic-team/stencil-eslint/issues/60
       */
      "@stencil/decorators-context": 0
    }
}

function buildRestrictedPropertiesOptions(properties, message) {
  return properties.map(prop => {
      let [object, property] = prop.split(".");
      if (object === "*") {
          object = undefined;
      }
      return {
          object,
          property,
          message,
      };
  });
}
