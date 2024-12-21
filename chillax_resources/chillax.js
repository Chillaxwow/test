console.log("调用chillax.js成功 ");
document.getElementById('blinds_container').style.display = 'none';
// var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var isMobile = false
var iconinterval;
var radiusinterval;
var radius = [20,110];
var opacity = [1,0.5];
var canvas1 = document.querySelectorAll('.loading_gif')[0];
var canvas2 = document.querySelectorAll('.loading_gif')[1];

if (isMobile) {
  document.getElementById('splash_chillax_web').style.display = 'none'
  console.log("这是一个手机");
} 
else 
{
  document.getElementById('splash_chillax_mobile').style.display = "none"
  console.log("这是一个电脑"+navigator.userAgent);

  radiusinterval = setInterval(() => {
    draw(canvas1,0);
    draw(canvas2,1);
  }, 50); // 切换图片的间隔，单位为毫秒

  document.addEventListener('sceneLoaded', function (event) {
    var sceneName = event.detail.sceneName;
    console.log("场景加载完毕，并调用成功: " + sceneName);
    document.title = "Website of Chillax";
    setTimeout(() => {
      toggleDiv();
      // clearInterval(iconinterval);
      clearInterval(radiusinterval);
    }, 1000);//加载完成后1秒调用转场动画，settimeout是只调用一次
    var link = document.getElementById('favicon');
    link.href = `chillax_resources/Headicon.png`;
  });
  
  document.addEventListener("DOMContentLoaded", function() {//HTML加载成功后触发
    const images = document.querySelectorAll(".wordimage");
    let currentIndex = 0;
    function showImage(index) {//更换图片的函数
      images.forEach(wordimage => wordimage.style.opacity = 0);
      images[index].style.opacity = 1;
    }
  
    setInterval(() => {
      showImage(currentIndex);
      currentIndex = (currentIndex + 1) % images.length;
    }, 400); // 切换图片的间隔，单位为毫秒

    // 更换标签页的icon，不更换了，更换占线程
    // var link = document.getElementById('favicon');
    // var icon_index = 0;
    
    // iconinterval = setInterval(function() {
    //     link.href = `chillax_resources/icon_loading_${icon_index}.png`;
    //     icon_index = (icon_index+1) % 8
    // }, 300); // 切换图片的间隔，单位为毫秒


  });
}
function toggleDiv() {
  document.getElementById('splash_chillax_web').style.display = 'none';
  document.getElementById('blinds_container').style.display = 'flex';
  setInterval(() => {
    document.getElementById('blinds_container').style.display = 'none';
  }, 1000);//加载完成后1秒消失
}

function draw(canvas,i) {
  var ctxx = canvas.getContext('2d');
  ctxx.clearRect(0, 0, canvas.width, canvas.height);
  ctxx.beginPath();
  ctxx.arc(canvas.width / 2, canvas.height / 2, radius[i], 0, 2 * Math.PI);
  ctxx.strokeStyle = 'rgba(255, 255, 255, ' + opacity[i] + ')';
  ctxx.lineWidth = 3;
  ctxx.stroke();

  // 根据情况调整半径和透明度
  radius[i] += 4; 
  opacity[i] -= 0.02; 

  if (radius[i] >= 200) {
      increasing = false;
      radius[i] = 20; // 每次减少1
      opacity[i] =1; 
  } 
  // requestAnimationFrame(draw); // 不断循环绘制，这样就走不出这个draw()函数的循环了，要用setInterval()新开一个线程才行
}

