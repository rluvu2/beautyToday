// TikTok 연동 및 영상 가져오기 (데모용)
window.addEventListener('DOMContentLoaded', function() {
  const connectBtn = document.getElementById('connect-tiktok');
  if (connectBtn) {
    connectBtn.onclick = function() {
      window.open('https://buly.kr/DaPzHuB', '_blank');
    };
  }

  const fetchBtn = document.getElementById('fetch-videos');
  if (fetchBtn) fetchBtn.onclick = function() {
    // 데모용 더미 데이터
      const videos = [
        // { id: 1, title: '화장품 소개1', thumb: 'https://img.youtube.com/vi/WkGG0HZdGyc/0.jpg', url: 'https://rluvu2.github.io/beautyToday/video1.html' },
        // { id: 2, title: '피부관리 노하우', thumb: 'https://img.youtube.com/vi/fYk0CKfPXhk/0.jpg', url: 'https://rluvu2.github.io/beautyToday/video2.html' },
        { id: 3, title: '여러가지 팩 장단점', thumb: 'https://img.youtube.com/vi/6soPMWrJiNc/0.jpg', url: 'https://rluvu2.github.io/beautyToday/video1.html' }
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
});
