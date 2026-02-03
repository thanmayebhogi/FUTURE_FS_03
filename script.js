const songs = [
    {
        id: 1,
        title: "Cruel Summer",
        artist: "Taylor Swift",
        language: "english",
        cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=300&q=80",
        singerId: "taylor",
        genreId: "pop",
        source: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/44/af/81/44af8168-9609-1b85-5048-ada08dceacf3/mzaf_1341699644335558812.plus.aac.p.m4a"
    },
    {
        id: 2,
        title: "Kesariya",
        artist: "Arijit Singh",
        language: "hindi",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=300&q=80",
        singerId: "arijit",
        genreId: "indie",
        source: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/38/4c/5c/384c5c8f-3ff8-e457-b2f7-3158ce108649/mzaf_12389299033886433185.plus.aac.p.m4a"
    },
    {
        id: 3,
        title: "Butter",
        artist: "BTS",
        language: "korean",
        cover: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&w=300&q=80",
        singerId: "bts",
        genreId: "pop",
        source: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/f4/80/70/f48070d2-3802-520b-c724-c367125ef2a5/mzaf_16052369757637658622.plus.aac.p.m4a"
    },
    {
        id: 4,
        title: "Tum Hi Ho",
        artist: "Arijit Singh",
        language: "hindi",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80",
        singerId: "arijit",
        genreId: "indie",
        source: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/61/1d/3f/611d3f53-8d7b-8455-c66a-af21f28db1cb/mzaf_3524364971696240598.plus.aac.p.m4a"
    },
    {
        id: 5,
        title: "Blank Space",
        artist: "Taylor Swift",
        language: "english",
        cover: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&w=300&q=80",
        singerId: "taylor",
        genreId: "pop",
        source: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f1/dd/3a/f1dd3add-0fc5-2e35-3460-923fb707f21e/mzaf_7924539200493199372.plus.aac.p.m4a"
    },
    {
        id: 6,
        title: "Butta Bomma",
        artist: "Armaan Malik",
        language: "telugu",
        cover: "https://images.unsplash.com/photo-1459749411177-287ce3288b71?auto=format&fit=crop&w=300&q=80",
        singerId: "other",
        genreId: "indie",
        source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
    },
    {
        id: 7,
        title: "Dynamite",
        artist: "BTS",
        language: "korean",
        cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=300&q=80",
        singerId: "bts",
        genreId: "pop",
        source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
    },
    {
        id: 8,
        title: "Param Sundari",
        artist: "Shreya Ghoshal",
        language: "hindi",
        cover: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=300&q=80",
        singerId: "shreya",
        genreId: "indie",
        source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
    },
    {
        id: 9,
        title: "Chaleya",
        artist: "Arijit Singh",
        language: "hindi",
        cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=300&q=80",
        singerId: "arijit",
        genreId: "indie",
        source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
    },
    {
        id: 10,
        title: "Anti-Hero",
        artist: "Taylor Swift",
        language: "english",
        cover: "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=300&q=80",
        singerId: "taylor",
        genreId: "pop",
        source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
    },
    {
        id: 11,
        title: "Manike",
        artist: "Yohani",
        language: "hindi",
        cover: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=300&q=80",
        singerId: "other",
        genreId: "pop",
        source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3"
    },
    {
        id: 12,
        title: "Samajavaragamana",
        artist: "Sid Sriram",
        language: "telugu",
        cover: "https://images.unsplash.com/photo-1510915362694-bdddb0292777?auto=format&fit=crop&w=300&q=80",
        singerId: "other",
        genreId: "indie",
        source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3"
    },
    {
        id: 13,
        title: "Permission to Dance",
        artist: "BTS",
        language: "korean",
        cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=300&q=80",
        singerId: "bts",
        genreId: "pop",
        source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3"
    },
    {
        id: 14,
        title: "Gerua",
        artist: "Arijit Singh",
        language: "hindi",
        cover: "https://images.unsplash.com/photo-1471478331149-c72f17e33c14?auto=format&fit=crop&w=300&q=80",
        singerId: "arijit",
        genreId: "indie",
        source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3"
    },
    {
        id: 15,
        title: "Love Story",
        artist: "Taylor Swift",
        language: "english",
        cover: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&w=300&q=80",
        singerId: "taylor",
        genreId: "pop",
        source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3"
    },
    {
        id: 16,
        title: "Oo Antava",
        artist: "Indravathi Chauhan",
        language: "telugu",
        cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=300&q=80",
        singerId: "other",
        genreId: "pop",
        source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3"
    },
    {
        id: 17,
        title: "Deewani Mastani",
        artist: "Shreya Ghoshal",
        language: "hindi",
        cover: "https://images.unsplash.com/photo-1458560871784-56d23406c091?auto=format&fit=crop&w=300&q=80",
        singerId: "shreya",
        genreId: "indie",
        source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
        id: 18,
        title: "Apna Bana Le",
        artist: "Arijit Singh",
        language: "hindi",
        cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=300&q=80",
        singerId: "arijit",
        genreId: "indie",
        source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
        id: 19,
        title: "Seven",
        artist: "Jungkook (BTS)",
        language: "korean",
        cover: "https://images.unsplash.com/photo-1525095851841-d46e13b8590f?auto=format&fit=crop&w=300&q=80",
        singerId: "bts",
        genreId: "pop",
        source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    },
    {
        id: 20,
        title: "Heeriye",
        artist: "Arijit Singh",
        language: "hindi",
        cover: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?auto=format&fit=crop&w=300&q=80",
        singerId: "arijit",
        genreId: "indie",
        source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    },
    {
        id: 21,
        title: "Samayama",
        artist: "Anthariksham",
        language: "telugu",
        cover: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=300&q=80",
        singerId: "other",
        genreId: "indie",
        source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    },
    {
        id: 22,
        title: "Take Five",
        artist: "Dave Brubeck",
        language: "english",
        cover: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?auto=format&fit=crop&w=300&q=80",
        singerId: "other",
        genreId: "jazz",
        source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
    },
    {
        id: 23,
        title: "Fly Me To The Moon",
        artist: "Frank Sinatra",
        language: "english",
        cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=300&q=80",
        singerId: "other",
        genreId: "jazz",
        source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
    },
    {
        id: 24,
        title: "Bohemian Rhapsody",
        artist: "Queen",
        language: "english",
        cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=300&q=80",
        singerId: "other",
        genreId: "rock",
        source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
    },
    {
        id: 25,
        title: "Hotel California",
        artist: "Eagles",
        language: "english",
        cover: "https://images.unsplash.com/photo-1514924013411-cbf25faa35ad?auto=format&fit=crop&w=300&q=80",
        singerId: "other",
        genreId: "rock",
        source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
    }
];

let favorites = [];
let currentSongId = null;
let isPlaying = false;
let user = null; // null = guest, object = logged in

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    applyFilters();
    checkAuth();
});

// Render Function
function renderSongs(songList, targetGridId = 'songsGrid') {
    const grid = document.getElementById(targetGridId);
    grid.innerHTML = '';

    if (songList.length === 0) {
        grid.innerHTML = '<p class="text-secondary" style="grid-column: 1/-1; text-align: center;">No songs found.</p>';
        return;
    }

    songList.forEach(song => {
        const isFav = favorites.includes(song.id);
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${song.cover}" alt="${song.title}" class="card-img" onerror="this.src='https://via.placeholder.com/300?text=Music'">
                <div class="play-overlay">
                    <button class="play-btn-card" onclick="playSong(${song.id})">
                        <i class="fa-solid fa-play"></i>
                    </button>
                </div>
            </div>
            <div class="card-title">${song.title}</div>
            <div class="card-subtitle">${song.artist}</div>
            <div style="margin-top: 8px; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 10px; background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px; text-transform: uppercase;">${song.language}</span>
                <button onclick="toggleFavorite(${song.id}, this)" class="like-btn ${isFav ? 'active' : ''}">
                    <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filtering Logic
function applyFilters() {
    const lang = document.getElementById('languageFilter').value;
    const singer = document.getElementById('singerFilter').value;

    let filtered = songs;

    if (lang !== 'all') {
        filtered = filtered.filter(s => s.language === lang);
    }

    if (singer !== 'all') {
        filtered = filtered.filter(s => s.singerId === singer);
    }

    renderSongs(filtered);
}

function searchSongs(query) {
    const lowerQ = query.toLowerCase();
    const filtered = songs.filter(s =>
        s.title.toLowerCase().includes(lowerQ) ||
        s.artist.toLowerCase().includes(lowerQ)
    );
    renderSongs(filtered);
}

// Favorites Logic
function toggleFavorite(id, btn) {
    const index = favorites.indexOf(id);
    const icon = btn.querySelector('i');

    if (index === -1) {
        favorites.push(id);
        btn.classList.add('active');
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
    } else {
        favorites.splice(index, 1);
        btn.classList.remove('active');
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
    }

    // Refresh Profile grid if open
    if (document.getElementById('profileSection').style.display === 'block') {
        const favSongs = songs.filter(s => favorites.includes(s.id));
        renderSongs(favSongs, 'profileLikedGrid');
    }
}

function showFavorites() {
    // Legacy: Redirect to profile for "Favorites" view
    if (!user) {
        alert("Please login to see your library!");
        openLoginModal();
    } else {
        showProfile();
    }
}

function filterSongs(type) {
    if (type === 'all') {
        // Hide Profile & Others
        document.getElementById('profileSection').style.display = 'none';
        document.getElementById('discoverSection').style.display = 'none';
        document.getElementById('playlistsSection').style.display = 'none';
        document.getElementById('recentsSection').style.display = 'none';

        document.getElementById('homeSection').style.display = 'block';
        document.getElementById('trendingSection').style.display = 'block';

        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        document.querySelectorAll('.nav-item')[0].classList.add('active'); // Home

        // Reset title
        document.querySelector('.section-header h2').innerText = "Trending Now";

        applyFilters();
    }
}

// Auth & Profile Logic
function openLoginModal() {
    document.getElementById('loginModal').classList.add('active');
}

function closeLoginModal() {
    document.getElementById('loginModal').classList.remove('active');
}

function performLogin() {
    const username = document.getElementById('usernameInput').value || "MusicLover";
    user = {
        name: username,
        avatar: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80" // New Landscape/Flower
    };
    checkAuth();
    closeLoginModal();
}

function logout() {
    user = null;
    checkAuth();
    filterSongs('all'); // Go home
}

function checkAuth() {
    if (user) {
        // Logged In
        document.getElementById('loginBtn').style.display = 'none';
        document.getElementById('userAvatarSmall').style.display = 'block';
        document.getElementById('navProfile').style.display = 'flex';
        document.getElementById('profileName').innerText = user.name;
    } else {
        // Guest
        document.getElementById('loginBtn').style.display = 'block';
        document.getElementById('userAvatarSmall').style.display = 'none';
        document.getElementById('navProfile').style.display = 'none';
    }
}

function showProfile() {
    if (!user) {
        openLoginModal();
        return;
    }

    // UI Switch
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('trendingSection').style.display = 'none';
    document.getElementById('profileSection').style.display = 'block';

    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById('navProfile').classList.add('active');

    // Render Liked Songs
    const favSongs = songs.filter(s => favorites.includes(s.id));
    renderSongs(favSongs, 'profileLikedGrid');
}





// Navigation Functions
function showDiscover() {
    hideAllSections();
    document.getElementById('discoverSection').style.display = 'block';
    // Reset Genre view
    document.getElementById('genreResultSection').style.display = 'none';
    document.getElementById('genreList').style.display = 'grid'; // Ensure grid is visible
    updateActiveNav('Discover');
}

function showPlaylists() {
    hideAllSections();
    document.getElementById('playlistsSection').style.display = 'block';
    updateActiveNav('Playlists');
}

function showRecents() {
    // Mock Recents: IDs 1, 5, 10, 2
    const recentIds = [1, 5, 10, 2, 21]; // Adding Samayama
    const recentSongs = songs.filter(s => recentIds.includes(s.id));

    hideAllSections();
    document.getElementById('recentsSection').style.display = 'block';
    renderSongs(recentSongs, 'recentsGrid');
    updateActiveNav('Recent');
}

function openGenre(genreId) {
    // Hide genre list, show result section inside Discover
    document.getElementById('genreList').style.display = 'none';
    const resultSection = document.getElementById('genreResultSection');
    resultSection.style.display = 'block';

    // Capitalize
    const genreName = genreId.charAt(0).toUpperCase() + genreId.slice(1);
    document.getElementById('genreTitle').innerText = genreName + " Songs";

    const genreSongs = songs.filter(s => s.genreId === genreId);
    renderSongs(genreSongs, 'genreGrid');
}

function backToGenres() {
    document.getElementById('genreResultSection').style.display = 'none';
    document.getElementById('genreList').style.display = 'grid';
}

function hideAllSections() {
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('trendingSection').style.display = 'none';
    document.getElementById('profileSection').style.display = 'none';
    document.getElementById('discoverSection').style.display = 'none';
    document.getElementById('playlistsSection').style.display = 'none';
    document.getElementById('recentsSection').style.display = 'none';
}

function updateActiveNav(name) {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const items = document.querySelectorAll('.nav-item');
    items.forEach(item => {
        if (item.innerText.includes(name)) item.classList.add('active');
    });
}

// Player Logic
const audioPlayer = document.getElementById('audioPlayer');
const progressBar = document.querySelector('.progress-fill');
const progressBarWrapper = document.querySelector('.progress-bar-wrapper');

audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.style.width = percent + '%';

        // Update Time Display (Optional features)
        const currentMins = Math.floor(audioPlayer.currentTime / 60);
        const currentSecs = Math.floor(audioPlayer.currentTime % 60);
        const durationMins = Math.floor(audioPlayer.duration / 60);
        const durationSecs = Math.floor(audioPlayer.duration % 60);

        document.getElementById('startTime').innerText = `${currentMins}:${currentSecs < 10 ? '0' : ''}${currentSecs}`;

        if (!isNaN(durationMins)) {
            document.getElementById('endTime').innerText = `${durationMins}:${durationSecs < 10 ? '0' : ''}${durationSecs}`;
        }
    }
});

// Click on progress bar to seek
progressBarWrapper.addEventListener('click', (e) => {
    const width = progressBarWrapper.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;

    audioPlayer.currentTime = (clickX / width) * duration;
});

// Volume Control - Init to 100%
document.querySelector('.volume-fill').style.width = '100%';
document.querySelector('.volume-slider').addEventListener('click', function (e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    let volume = clickX / width;

    if (volume < 0) volume = 0;
    if (volume > 1) volume = 1;

    audioPlayer.volume = volume;
    document.querySelector('.volume-fill').style.width = (volume * 100) + '%';
});

// Helper: Toggle Favorite (Added to ensure it exists)
function toggleFavorite(id, btn) {
    const index = favorites.indexOf(id);
    if (index === -1) {
        favorites.push(id);
        btn.classList.add('active');
        btn.querySelector('i').classList.remove('fa-regular');
        btn.querySelector('i').classList.add('fa-solid');
    } else {
        favorites.splice(index, 1);
        btn.classList.remove('active');
        btn.querySelector('i').classList.remove('fa-solid');
        btn.querySelector('i').classList.add('fa-regular');
    }
}

function playSong(id) {
    const song = songs.find(s => s.id === id);
    if (!song) return;

    if (currentSongId === id) {
        togglePlay();
        return;
    }

    currentSongId = id;
    isPlaying = true;

    // Load Audio with Error Handling
    if (song.source) {
        // Show loading state
        const playBtn = document.getElementById('playPauseBtn');
        playBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';

        audioPlayer.src = song.source;

        const playPromise = audioPlayer.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Playback started!
                playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
            })
                .catch(error => {
                    console.error("Playback failed:", error);
                    alert("Cannot play audio: " + error.message + "\n(Note: Some sources may be blocked by your browser settings or network)");
                    isPlaying = false;
                    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
                });
        }
    } else {
        alert("Audio source not available for this track.");
        isPlaying = false;
        return;
    }

    // Update Player UI
    document.getElementById('currentTitle').innerText = song.title;
    document.getElementById('currentArtist').innerText = song.artist;
    document.getElementById('currentThumb').src = song.cover;

    const playBtn = document.getElementById('playPauseBtn');
    // Ensure we don't overwrite the spinner if it's still loading, but here we update metadata.
    // The promise above handles the icon.

    // Update like button in player
    const playerLikeBtn = document.getElementById('playerLikeBtn');
    const newBtn = playerLikeBtn.cloneNode(true);
    playerLikeBtn.parentNode.replaceChild(newBtn, playerLikeBtn);

    newBtn.onclick = function () {
        toggleFavorite(id, this);
    };

    if (favorites.includes(id)) {
        newBtn.classList.add('active');
        newBtn.querySelector('i').classList.remove('fa-regular');
        newBtn.querySelector('i').classList.add('fa-solid');
    } else {
        newBtn.classList.remove('active');
        newBtn.querySelector('i').classList.remove('fa-solid');
        newBtn.querySelector('i').classList.add('fa-regular');
    }
}

function togglePlay() {
    if (!currentSongId) return;

    isPlaying = !isPlaying;
    const playBtn = document.getElementById('playPauseBtn');

    if (audioPlayer.paused) {
        audioPlayer.play();
        isPlaying = true;
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        audioPlayer.pause();
        isPlaying = false;
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}
