console.log("调用chillax.js成功 ");



function toggleDiv() {
  var myDiv = document.getElementById('splash_chillax');
  myDiv.style.display = 'none';
}


document.addEventListener('sceneLoaded', function (event) {
  var sceneName = event.detail.sceneName;
  console.log("场景加载完毕，并调用成功: " + sceneName);
  setInterval(() => {
    toggleDiv();
  }, 1000);//加载完成后1秒消失
});

document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".wordimage");
  let currentIndex = 0;

  function showImage(index) {
    images.forEach(wordimage => wordimage.style.opacity = 0);
    images[index].style.opacity = 1;
    // console.log("shezhicehngg:",index);
  }

  setInterval(() => {
    showImage(currentIndex);
    currentIndex = (currentIndex + 1) % images.length;
  }, 500); // 切换图片的间隔，单位为毫秒
});