/**
 * Smoothly scrolls the page to `target`. Scroll snapping is paused while the
 * programmatic scroll runs, otherwise browsers with `scroll-snap-type: mandatory`
 * can cancel the animation and snap back to the current section.
 */
export function scrollToElement(target: HTMLElement) {
  const root = document.documentElement;
  const top = Math.round(target.getBoundingClientRect().top + window.scrollY);
  const previousSnap = root.style.scrollSnapType;
  root.style.scrollSnapType = "none";

  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    window.removeEventListener("scrollend", finish);
    window.clearTimeout(timer);
    root.style.scrollSnapType = previousSnap;
  };
  const timer = window.setTimeout(finish, 1200);
  window.addEventListener("scrollend", finish);

  const start = window.scrollY;
  window.scrollTo({ top, behavior: "smooth" });
  // If smooth scrolling was ignored/cancelled, jump there directly.
  window.setTimeout(() => {
    if (Math.abs(window.scrollY - start) < 2 && Math.abs(top - start) >= 2) {
      root.style.scrollSnapType = "none";
      window.scrollTo({ top, behavior: "auto" });
    }
  }, 150);
}
