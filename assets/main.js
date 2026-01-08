// TikTok 연동 및 영상 가져오기 (데모용)
document.getElementById('fetch-videos').onclick = function() {
const connectBtn = document.getElementById('connect-tiktok');
if (connectBtn) {
  connectBtn.onclick = function() {
    alert('TikTok 연동 기능은 데모입니다. 실제 연동은 구현 필요!');
  };
}

const fetchBtn = document.getElementById('fetch-videos');
if (fetchBtn) fetchBtn.onclick = function() {
  // 데모용 더미 데이터
  const videos = [
    { id: 1, title: '댄스 챌린지', thumb: 'https://via.placeholder.com/80x120?text=Video+1', url: '#' },
    { id: 2, title: '꿀팁 영상', thumb: 'https://via.placeholder.com/80x120?text=Video+2', url: '#' },
    { id: 3, title: '웃긴 순간', thumb: 'https://via.placeholder.com/80x120?text=Video+3', url: '#' }
  ];
  const list = document.getElementById('videos-list');
  list.innerHTML = '';
  videos.forEach(v => {
    const item = document.createElement('div');
    item.className = 'video-item';
    item.innerHTML = `
      <img class="video-thumb" src="${v.thumb}" alt="${v.title}">
      <div>
        <div><strong>${v.title}</strong></div>
        <a href="${v.url}" target="_blank">영상 보기</a>
      </div>
    `;
    list.appendChild(item);
  });
};
