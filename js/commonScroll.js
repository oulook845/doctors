/* scroll 이벤트 : 현재 scroll 값을 넘김 */
export function getScrollData() {
  return Math.floor(window.scrollY || window.pageYOffset);
}
