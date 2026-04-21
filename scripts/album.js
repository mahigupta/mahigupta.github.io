// album.js
// Album Modal & Swiper Carousel logic
export function setupAlbumModal() {
  const albumImages = [
    { src: 'images/album/rupa_gupta_family.jpg', caption: 'Rupa, Satish, Adarsh & Akansha Gupta' },
    { src: 'images/album/sanjay_gupta_family.jpg', caption: 'Sanjay, Rakhi, Eshita & Eshan Gupta' },
    { src: 'images/album/manoj_gupta_family.jpg', caption: 'Manoj, Pooja, Aryan & Aarav Gupta' },
    { src: 'images/album/mamta_gupta_family.jpg', caption: 'Mamta, Ansh & Ankush Garg' },
    { src: 'images/album/shrikant_gupta_family.jpg', caption: 'Shrikant, Vidhi, Sanvi & Samarth Gupta' },
    { src: 'images/album/mahesh_gupta_family.jpg', caption: 'Mahesh, Rupal & Vedant Gupta' },
    { src: 'images/album/ruchi_gupta_family.jpg', caption: 'Ruchi & Varun' },
    // Add more images with captions as needed
  ];

  const openAlbumModalBtn = document.getElementById('openAlbumModal');
  const albumModal = document.getElementById('albumModal');
  const closeAlbumModalBtn = document.getElementById('closeAlbumModal');
  const albumSwiperWrapper = document.getElementById('albumSwiperWrapper');
  let albumSwiper = null;

  if (!openAlbumModalBtn || !albumModal || !closeAlbumModalBtn || !albumSwiperWrapper) return;

  openAlbumModalBtn.onclick = function() {
    // Populate slides with captions, add bottom padding for nav buttons
    albumSwiperWrapper.innerHTML = albumImages.map(imgObj =>
      `<div class="swiper-slide" style="padding-bottom:54px;box-sizing:border-box;">
        <img src="${imgObj.src}" alt="Family Photo" style="width:100%;height:auto;max-height:480px;object-fit:contain;border-radius:12px;box-shadow:0 4px 16px rgba(0,0,0,0.10);background:#f1f5f9;display:block;margin:auto;" />
        <div style="text-align:center;margin:16px 0 0 0;font-size:12px;color:#334155;font-weight:500;background:rgba(255,255,255,0.92);padding:6px 0 2px 0;line-height:1.4;">${imgObj.caption || ''}</div>
      </div>`
    ).join('');
    albumModal.classList.add('open');
    albumModal.setAttribute('aria-hidden', 'false');
    // Always destroy previous Swiper instance if exists
    if (albumSwiper) {
      albumSwiper.destroy(true, true);
      albumSwiper = null;
    }
    // Initialize Swiper fresh
    albumSwiper = new Swiper('#albumSwiper', {
      loop: true,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      slidesPerView: 1,
      spaceBetween: 24,
      centeredSlides: true,
      keyboard: { enabled: true },
    });
  };
  closeAlbumModalBtn.onclick = function() {
    albumModal.classList.remove('open');
    albumModal.setAttribute('aria-hidden', 'true');
    // Destroy Swiper instance on close to prevent navigation bug
    if (albumSwiper) {
      albumSwiper.destroy(true, true);
      albumSwiper = null;
    }
  };
}
