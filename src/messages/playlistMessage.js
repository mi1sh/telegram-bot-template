import * as dotenv from 'dotenv';
dotenv.config();
const env = process.env;
export const playlistMessage = `📀 [*Плейлист нашего канала*](${env.SPOTIFY_PLAYLIST_LINK}) 📀\n\n` +
    `В плейлисте обитает музыка, которая в дальнейшем постится в [_канал_](${env.CHANNEL_LINK}) 🎶\n\n`;
