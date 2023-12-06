const GOOGLE_API_KEY = 'AIzaSyAsx8qC-nBmjRxu4PWjR8VulbY-27IiosU';

export const YOUTUBE_API = 
'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='
+GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = 
'http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=';

export const OFFSET_LIVE_CHAT = 25;

export const YOUTUBE_LIVE_CHAT = 
'https://youtube.googleapis.com/youtube/v3/liveChat/messages?key='+GOOGLE_API_KEY;