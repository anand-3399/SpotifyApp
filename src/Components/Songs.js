const Songs = [
  {
    id: 1,
    favourite: false,
    songName: "Naacho Naacho - RRR",
    artist: "Vishal Mishra, Rahul Sipligunj, M. M. Keeravani",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-app-7354d.appspot.com/o/Ringtone%2F1Naacho%20Naacho%20-%20RRR%20128%20Kbps.mp3?alt=media&token=4c3a68cf-dc00-46ed-ac24-78378e2a258b",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-app-7354d.appspot.com/o/Images%2F1id3Picture_1999955015.jpg?alt=media&token=18334457-a015-4a49-8c97-17577208948a",
  },
  {
    id: 2,
    favourite: false,
    songName: "Jhoome Jo Pathaan",
    artist: "	Arijit Singh",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-app-7354d.appspot.com/o/Ringtone%2F5Jhoome%20Jo%20Pathaan(PagalWorld.com.se).mp3?alt=media&token=0c88710e-2b59-463a-98a7-1f9dc6b4f124",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-app-7354d.appspot.com/o/Images%2F5_65406_4.jpg?alt=media&token=f1441154-efb7-44a1-b271-3e332367e08e",
  },
  {
    id: 3,
    favourite: false,
    songName: "Thumkeshwari",
    artist: "Sachin-Jigar",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-app-7354d.appspot.com/o/Ringtone%2F3Thumkeshwari.mp3?alt=media&token=d224e53b-73e2-4295-acbb-e9ccb3862dc1",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-app-7354d.appspot.com/o/Images%2F3Thumkeshwari-Lyrics-Ash-King-Divya-Kumar-Rashmeet-Kaur-Sachin-Jigar-Wo-Lyrics.jpg?alt=media&token=80f0a92c-356f-4cd8-935e-0c665f18ee13",
  },
  {
    id: 4,
    favourite: false,
    songName: "Aafat",
    artist: "Zahrah Khan, Tanishk Bagchi",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-app-7354d.appspot.com/o/Ringtone%2F4Aafat%20(Hindi)(PagalWorld.com.se).mp3?alt=media&token=8db29ffc-ce12-413c-90f4-313e197ae24e",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-app-7354d.appspot.com/o/Images%2F4_6828_4.jpg?alt=media&token=dee46576-748f-4697-87b8-514f30c28861",
  },
  {
    id: 5,
    favourite: false,
    songName: "Coka 2.0",
    artist: "	Sukhe, Lisa Mishra,",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-app-7354d.appspot.com/o/Ringtone%2F2Coka(PagalWorld.com.se).mp3?alt=media&token=8f8b53c2-e5ef-422e-90f4-037c928dc995",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-app-7354d.appspot.com/o/Images%2F2_6955_4.jpg?alt=media&token=ce31641f-9148-4a5e-ad47-208451a4f4ba",
  },
  {
    id: 6,
    songName: "The Punjaabban",
    artist: "	Gippy Grewal",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-app-7354d.appspot.com/o/Ringtone%2F6The%20Punjaabban(PagalWorld.com.se).mp3?alt=media&token=7dacce76-b285-4415-a2a7-9062a4ae3a0c",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-app-7354d.appspot.com/o/Images%2F6_118_4.jpg?alt=media&token=3cebbccf-84bd-4315-90f6-f9fc371fd482",
  },
  {
    id: 7,
    favourite: false,
    songName: "Dholida",
    artist: "Janhvi Shrimankar",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-app-7354d.appspot.com/o/Ringtone%2F7Dholida%20-%20Gangubai%20Kathiawadi%20128%20Kbps.mp3?alt=media&token=1772d72d-ed52-4871-a32a-dd07f217415d",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-app-7354d.appspot.com/o/Images%2F7_128Dholida%20-%20Gangubai%20Kathiawadi%20128%20Kbps.jpg?alt=media&token=d7df8f23-8691-40e8-889b-cb3a5faf7374",
  },
  {
    id: 8,
    favourite: false,
    songName: "Paani Paani",
    artist: "Aastha Gill",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-app-7354d.appspot.com/o/Ringtone%2F8Paani%20Paani(PagalWorld.com.se).mp3?alt=media&token=8db81841-9f94-404e-afde-d022c38ddfc4",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-app-7354d.appspot.com/o/Images%2F8_2564_4.jpg?alt=media&token=caaba0df-5539-4321-ae4f-9a5902317fe5",
  },
  {
    id: 9,
    favourite: false,
    songName: "Dance ka Bhoot",
    artist: "Arijit Singh",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-app-7354d.appspot.com/o/Ringtone%2F9Dance%20ka%20Bhoot(PagalWorld.com.se).mp3?alt=media&token=49dd4454-d9c9-4a80-b3e0-981d67136c07",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-app-7354d.appspot.com/o/Images%2F9_7104_4.jpg?alt=media&token=55a785a4-db22-4ac1-963f-7f07d8a438d1",
  },
  {
    id: 10,
    favourite: false,
    songName: "Bhool Bhulaiyaa 2 Title Track",
    artist: "Neeraj Shridhar",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-app-7354d.appspot.com/o/Ringtone%2F10Bhool%20Bhulaiyaa%202%20Title%20Track(PagalWorld.com.se).mp3?alt=media&token=16acb96c-d023-4388-af8a-500822f42101",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-app-7354d.appspot.com/o/Images%2F10_106_4.jpg?alt=media&token=102cb670-a8cb-46a7-925b-b37030d2c29b",
  },
];

export { Songs };
