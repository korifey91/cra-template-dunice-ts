## Create React App template dunice-ts  

Template for Create React App supporting TypeScript and SCSS files.  
Included with [Prettier](https://github.com/prettier/prettier), [Stylelint](https://github.com/stylelint/stylelint) and ESlint config recommended by [Airbnb](https://github.com/iamturns/eslint-config-airbnb-typescript) and [Husky](https://github.com/typicode/husky) with pre-commit hook.  

### Installation  

Creating a React project using a custom template.  

```
npx create-react-app app-name --template dunice-ts
```

### After installation  
The CRA Custom Template does not yet have support for `devDependencies`, so I recommend edit your `package.json` to like this:  
```
{
  "name": "rough-estimates-builder",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "lint": "eslint --ext .js,.jsx,.ts,.tsx ./src"
  },
  "dependencies": {
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-scripts": "3.4.3",
    "typescript": "~3.7.2"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "@types/jest": "^24.0.0",
    "@types/node": "^12.0.0",
    "@types/react": "^16.9.0",
    "@types/react-dom": "^16.9.0",
    "@typescript-eslint/eslint-plugin": "^4.4.1",
    "eslint-config-airbnb-typescript": "^11.0.0",
    "eslint-config-prettier": "^6.12.0",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-import-helpers": "^1.1.0",
    "eslint-plugin-jsx-a11y": "^6.3.1",
    "eslint-plugin-prettier": "^3.1.4",
    "eslint-plugin-react": "^7.21.4",
    "eslint-plugin-react-hooks": "^4.1.2",
    "husky": ">=4",
    "lint-staged": ">=10",
    "prettier": "^2.1.2",
    "stylelint": "^13.7.2",
    "stylelint-config-standard": "^20.0.0"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "**/*.{js,jsx,ts,tsx}": [
      "prettier --write",
      "eslint --cache --ext '.js,.jsx,.ts,.tsx' --fix"
    ],
    "*.scss": "stylelint --syntax=scss"
  }
}
```  

CRA will fail with husky `pre-commit` setup, so you need to install it manually after initiating.  

```
yarn add -D husky
```
  
###### License  
[MIT](https://choosealicense.com/licenses/mit)
