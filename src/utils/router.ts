export async function loadPage(page: string) {
  const contentDiv = document.querySelector<HTMLDivElement>('.content');
  if (contentDiv) {
    try {
      const module = await import(`../pages/${page.charAt(0).toUpperCase() + page.slice(1)}.ts`);
      contentDiv.innerHTML = module.default;
    } catch (error) {
      console.error('Failed to load page content:', error);
      contentDiv.innerHTML = '<h3>Page not found</h3>';
    }
  }
}

export function updateURL(page: string) {
  history.pushState(null, '', `/${page}`);
}

export function loadInitialPage() {
  const path = window.location.pathname.slice(1);
  const page = path || 'home';
  loadPage(page);
}
