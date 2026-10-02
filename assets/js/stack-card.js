function mapClamp(v, inMin, inMax, outMin, outMax) {
  const t = Math.min(1, Math.max(0, (v - inMin) / (inMax - inMin)));
  return outMin + t * (outMax - outMin);
}

function createStack(container, images, options = {}) {
  const {
    randomRotation = false,
    sensitivity = 200,
    sendToBackOnClick = false,
    autoplay = false,
    autoplayDelay = 3000,
    pauseOnHover = false,
    mobileClickOnly = false,
    mobileBreakpoint = 768,
  } = options;

  container.classList.add("stack-container");

  // build the cards. stack[0] = bottom card, stack[last] = top card
  let stack = images.map((src, i) => {
    const wrapper = document.createElement("div");
    wrapper.className = "stack-card-rotate"; // handles drag (translate + 3D tilt)

    const card = document.createElement("div");
    card.className = "stack-card"; // handles the stacked look (rotateZ + scale)

    const img = document.createElement("img");
    img.className = "stack-card-image";
    img.src = src;
    img.loading = "lazy"; // add
    img.decoding = "async"; // add
    img.alt = `card-${i + 1}`;
    img.draggable = false;

    card.appendChild(img);
    wrapper.appendChild(card);
    container.appendChild(wrapper);

    return {
      wrapper,
      card,
      randomRotate: randomRotation ? Math.random() * 10 - 5 : 0,
    };
  });

  const isMobile = () => window.innerWidth < mobileBreakpoint;
  const dragDisabled = () => mobileClickOnly && isMobile();
  const clickEnabled = () => sendToBackOnClick || dragDisabled();

  function updateMode() {
    container.classList.toggle("drag-disabled", dragDisabled());
  }
  updateMode();
  window.addEventListener("resize", updateMode);

  // positions every card based on its place in the stack
  const baseTilt = 4; // degrees; negative = counter-clockwise, positive = clockwise

  function layout() {
    const n = stack.length;
    stack.forEach((item, index) => {
      item.wrapper.style.zIndex = index;
      const rotateZ = baseTilt + (n - index - 1) * 4 + item.randomRotate;
      const scale = 1 + index * 0.06 - n * 0.06;
      item.card.style.transform = `rotateZ(${rotateZ}deg) scale(${scale})`;
    });
  }

  function sendToBack(item) {
    stack.splice(stack.indexOf(item), 1);
    stack.unshift(item);
    layout();
  }

  // drag + click handling for each card
  stack.forEach((item) => {
    const { wrapper } = item;
    let startX = 0,
      startY = 0,
      dx = 0,
      dy = 0;
    let active = false;
    let moved = false;

    wrapper.addEventListener("pointerdown", (e) => {
      active = true;
      moved = false;
      dx = dy = 0;
      startX = e.clientX;
      startY = e.clientY;
      wrapper.setPointerCapture(e.pointerId);
    });

    wrapper.addEventListener("pointermove", (e) => {
      if (!active || dragDisabled()) return;

      dx = e.clientX - startX;
      dy = e.clientY - startY;
      if (Math.hypot(dx, dy) > 5) moved = true;

      // 0.6 = the "dragElastic" from the original
      const x = dx * 0.6;
      const y = dy * 0.6;
      const rotateX = mapClamp(y, -100, 100, 60, -60);
      const rotateY = mapClamp(x, -100, 100, -60, 60);

      wrapper.style.transition = "none"; // follow the pointer instantly
      wrapper.style.transform = `translate(${x}px, ${y}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    function release() {
      if (!active) return;
      active = false;

      // clear inline styles so the CSS spring transition snaps it back
      wrapper.style.transition = "";
      wrapper.style.transform = "";

      if (Math.abs(dx) > sensitivity || Math.abs(dy) > sensitivity) {
        sendToBack(item);
      } else if (!moved && clickEnabled()) {
        sendToBack(item); // a tap/click, not a drag
      }
    }

    wrapper.addEventListener("pointerup", release);
    wrapper.addEventListener("pointercancel", release);
  });

  // autoplay
  let paused = false;
  if (pauseOnHover) {
    container.addEventListener("mouseenter", () => (paused = true));
    container.addEventListener("mouseleave", () => (paused = false));
  }
  if (autoplay) {
    setInterval(() => {
      if (stack.length > 1 && !paused) sendToBack(stack[stack.length - 1]);
    }, autoplayDelay);
  }

  layout();
}

// usage
const images = [
  "assets/images/profile/1.jpg",
  "assets/images/profile/2.jpg",
  "assets/images/profile/3.jpg",
  "assets/images/profile/4.jpg",
  "assets/images/profile/5.jpg",
  "assets/images/profile/6.jpg",
  "assets/images/profile/7.jpg",
  "assets/images/profile/8.jpg",
];

createStack(document.getElementById("stack"), images, {
  sendToBackOnClick: true,
});
