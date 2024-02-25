const color = 'DarkButNotBlack';

module.exports = [{
    name: "yardım",
    type: "interaction",
    prototype: "slash",
    code: `
    
    $interactionReply[;{newEmbed:{author:API Sistemi | $userDisplayName[$clientID]}{description:Selam **$userDisplayName[$authorID]**, \n Komutlarımı slash (/) olarak kullanabilirsin.}{color:${color}}};;;everyone;true;false]
    
    `
}]