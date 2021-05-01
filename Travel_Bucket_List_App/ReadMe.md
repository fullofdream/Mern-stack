# Some Basic Steps/Tutorial to setup backend

> ### Some fun & Important facts I found While Developing
>> - [x] object id in mongo has timestamp in it. ObjectId.getTimestamp refer https://docs.mongodb.com/manual/reference/method/ObjectId.getTimestamp/

>> - [x] mongoose timestamps schema options will automatically add created_at & updated_at fields for every document. refer timestamps section refer https://mongoosejs.com/docs/guide.html#definition



***

> ## eslint setup

- add a lint script in the package.json and point to the src folder or where your express server is located.

- setup the eslint by redirecting to your server folder and npx eslint --init

- √ How would you like to use ESLint? · style
√ What type of modules does your project use? · commonjs
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · node
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · airbnb
√ What format do you want your config file to be in? · JavaScript
Checking peerDependencies of eslint-config-airbnb-base@latest
The config that you've selected requires the following dependencies:

eslint-config-airbnb-base@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.22.1
√ Would you like to install them now with npm? · No / Yes - yes

> ## Database Schema Blueprint
Travel Entry

- title -text
- description - text
- comments - text
- rating - scale of 1-5
- image - text -url
- latitude - number
- longitude - number
- createdAt - datetime
- updatedAt - datetime
