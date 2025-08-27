// main.js

document.addEventListener('DOMContentLoaded', function () {
  // Add loading overlay
  const loadingOverlay = document.createElement('div');
  loadingOverlay.className = 'loading-overlay';
  loadingOverlay.innerHTML = '<div class="loading-spinner"></div>';
  document.body.appendChild(loadingOverlay);

  // Hide loading overlay after page loads
  window.addEventListener('load', function() {
    setTimeout(() => {
      loadingOverlay.classList.add('hidden');
      setTimeout(() => {
        loadingOverlay.remove();
      }, 500);
    }, 800);
  });

  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Enhanced poem filtering with animations
  function filterPoems(category) {
    const poems = document.querySelectorAll('.poem-card');
    
    // First, fade out all poems
    poems.forEach((poem, index) => {
      poem.style.transition = 'all 0.3s ease';
      poem.style.transform = 'scale(0.8)';
      poem.style.opacity = '0';
    });

    // After fade out, show/hide poems and fade in visible ones
    setTimeout(() => {
      poems.forEach((poem, index) => {
        if (category === 'all' || poem.dataset.category === category) {
          poem.style.display = 'block';
          setTimeout(() => {
            poem.style.transform = 'scale(1)';
            poem.style.opacity = '1';
          }, index * 100); // Staggered animation
        } else {
          poem.style.display = 'none';
        }
      });
    }, 300);
  }

  const categorySelect = document.getElementById('poem-category');
  if (categorySelect) {
    categorySelect.addEventListener('change', function () {
      filterPoems(this.value);
    });
  }

  // Initialize with all poems showing
  filterPoems('all');

  // Add parallax effect to header
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.unified-header');
    const footer = document.querySelector('footer');
    
    if (header) {
      header.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    if (footer) {
      const footerOffset = footer.offsetTop - window.innerHeight;
      if (scrolled > footerOffset) {
        footer.style.transform = `translateY(${(scrolled - footerOffset) * 0.3}px)`;
      }
    }
  });

  // Add hover sound effect (optional)
  const poemCards = document.querySelectorAll('.poem-card');
  poemCards.forEach(card => {
    card.addEventListener('mouseenter', function(e) {
      // Add subtle scale animation
      this.style.transform = 'translateY(-12px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function(e) {
      this.style.transform = 'translateY(0) scale(1)';
    });
    
    // Ensure clicks work properly
    card.addEventListener('click', function(e) {
      // Don't prevent default - let the link work naturally
      console.log('Poem card clicked:', this.href);
    });
  });

  // Add typing effect to main title
  const title = document.querySelector('h1');
  if (title && title.textContent === 'Poetry Collection') {
    const text = title.textContent;
    title.textContent = '';
    title.style.borderRight = '2px solid white';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        title.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      } else {
        setTimeout(() => {
          title.style.borderRight = 'none';
        }, 1000);
      }
    };
    
    setTimeout(typeWriter, 1000);
  }

  // Add intersection observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
      }
    });
  }, observerOptions);

  // Observe poem cards for scroll animations
  document.querySelectorAll('.poem-card').forEach(card => {
    observer.observe(card);
  });
});