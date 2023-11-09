function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: XManzzzX\nitem1.TEL;waid=62857059457518:62857059457518\nitem1.X-ABLabel:\nJangan Spam Kak\nURL;Email Owner:synchcode@sh.co\nORG: INI OWNER\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler