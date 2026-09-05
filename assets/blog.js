(() => {
  const blog = document.querySelector('[data-blog]');
  if (!blog) return;
  const rows = [...blog.querySelectorAll('.article-row')];
  const filters = [...blog.querySelectorAll('[data-filter]')];
  const search = blog.querySelector('input');
  const pagination = blog.querySelector('.blog-pagination');
  let topic = 'All', page = 1;
  blog.querySelector('.blog-toolbar').hidden = false;
  function render() {
    const query = search.value.trim().toLocaleLowerCase();
    const matches = rows.filter(row => (topic === 'All' || row.dataset.topics.split(',').includes(topic)) && row.textContent.toLocaleLowerCase().includes(query));
    const pages = Math.ceil(matches.length / 5);
    rows.forEach(row => { row.hidden = true; });
    matches.slice((page - 1) * 5, page * 5).forEach(row => { row.hidden = false; });
    blog.querySelector('.empty-state').hidden = matches.length > 0;
    pagination.replaceChildren();
    pagination.hidden = pages < 2;
    function button(label, target, disabled, current = false) {
      const el = document.createElement('button');
      el.type = 'button'; el.textContent = label; el.disabled = disabled;
      if (current) el.setAttribute('aria-current', 'page');
      el.addEventListener('click', () => { page = target; render(); blog.scrollIntoView({ block: 'start' }); pagination.querySelector('[aria-current]')?.focus({ preventScroll: true }); });
      pagination.append(el);
    }
    button('‹ Newer', page - 1, page === 1);
    for (let n = 1; n <= pages; n++) button(String(n), n, false, n === page);
    button('Older ›', page + 1, page === pages);
  }
  filters.forEach(button => button.addEventListener('click', () => {
    topic = button.dataset.filter; page = 1;
    filters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    render();
  }));
  search.addEventListener('input', () => { page = 1; render(); });
  render();
})();
