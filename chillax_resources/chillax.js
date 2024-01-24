console.log("调用chillax.js成功 ");

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
  document.getElementById('splash_chillax_web').style.display = 'none'
  console.log("这是一个手机");
} 
else 
{
  document.getElementById('splash_chillax_mobile').style.display = "none"
  console.log("这是一个电脑"+navigator.userAgent);
  function toggleDiv() {
    var myDiv = document.getElementById('splash_chillax_web');
    var myDiv2 = document.getElementById('splash_chillax_mobile');
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
}


