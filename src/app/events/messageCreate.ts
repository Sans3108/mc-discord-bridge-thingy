import { CustomClient } from '@classes/client/CustomClient';
import { DiscordEvent } from '@classes/events/DiscordEvent.js';

export default new DiscordEvent('messageCreate', async message => {
  if (message.channelId !== '1473729632472666294') return;
  if (message.author.bot) return;
  if (message.webhookId) return;

  const rcon = (message.client as CustomClient).rcon;

  await rcon.send(`tellraw @a {"text":"💬${message.author.displayName}> ${message.content}"}`);
});
