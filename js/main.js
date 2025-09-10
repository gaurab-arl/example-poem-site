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
    const grid = document.querySelector('.poems-grid');
    
    // Add filtering class for smooth transitions
    grid.classList.add('filtering');
    
    // First, fade out all poems
    poems.forEach((poem, index) => {
      poem.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
      poem.style.transform = 'scale(0.9) translateY(20px)';
      poem.style.opacity = '0';
    });

    // After fade out, show/hide poems and fade in visible ones
    setTimeout(() => {
      let visibleIndex = 0;
      poems.forEach((poem, index) => {
        if (category === 'all' || poem.dataset.category === category) {
          poem.style.display = 'block';
          setTimeout(() => {
            poem.style.transform = 'scale(1) translateY(0)';
            poem.style.opacity = '1';
          }, visibleIndex * 80); // Staggered animation for visible poems only
          visibleIndex++;
        } else {
          poem.style.display = 'none';
        }
      });
      
      // Remove filtering class after animations complete
      setTimeout(() => {
        grid.classList.remove('filtering');
      }, 600);
    }, 200);
  }

  const categorySelect = document.getElementById('poem-category');
  if (categorySelect) {
    categorySelect.addEventListener('change', function () {
      filterPoems(this.value);
    });
  }

  // Initialize with all poems showing
  filterPoems('all');

  // Enhanced parallax effect with throttling
  let ticking = false;
  
  function updateParallax() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.3;
    const header = document.querySelector('.unified-header');
    const poemsWrapper = document.querySelector('.poems-wrapper');
    
    if (header) {
      header.style.transform = `translate3d(0, ${rate}px, 0)`;
    }
    
    // Add subtle parallax to poems wrapper
    if (poemsWrapper) {
      const poemsRate = scrolled * -0.1;
      poemsWrapper.style.transform = `translate3d(0, ${poemsRate}px, 0)`;
    }
    
    ticking = false;
  }
  
  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  });

  // Enhanced hover effects for poem cards
  const poemCards = document.querySelectorAll('.poem-card');
  poemCards.forEach(card => {
    card.addEventListener('mouseenter', function(e) {
      this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      this.style.transform = 'translateY(-15px) scale(1.03)';
    });
    
    card.addEventListener('mouseleave', function(e) {
      this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      this.style.transform = 'translateY(0) scale(1)';
    });
    
    // Add click feedback
    card.addEventListener('click', function(e) {
      this.style.transform = 'translateY(-8px) scale(1.01)';
      setTimeout(() => {
        this.style.transform = 'translateY(-15px) scale(1.03)';
      }, 100);
      console.log('Poem card clicked:', this.href);
    });
  });

  // Enhanced typing effect for main title
  const title = document.querySelector('h1');
  if (title && title.textContent === 'Poetry Collection') {
    const text = title.textContent;
    title.textContent = '';
    title.style.borderRight = '3px solid rgba(255, 255, 255, 0.8)';
    title.style.animation = 'blink 1s infinite';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        title.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
      } else {
        setTimeout(() => {
          title.style.borderRight = 'none';
          title.style.animation = 'none';
        }, 1000);
      }
    };
    
    setTimeout(typeWriter, 800);
  }

  // Enhanced intersection observer for scroll animations
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('page-transition');
      }
    });
  }, observerOptions);

  // Observe poem cards for scroll animations
  document.querySelectorAll('.poem-card').forEach(card => {
    observer.observe(card);
  });
  
  // Add CSS for blinking cursor
  const style = document.createElement('style');
  style.textContent = `
    @keyframes blink {
      0%, 50% { border-color: rgba(255, 255, 255, 0.8); }
      51%, 100% { border-color: transparent; }
    }
  `;
  document.head.appendChild(style);
  
  // Preload images for smoother experience
  const imageUrls = [
    'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];
  
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
});