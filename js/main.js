// main.js

document.addEventListener('DOMContentLoaded', function () {
  function filterPoems(category) {
    const poems = document.querySelectorAll('.poem-card');
    poems.forEach(poem => {
      if (category === 'all' || poem.dataset.category === category) {
        poem.style.display = 'block';
      } else {
        poem.style.display = 'none';
      }
    });
  }

  const categorySelect = document.getElementById('poem-category');
  if (categorySelect) {
    categorySelect.addEventListener('change', function () {
      filterPoems(this.value);
    });
  }

  // Initialize with all poems showing
  filterPoems('all');
});
