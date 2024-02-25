const log = '1209553232196673556';
const color = 'DarkButNotBlack';

module.exports = [{
    name: "profil",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[;{newEmbed:{author:API Sistemi | $userDisplayName[$clientID]}{field:Kullanıcı Adı:\`\`\`$userDisplayName[$authorID]\`\`\`:false}{field:API KEY:\`\`\`$getGlobalUserVar[apiKey;$authorID]\`\`\`:false}{color:${color}}};;;everyone;true;false]
    
    `
},{
    name: "key-oluştur",
    type: "interaction",
    prototype: "slash",
    code: `
    $channelSendMessage[${log};**$userDisplayName[$authorID]**, bir anahtar oluşturdu.;false]
    $setGlobalUserVar[apiKey;$randomString[20];$authorID]
    $interactionReply[;{newEmbed:{author:API Sistemi | $userDisplayName[$clientID]}{description:API anahtarı başarıyla oluşturuldu. Profil komutu ile anahtarı görüntüleyebilirsin.}{color:${color}}};;;everyone;true;false]
    $onlyIf[$getGlobalUserVar[apiKey;$authorID]==API anahtarı oluşturulmamış. Lütfen oluşturun.;Zaten bir oluşturulmuş anahtarın var.]
    `
},{
    name: "key-sil",
    type: "interaction",
    prototype: "slash",
    code: `
    $channelSendMessage[${log};**$userDisplayName[$authorID]**, bir anahtarı sildi.;false]
    $setGlobalUserVar[apiKey;API anahtarı oluşturulmamış. Lütfen oluşturun.;$authorID]
    $interactionReply[;{newEmbed:{author:API Sistemi | $userDisplayName[$clientID]}{description:API anahtarı başarı ile silindi.}{color:${color}}};;;everyone;true;false]
    $onlyIf[$getGlobalUserVar[apiKey;$authorID]!=API anahtarı oluşturulmamış. Lütfen oluşturun.;Oluşturulmuş bir anahtar bulunamadı.]
    
    `
}]