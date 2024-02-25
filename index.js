const { AoiClient } = require("aoi.js");

const client = new AoiClient({
  token: "token",
  prefix: "$getGuildVar[prefix]",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "a-32-characters-long-string-here",
  }
});

client.loadCommands("./commands/", true); 


client.variables ({ 
    prefix: "!",
    apiKey: "API anahtarı oluşturulmamış. Lütfen oluşturun.",
})

client.status({
  name: "🔥 API BOTU - HAMSTERMERT",
  type: "PLAYING",
  time: 12,
});

client.readyCommand({
  code: `
  $log[$userDisplayName[$clientID] Aktif!]
  `
})