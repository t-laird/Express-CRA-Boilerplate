# Express/Knex/PostgreSQL + CreateReactApp Boilerplate

## Getting Started
1. Clone down this repo and CD in to the directory.
2. Run `npm install` or `yarn` in the root and client directories.

## Development
### Prerequisites
* Knex CLI - `npm install -g knex` or `yarn global add knex`.
* Nodemon CLI - `npm install -g nodemon` or `yarn global add nodemon`.

### Starting
Run `npm run dev` or `yarn dev` in the root directory.
* Starts the express server on port 5000.
* Starts the React App on port 3000.
* Watches SCSS files in the client directory and compiles them into CSS.

### API Calls
The React App has a proxy that allows it to make requests to the backend as `/api/v1/test` instead of to `localhost:5000/api/v1/test`. There is an example fetch in componentDidMount in the App component.

### Database Management
This boilerplate is set up to use Knex - [docs found here](http://knexjs.org/). See the Knex docs for the relevant commands for creating and running migrations in addition to creating and running seed files.

### Testing
Run `npm test` or `yarn test` in the root directory to test the server.
Run `npm run test-client` or `yarn test-client` in the root directory to test the client side.

<hr />

## Deployment
Run `npm run stage` or `yarn stage`. This runs the standard React build to build the static assets to be served from your express server. There is an existing line in the server file to serve those assets.

