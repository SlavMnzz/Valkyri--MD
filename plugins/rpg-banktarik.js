const xpperlimit = 1
let handler = async (m, { conn, command, args }) => {
  if (global.db.data.chats[m.chat].rpg == false && m.isGroup) return conn.sendButton(m.chat, '❗ ᴏᴘᴛɪᴏɴs ʀᴘɢ ɢᴀᴍᴇ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ', wm, null, [['ᴇɴᴀʙʟᴇ', '.on rpg']], m)
  let user = global.db.data.users[m.sender]
  let all = command.replace(/^tarik/i, '')
  let count = all ? all : args[0]
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].bank / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.atm == 0) return m.reply('🇬🇧 : ʏᴏᴜ ᴅᴏɴᴛ ʜᴀᴠᴇ ᴀɴ ᴀᴛᴍ ᴄᴀʀᴅ ʏᴇᴛ\n🇮🇩 : ᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴍᴇᴍɪʟɪᴋɪ ᴀᴛᴍ')
  if (global.db.data.users[m.sender].bank >= xpperlimit * count) {
    global.db.data.users[m.sender].bank -= xpperlimit * count
    global.db.data.users[m.sender].money += count
    conn.reply(m.chat, `sᴜᴋsᴇs ᴍᴇɴᴀʀɪᴋ sᴇʙᴇsᴀʀ ${count} ᴍᴏɴᴇʏ 💹`, m)
  } else conn.reply(m.chat, `[❗] ᴜᴀɴɢ ᴅɪ ʙᴀɴᴋ ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴍᴇɴᴄᴜᴋᴜᴘɪ ᴜɴᴛᴜᴋ ᴍᴇɴᴀʀɪᴋ ${count} ᴍᴏɴᴇʏ 💹`, m)
}
handler.help = ['tarik <jumlah>']
handler.tags = ['rpg']
handler.command = /^tarik([0-9]+)|tarik|tarikall$/i
handler.group = true
handler.rpg = true
export default handler