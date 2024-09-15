import { createNavbar } from './components/Navbar';
import { createHeader } from './components/Header';
import { loadPage, updateURL, loadInitialPage } from './utils/router';
import './style.css';


const appDiv = document.querySelector<HTMLDivElement>('#app')!;
appDiv.innerHTML = `
  ${createHeader()}
  ${createNavbar()}
  <div class="content"></div>
`;

const hamburger = document.querySelector('#hamburger');
const navbar = document.querySelector('#navbar');
hamburger?.addEventListener('click', () => {
  navbar?.classList.toggle('show');
});


document.querySelectorAll<HTMLAnchorElement>('#navbar a, .dropdown-content a').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const page = link.getAttribute('data-page');
    if (page) {
      loadPage(page);
      updateURL(page);

      document.querySelectorAll('#navbar a').forEach((a) => a.classList.remove('active'));
      link.classList.add('active');
    }
  });
});

window.addEventListener('popstate', () => {
  loadInitialPage();
});

loadInitialPage();
