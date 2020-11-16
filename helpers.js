export function findNodeByClass(element, className) {
    const isHasClass = element.classList.contains(className);
    if(element === document.querySelector('body') || isHasClass) return isHasClass;
    return findNodeByClass(element.parentNode, className);
}

export function getCoords(elem) {
    const box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      bottom: box.bottom + pageYOffset,
      left: box.left + pageXOffset,
      right: box.right + pageXOffset
    };
  }