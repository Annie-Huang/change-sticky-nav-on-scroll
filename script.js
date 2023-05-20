// For this tutorial on YT:
// https://youtu.be/V-CBdlfCPic

const primaryHeader = document.querySelector('.primary-header');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
primaryHeader.before(scrollWatcher); // this add <div data-scroll-watcher=""></div> before the .primary-header component.

const navObserver = new IntersectionObserver(
  (entries) => {
    console.log('entries=', entries);

    // When the page initially launched, entries[0].isIntersecting = true
    // Whenever user scroll the page to a position that is away from the top, entries[0].isIntersecting = false
    // When user scroll the page back to the top again, entries[0].isIntersecting = true
    // So the following will add .sticking to the primaryHeader as long as it's not at the top of the page.
    primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting);

    // rootMargin: '50px 0px 0px 0px' meaning will only take effect when you are 50px away from the top. keep in mind to add all the px even though it is 0 for it to work
  },
  { rootMargin: '50px 0px 0px 0px' }
);

navObserver.observe(scrollWatcher);
