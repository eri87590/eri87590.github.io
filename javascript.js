const slide = document.getElementById('slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const indicator = document.getElementById('indicator');
const lists = document.querySelectorAll('.list');
const totalSlides = lists.length;
let count = 0;
let autoPlayInterval;
function updateListBackground() {
  for (let i = 0; i < lists.length; i++) {
    lists[i].style.backgroundColor = i === count % totalSlides ? '#000' : '#fff';
  }
}
function nextClick() {
  slide.classList.remove(`slide${count % totalSlides + 1}`);
  count++;
  slide.classList.add(`slide${count % totalSlides + 1}`);
  updateListBackground();
}
function prevClick() {
  slide.classList.remove(`slide${count % totalSlides + 1}`);
  count--;
  if (count < 0) count = totalSlides - 1;
  slide.classList.add(`slide${count % totalSlides + 1}`);
  updateListBackground();
}
function startAutoPlay() {
  autoPlayInterval = setInterval(nextClick, 3000);
}
function resetAutoPlayInterval() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}
next.addEventListener('click', () => {
  nextClick();
  resetAutoPlayInterval();
});
prev.addEventListener('click', () => {
  prevClick();
  resetAutoPlayInterval();
});
indicator.addEventListener('click', (event) => {
  if (event.target.classList.contains('list')) {
    const index = Array.from(lists).indexOf(event.target);
    slide.classList.remove(`slide${count % totalSlides + 1}`);
    count = index;
    slide.classList.add(`slide${count % totalSlides + 1}`);
    updateListBackground();
    resetAutoPlayInterval();
  }
});
startAutoPlay();

/*[1]クリック時に実行する関数*/
function clickListener (e) {
  /*クリックした要素のIDを表示*/
if(e.target.id==='picture1'){
  target1.scrollIntoView({
    behavior: 'smooth'}) 
}

if(e.target.id==='picture2'){
 target2.scrollIntoView({
behavior:'smooth'})
}
if(e.target.id==='picture3'){
  target3.scrollIntoView({
 behavior:'smooth'})
 }
}
/*[2]IMG要素をすべてセレクト*/
document.querySelectorAll("img").forEach((imgElm) => {
  /*[3]要素のクリックイベントにイベントリスナーをひもづける*/
  imgElm.addEventListener('click', clickListener);
})


document.addEventListener('DOMContentLoaded', function() {
  const animatedElements = document.querySelectorAll('.animation');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target); // 一度アニメーションしたら監視を停止
      }
    });
  }, {
    threshold: 0.5 // 要素の50%が見えたら発火
  });

  animatedElements.forEach(element => {
    // 初期状態ではアニメーションを停止
    element.style.animationPlayState = 'paused';
    observer.observe(element);
  });
});
