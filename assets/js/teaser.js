// 티저 KV 등장 애니메이션: 로고 → START 배지 → 타이틀 → 정보 박스 → 하단 문구 순서로 하나씩 등장
(function () {
  var reveal = function () { document.body.classList.remove('t-anim'); };
  if (!window.jQuery || matchMedia('(prefers-reduced-motion: reduce)').matches) { reveal(); return; }
  var STEP = [150, 450, 750, 1150, 1450]; // data-t-in 단계별 시작 시점(ms)
  jQuery(function ($) {
    $('[data-t-in]').each(function () {
      var $el = $(this);
      setTimeout(function () { $el.addClass('t-in'); }, STEP[+$el.data('t-in')] || 0);
    });
  });
})();
