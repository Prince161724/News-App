You need an API key from NewsAPI.org to fetch news data.

After signing up, you will get your own unique API key.

In React, all environment variables must start with REACT_APP_ to be accessible in your code.

Create a file named .env in the root of your React project directory (not inside src).

Inside this .env file, store your API key using the correct variable format. For example: REACT_APP_API_KEY=your_key_here

Restart your development server after saving the .env file so React can load the new environment variable.

In your JavaScript code, access the key using process.env.REACT_APP_API_KEY.

Do not share your .env file or commit it to GitHub — always list it in your .gitignore file to keep your key private.

And at last having all done 
open a terminal and enter the command `npm install to install node modules 


and at last 


npm start
