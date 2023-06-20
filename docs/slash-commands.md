# Registering Slash Commands

1. Create a `deploy-commands.js` file in your project directory. This file will be used to register and update the slash commands for your bot application.
2. Make sure you have a `config.json` file in your project directory, which is required in the deployment script.
3. Populate the required values in the `config.json` file. You can remove these values after deploying the commands.
> WARNING: DO NOT COMMIT OR PUSH TOKEN INTO THE REMOTE REPOSITORY
4. Assuming you are in the root directory, run the below command in your project directory to register your commands to the guild specified.
```
node ./src/deploy-commands.js
```
5. If you see the success message, check for the commands in the server by typing `/!`
6. Handle the slash command interactions in `registerEventHandlers.ts`.
7. If all goes well, you should be able to run them and see your bot's response in Discord!

Reference: <a href="https://discordjs.guide/creating-your-bot/command-deployment.html#guild-commands" target="_blank">discordjs Guide</a>
