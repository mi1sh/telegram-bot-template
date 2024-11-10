<div align='center'>
<h1>🤖 <b> Telegram Bot Template </b> 🤖</h1>
<p>This template will allow you to quick launch your own Telegram bot</p>

[![CLICK TO VIEW](https://img.shields.io/badge/CLICK%20TO%20VIEW%20EXAMPLE-0088cc)](https://t.me/poplakat_bot)
![BUILT WITH](https://img.shields.io/badge/BUILT%20WITH-Telegraf.js-E74625)
[![LICENSE](https://img.shields.io/github/license/mi1sh/telegram-bot-template?color=0088cc)](https://github.com/mi1sh/telegram-bot-template/blob/for_local/LICENSE)
  
<img src="https://github.com/user-attachments/assets/b5b1c1f7-7a3c-4739-8ab3-81e9c0ab11ca"/>
</div>

## **❔About** 

**✔️ Ready-made bot functions:**
- A system of suggestions and messages from users, this is suitable if you are the administrator of a telegram channel;
- The button to show the main command menu is always located in the lower keyboard for user convenience;
- Ready configuration for deploying a bot on [fly.io](https://fly.io/);
- List of social networks;
- Other custom commands, such as `playlist`, `about` or `channel`

<br/>

**You can easily customize the responses from the bot by changing the text in the files in the `messages` directory**
**The same goes for commands, you can edit them by changing files in the `commands` directory**

<br/>

**_If you want to use other services for deployment (not [fly.io](https://fly.io/)), I recommend using the template from the [for_local](https://github.com/mi1sh/telegram-bot-template/tree/for_local) branch to avoid confusion with the files. Follow the documentation of the service you wish to use, and you will surely succeed!_**

## **🛠️ Built With**

- [TypeScript](https://www.typescriptlang.org/) - For enhanced code quality and maintainability
- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [Telegraf](https://telegraf.js.org/) - Node.js Telegram Bot API framework
- [ts-node](https://typestrong.org/ts-node/) - TypeScript execution and REPL for node.js.
- [dotenv](https://github.com/motdotla/dotenv) - Environment variable management

## **📦 Deployment**

In this tempalte i use [Fly.io](https://fly.io/) for remote deployment my bot.

<br/>

**(Fly.io - A Public Cloud Built For Developers)**

<br/>

__This service offers a convenient free tier for deploying a Telegram bot. The choice of deployment service is up to you, but with this template, deployment on **Fly.io** will be even faster and smoother.__

## **📀 Getting Started**

To launch and deploy your bot with `telegram-bot-template`, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/mi1sh/telegram-bot-template.git
```

2. Navigate to the project directory:

```bash
cd telegram-bot-template
```

3. Install dependencies:

   Using `npm`:

    ```bash
    npm install
    ```

    Using `yarn`:
    
    ```bash
    yarn install
    ```

4. Go to [BotFather](https://t.me/BotFather), create new bot and copy your bot token.
   
5. After that, go to [getMyID_bot](https://t.me/getMyID_tgbot) _(for example)_ and get your Telegram User ID.

6. Create an `.env` file in the root of your project or use the ready-made `.env.example` template. The file must contain the `BOT_TOKEN` and `CHAT_ID` variables. Paste your token and id into variables:

```env
  BOT_TOKEN=your_bot_token
  CHAT_ID=your_telegram_id
  ```

7. Install `flyctl` using the console command:
   
   For Windows :
   ```pwsh
   pwsh -Command "iwr https://fly.io/install.ps1 -useb | iex"
   ```
   
   For macOS | Linux :
   ```curl
   curl -L https://fly.io/install.sh | sh
   ```

8. Create an account in Fly.io using commands:
   
   For sign up:
   ```bash
   flyctl auth signup
   ```

   or log in:
    ```bash
    flyctl auth login
    ```

9. Rin this command in root of your project for launch and deploy bot:
    
    ```bash
    flyctl launch
    ```

10. After fly project is created, get your `auth token`, and add them to `secrets` for fly with some variables from your `.env` file, just like this:

    ```bash
    flyctl auth token
    ```

    ```bash
    flyctl secrets set FLY_API_TOKEN=your_fly_auth_token BOT_TOKEN=your_bot_token CHAT_ID=your_chat_id
    ```

11. Add `FLY_API_TOKEN` secret into Github Actions in your bot repository (need for CI/CD):
    
    Go to the `Settings` section in your repository, go to `Secrets and Variables` => `Actions` and add a new secret via the `New repository secret` button

12. Finally, push to your repository or use `flyctl deploy` to start remote deployment of your bot!

<hr/>
     
**🟢 That's it! You can monitoring deployment status using Fly.io web interface**

## **🙏 Contributing**

Contributions to `telegram-bot-template` are welcome. If you have a feature request or bug report, please open an issue on the GitHub repository. If you'd like to contribute code, please submit a pull request.

## **©️ License**

`telegram-bot-template` is open-source software licensed under the MIT License. See the `LICENSE` file for more details.
