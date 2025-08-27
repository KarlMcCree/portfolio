document.addEventListener('DOMContentLoaded', function () {
    const introOverlay = document.querySelector('.intro-overlay');
    const mainContent  = document.querySelector('.main');
  
    // Detect real reload and clear introShown
    const navEntry = performance.getEntriesByType('navigation')[0];
    const isReload = navEntry ? navEntry.type === 'reload'
                              : (performance.navigation && performance.navigation.type === 1);
  
    if (isReload) {
      sessionStorage.removeItem('introShown');
    }
  
    function runIntroAnimation() {
      if (!introOverlay || !mainContent) return;
  
      introOverlay.style.display = 'flex';
      introOverlay.classList.remove('hidden');
      mainContent.classList.remove('visible');
  
      setTimeout(() => {
        introOverlay.classList.add('hidden');
  
        setTimeout(() => {
          mainContent.classList.add('visible');
  
          setTimeout(() => {
            introOverlay.style.display = 'none';
          }, 1000);
        }, 1500);
      }, 4000);
    }
  
    if (!sessionStorage.getItem('introShown')) {
      // Play intro only once
      window.addEventListener('load', () => {
        runIntroAnimation();
        sessionStorage.setItem('introShown', 'true');
      });
    } else {
      // Instantly hide overlay BEFORE repaint
      if (introOverlay) {
        introOverlay.style.display = 'none';
        introOverlay.classList.add('hidden');
      }
      if (mainContent) {
        mainContent.classList.add('visible');
      }
    }
  });
  