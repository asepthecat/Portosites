const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = ['videos/hero-1.mp4', 'videos/hero-2.mp4', 'videos/hero-3.mp4', 'videos/hero-4.mp4', ];

let index = 0;
nextButton.addEventListener('click', function(){

    index += 1
    video.src = movieList[index];

    if (index === 3){
        index = -1;
    }
})



  function showPopup(title, description) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-description').innerText = description;
    document.getElementById('popup-overlay').style.display = 'flex';
  }

  function closePopup() {
    document.getElementById('popup-overlay').style.display = 'none';
  }



