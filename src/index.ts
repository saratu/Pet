import { Client, GatewayIntentBits, Partials ,Message} from "discord.js";
import * as dotenv from "dotenv";
import * as process from "node:process";


(async () => {
    const client = new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMembers,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.GuildMessageReactions,
            GatewayIntentBits.DirectMessages,
            GatewayIntentBits.DirectMessageReactions,
            GatewayIntentBits.GuildIntegrations,
            GatewayIntentBits.GuildPresences,
            GatewayIntentBits.MessageContent
        ],
        partials: [
            Partials.Channel,
            Partials.GuildMember,
            Partials.Message,
            Partials.Reaction,
            Partials.User
        ],
    });

    dotenv.config();

    const prefix = "beaw!";

    async function onMessageCreate(message: Message) {
        if (message.content.startsWith(prefix)) {
            if (message.content === prefix + "pete") {
                const tag = "<@" + "749512547144564757" + ">";
                await message.channel.send(tag);
            }
        }
    }
    client.on("messageCreate", onMessageCreate);
    function onLogin(){
        console.log("Bot is still ofline :)");
    }
    await client.login(process.env["TOKEN"]).then(onLogin);
})();
