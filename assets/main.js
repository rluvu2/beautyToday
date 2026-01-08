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
        { id: 1, title: '화장품 소개1', thumb: 'https://img.youtube.com/vi/WkGG0HZdGyc/0.jpg', url: 'video1.html' },
        { id: 2, title: '피부관리 노하우', thumb: 'http://phaeton.firestick.live/media/8296/highlighting/cut0_thumb.jpg', url: 'video2.html' },
        { id: 3, title: '여러가지 팩 장단점', thumb: 'http://phaeton.firestick.live/media/4408/highlighting/cut0_thumb.jpg', url: 'video3.html' }
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
