# MC BRIDGE

To set this up just clone the fork and clone the repo, set up your discord bot token and guild ID in the `.env` file (copy-paste `.env.example`) and also leave dev mode on `true`. I won't go into details how this bot works, it was made from my template and it's got just the most basic stuff to get a discord bot up and running.

After finishing with your `.env` file, make sure you have node js installed (latest LTS version should work), and NPM, with npm run `npm i -g pnpm` to install PNPM (the superior package manager), and after that run `pnpm i` inside your cloned folder.

Now invite your bot to your discord server, give it permissions, and set up a bridge channel, in that channel you need to create a webhook and copy it's ID - we'll use this in a bit

To set up the minecraft side of this bridge system, go to your fabric server, find `server.properties` and change these:

- `enable-rcon=true`
- `rcon.password=yeah` (This can be anything but if you want to change it (you should) change it both here and in `src/app/index.ts` line 13)
- `rcon.port=25575` (This should be the default, but do check it)

Next, go to https://modrinth.com/plugin/dchook and download the appropiate version for your fabric server version (this mod requires the Fabric API mod as well), drop it into your server's `/mods` folder, start your server then stop it.

You should now see a new file in the `/config` folder, called `dchook.properties`

Edit this file to your liking, but keep these 2 options set up like this:

- `functions.bot.enabled=false` (Setting this to false forbids the plugin from running it's own discord bot, we're running our own afterall so we can customize and add more commands if we want)
- `functions.bot.token=TOKEN` (This wont work anyway if the other one is set to `false`)
- `webhook.url=https://discord.com/api/webhooks/123412341234/asdasdasdasd` (Replace this with the webhook URL you copied earlier)

Finally, start your fabric mc server, start your discord bot with `pnpm dev`, and go wild.
