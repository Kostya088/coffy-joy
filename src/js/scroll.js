(function() {
    let currentScroll = window.pageYOffset;
    let targetScroll = window.pageYOffset;
    let isAnimating = false;

    function smoothScroll() {
      isAnimating = true;
      // Ease toward the target
      currentScroll += (targetScroll - currentScroll) * 0.1;

      window.scrollTo(0, currentScroll);

      if (Math.abs(targetScroll - currentScroll) > 0.5) {
        requestAnimationFrame(smoothScroll);
      } else {
        isAnimating = false;
      }
    }

    window.addEventListener("wheel", function(e) {
      e.preventDefault();
      targetScroll += e.deltaY;

      // Clamp so we don’t scroll past document
      targetScroll = Math.max(0, Math.min(
        targetScroll,
        document.body.scrollHeight - window.innerHeight
      ));

      if (!isAnimating) {
        requestAnimationFrame(smoothScroll);
      }
    }, { passive: false });
  })();