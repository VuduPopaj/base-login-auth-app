_Base Login/Authentication Application_

This project implements register, login and logout functionalities for users and can be used as a trivial starting point for more advanced/professional system-based applicatons.

_Main Features_

- Registration of the user
- Login
- Logout

_Technologies_

- Base Login/Auth app was built with HTML, JS, ReactJS including the Material UI for styling the components.

**Frontend**

- Material UI - core & Icons - used for the styling of the components.
- jquery - used for the easier HTML traversal and event handling manipulation.
- react
- react-dom - for providing specific DOM methods.
- react-router - for enabling the routing among the components.
- react-router-dom - for implementing the dynamic routing.
- react-hot-loader - for keeping the components mounted after editing the code.

**Backend**

- dotenv - used for separating secrets from the source code and for protecting database login credentials.
- jwt - _jsonwebtoken_ - used for securely transmitting information between client and server.
- express - framework which works within Node.js used for providing server-side logic for applications.
- express-jwt - providing Express middleware for JWT validation.
- lodash - for more maintainable JS code.
- CRUD ops - providing four basic functionalities in building the API: create, read, update, delete.
- mongoose - used for Schema validation.
- crypto - module that performs data encryption and decryption.
- passport - authentication middleware for Node.js.
- concurrently - npm package that allows multiple commands without opening separate terminals. For example: client and server side     applications.
- compress - making the application smaller by compressing HTML, CSS and JS code.

- cors - _cross origin resource sharing_

  *enables accessing a resource from a different origin.*
  *in order to enable CORS both client and server are needed as there should be a client that requests resource from a server, and server implemented with endpoints that can send a response back to the client.*

- helmet - used for managing title, description and meta tags for the document. When combined with server-side, it makes document search-friendly for search engines and social media.

**_.env_**

- .env is used to store external APIs data.
- .env is also used for storing sensitive credentials like API keys.

_.env is created in the root directory of the project._
_.env consists of: REACT_APP_API_KEY = 'my-secret-api-key'_
_process.env.REACT_APP_API_KEY_ - using .env in the code.
**_.env must be included in gitignore so it's not pushed/published._**

_Starting the project_

- Installing NPM packages - npm install.

Project structure consists of two folders: client for frontend and server for backend.
In the first terminal open **_client_** folder and start it with the command: _npm start._
In the second terminal open **_server_** folder and start it with the command: _npm start._

Wait for a few seconds and the project will initiate in your browser.

Have fun!
