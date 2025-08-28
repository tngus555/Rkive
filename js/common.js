// .btn-top 스크롤에 따라 active 클래스 토글
window.addEventListener("scroll", function () {
  const btnTop = document.querySelector(".btn-top");
  if (!btnTop) return;
  const half = window.innerHeight / 2;
  if (window.scrollY > half) {
    btnTop.classList.add("active");
  } else {
    btnTop.classList.remove("active");
  }
});

// .btn-top 클릭 시 상단 이동
if (document.querySelector(".btn-top")) {
  document.querySelector(".btn-top").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
