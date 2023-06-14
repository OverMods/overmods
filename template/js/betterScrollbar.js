var content = document.querySelector('.content');
var scrollbar = document.createElement('div');
var thumb = document.createElement('div');
var isDragging = false;
var startPosition;
var startScrollTop;

scrollbar.classList.add('scrollbar');
thumb.classList.add('thumb');

scrollbar.appendChild(thumb);
content.appendChild(scrollbar);

updateScrollbar();

content.addEventListener('scroll', function() {
  updateScrollbar();
});

window.addEventListener('resize', function() {
  updateScrollbar();
});

thumb.addEventListener('mousedown', function(e) {
  isDragging = true;
  startPosition = e.clientY;
  startScrollTop = content.scrollTop;
});

document.addEventListener('mousemove', function(e) {
  if (isDragging) {
    var deltaY = e.clientY - startPosition;
    var scrollDelta = (deltaY / scrollbar.offsetHeight) * content.scrollHeight;
    content.scrollTop = startScrollTop + scrollDelta;
  }
});

document.addEventListener('mouseup', function() {
  isDragging = false;
});

function updateScrollbar() {
  var scrollTop = content.scrollTop;
  var maxScrollTop = content.scrollHeight - content.clientHeight;

  scrollbarHeight = content.clientHeight * 0.92;
  scrollbar.style.height = `${scrollbarHeight}px`;

  thumbHeight = (content.clientHeight / content.scrollHeight) * scrollbarHeight;
  thumb.style.height = `${thumbHeight}px`;

  if (scrollTop >= maxScrollTop) {
    thumb.style.top = `${scrollbarHeight - thumbHeight}px`;
  } else {
    var thumbTop = (scrollTop / maxScrollTop) * (scrollbarHeight - thumbHeight);
    thumb.style.top = `${thumbTop}px`;
  }

  if (content.scrollHeight <= content.clientHeight) {
    scrollbar.classList.add('scrollbar-hidden');
  } else {
    scrollbar.classList.remove('scrollbar-hidden');
  }
}
