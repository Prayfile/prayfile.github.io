(function () {
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initScrollVibe() {
    if (reducedMotion) return;

    var root = document.documentElement;
    var timer = null;

    window.addEventListener("scroll", function () {
      root.classList.add("is-active");
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        root.classList.remove("is-active");
        timer = null;
      }, 1400);
    }, { passive: true });
  }

  function initPrayBackdrop() {
    var threshold = document.getElementById("threshold");
    var header = document.querySelector(".site-top");
    var heroTitle = document.querySelector(".pray-voice");
    var backdrop = document.getElementById("pray-backdrop");
    if (!threshold || !heroTitle || !backdrop) return;

    var fadeDistance = 1;
    var pending = false;

    function smoothstep(value) {
      return value * value * (3 - 2 * value);
    }

    function measure() {
      fadeDistance = Math.max(threshold.offsetHeight * 0.72, window.innerHeight * 0.42);
    }

    function update() {
      var root = document.documentElement;
      var headerRect = header.getBoundingClientRect();
      var heroRect = heroTitle.getBoundingClientRect();
      var scrollY = window.scrollY || window.pageYOffset;
      var progress = Math.min(1, Math.max(0, scrollY / fadeDistance));
      var eased = smoothstep(progress);
      var stickyTop = headerRect.top + headerRect.height * 0.55;
      var heroAnchor = heroRect.top + heroRect.height * 0.18;
      var pinned = heroRect.bottom <= headerRect.bottom + 2;
      var top = pinned ? stickyTop : Math.max(stickyTop, heroAnchor);

      backdrop.classList.toggle("is-pinned", pinned);

      root.style.setProperty("--pray-backdrop-scale", (1 - eased * 0.84).toFixed(3));
      root.style.setProperty("--pray-backdrop-top", top.toFixed(1) + "px");
      root.style.setProperty("--pray-backdrop-left", (window.innerWidth * 0.5).toFixed(1) + "px");
      root.style.setProperty("--pray-backdrop-opacity", (0.11 + eased * 0.05).toFixed(3));
      root.style.setProperty("--pray-backdrop-blur", (6 + eased * 7).toFixed(1) + "px");
    }

    function scheduleUpdate() {
      if (pending) return;
      pending = true;
      requestAnimationFrame(function () {
        pending = false;
        update();
      });
    }

    measure();
    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", function () {
      measure();
      scheduleUpdate();
    }, { passive: true });
  }

  function initMorseDrift() {
    if (reducedMotion) return;
    var morseNodes = document.querySelectorAll(".morse-rhythm:not(.morse-rhythm--hero)");
    for (var i = 0; i < morseNodes.length; i++) {
      morseNodes[i].style.animationDelay = (i * 0.45) + "s";
      morseNodes[i].classList.add("morse-rhythm--drift");
    }
  }

  function initCopyRites() {
    var buttons = document.querySelectorAll(".copy-rite");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        var button = event.currentTarget;
        var targetId = button.getAttribute("data-copy-target");
        var node = targetId ? document.getElementById(targetId) : null;
        if (!node) return;

        var text = node.innerText || node.textContent || "";
        text = text.replace(/\n$/, "");

        function markCopied() {
          var previous = button.textContent;
          button.textContent = "copied";
          button.classList.add("is-copied");
          window.setTimeout(function () {
            button.textContent = previous;
            button.classList.remove("is-copied");
          }, 1600);
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(markCopied).catch(function () {
            fallbackCopy(text, markCopied);
          });
          return;
        }

        fallbackCopy(text, markCopied);
      });
    }
  }

  function initPromptVeil() {
    var toggle = document.getElementById("prompt-toggle");
    var veil = document.getElementById("prompt-veil");
    var panel = document.getElementById("prompt-panel");
    if (!toggle || !veil || !panel) return;

    function setOpen(open) {
      veil.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) {
        panel.removeAttribute("hidden");
        panel.removeAttribute("inert");
      } else {
        panel.setAttribute("hidden", "");
        panel.setAttribute("inert", "");
      }
    }

    setOpen(false);

    toggle.addEventListener("click", function () {
      setOpen(!veil.classList.contains("is-open"));
    });
  }

  function fallbackCopy(text, onSuccess) {
    var area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    try {
      if (document.execCommand("copy")) onSuccess();
    } finally {
      document.body.removeChild(area);
    }
  }

  initScrollVibe();
  initPrayBackdrop();
  initMorseDrift();
  initCopyRites();
  initPromptVeil();
})();
