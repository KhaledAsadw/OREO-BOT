import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone' 
import fs from 'fs' 

//OwnerShip
global.owner = [
  [process.env.OWNER_NUMBER || '919614477116', process.env.OWNER_NAME || '✮͢⚡⃟≛⃝🇸𝖚𝖇𝖆𝖗𝖚≛⃝🍁⑉៚
', true],
  ['919614477116', '✮͢⚡⃟≛⃝🇸𝖚𝖇𝖆𝖗𝖚≛⃝🍁⑉៚
', true]
]
global.mods = []
global.prems = []

global.author = process.env.OWNER_NAME || '✮͢⚡⃟≛⃝🇸𝖚𝖇𝖆𝖗𝖚≛⃝🍁⑉៚
'
global.botname = process.env.BOT_NAME || 'SUBARU-BOT'
 
 
 //Api's
global.APIs = {
}
global.APIKeys = { 
}

//Apikeys
global.shizokeys = 'shizo'

//Sticker Watermarks
global.stkpack = process.env.BOT_NAME || 'আমাকে ভালো লাগে?🙄
লাগে না তাইতো?
লাগবে কিভাবে তোমার মনে তো হিংসা ভরা😒😆
 📌মারবো এখানে লাশ পরবে শ্মশানে🥱

✮͢⚡⃟≛⃝🇸𝖚𝖇𝖆𝖗𝖚≛⃝🍁⑉៚
               🚫
^⁠_₊₉₁ ₉₆₁₄₄₇₇₁₁₆_⁠^'
global.stkowner = process.env.OWNER_NAME || '© SUBARU'

//Watermark
global.maker = process.env.MAKER || 'Made with ❤️ by SUBARU-BOT'

//global emojis
global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//management
global.bug = '*!! Sorry 💢 !!*\nSomething went wrong 🌋'
global.stop = '*!! 🎭 Unfortunately 💔 !!*\nBot system is not Responding 🙃'

//TimeLines
global.botdate = `*⫹⫺ Date:*  ${moment.tz('Asia/Kolkata').format('DD/MM/YY')}`
global.bottime = `*⫹⫺ Time:* ${moment.tz('Asia/Kolkata').format('HH:mm:ss')}`

//Hosting Management
global.serverHost = 1
global.getQrWeb = 0
global.renderHost = 0
global.replitHost = 0

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
