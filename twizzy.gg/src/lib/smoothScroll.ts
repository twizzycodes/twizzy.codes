function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function clampY(y: number): number {
  const max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  return Math.max(0, Math.min(y, max));
}

function getPortfolioTop(): number {
  const el = document.getElementById("portfolio");
  return el ? el.getBoundingClientRect().top + window.scrollY : 0;
}

const state = {
  targetY: 0,
  currentY: 0,
  rafId: null as number | null,
  smoothRafId: null as number | null,
  smoothDirection: 0,
  locked: false,
  initialized: false,
};

function syncState() {
  state.currentY = window.scrollY;
  state.targetY = window.scrollY;
}

function lerpTick() {
  if (state.locked) {
    state.rafId = null;
    return;
  }

  const diff = state.targetY - state.currentY;

  if (Math.abs(diff) < 0.5) {
    state.currentY = state.targetY;
    window.scrollTo(0, state.currentY);
    state.rafId = null;
    return;
  }

  state.currentY += diff * 0.075;
  window.scrollTo(0, state.currentY);
  state.rafId = requestAnimationFrame(lerpTick);
}

function startLerp() {
  if (state.rafId === null) {
    state.rafId = requestAnimationFrame(lerpTick);
  }
}

function cancelLerp() {
  if (state.rafId !== null) {
    cancelAnimationFrame(state.rafId);
    state.rafId = null;
  }
}

function cancelSmoothScroll() {
  if (state.smoothRafId !== null) {
    cancelAnimationFrame(state.smoothRafId);
    state.smoothRafId = null;
  }

  state.locked = false;
  state.smoothDirection = 0;
  syncState();
}

export function smoothScrollTo(targetY: number, duration = 1600): Promise<void> {
  if (!state.initialized) syncState();
  cancelSmoothScroll();
  cancelLerp();

  return new Promise((resolve) => {
    state.locked = true;
    const startY = state.currentY;
    const distance = clampY(targetY) - startY;
    state.smoothDirection = Math.sign(distance);

    if (Math.abs(distance) < 2) {
      state.targetY = clampY(targetY);
      state.currentY = state.targetY;
      window.scrollTo(0, state.currentY);
      state.locked = false;
      state.smoothDirection = 0;
      resolve();
      return;
    }

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      state.currentY = startY + distance * eased;
      state.targetY = state.currentY;
      window.scrollTo(0, state.currentY);

      if (progress < 1) {
        state.smoothRafId = requestAnimationFrame(step);
      } else {
        state.targetY = clampY(targetY);
        state.currentY = state.targetY;
        window.scrollTo(0, state.currentY);
        state.smoothRafId = null;
        state.locked = false;
        state.smoothDirection = 0;
        resolve();
      }
    };

    state.smoothRafId = requestAnimationFrame(step);
  });
}

export function scrollToSection(id: string, duration = 1600, offset = 0): Promise<void> {
  const el = document.getElementById(id);
  if (!el) return Promise.resolve();
  const top = el.getBoundingClientRect().top + window.scrollY + offset;
  return smoothScrollTo(top, duration);
}

export function handleWheelScroll(deltaY: number): boolean {
  if (!state.initialized) syncState();
  if (state.locked) {
    if (deltaY * state.smoothDirection < -10) {
      cancelSmoothScroll();
    } else {
      return true;
    }
  }

  const portfolioTop = getPortfolioTop();
  const scrollY = state.currentY;
  const onProfile = scrollY < portfolioTop * 0.4;
  const nearPortfolioTop = scrollY >= portfolioTop - 80 && scrollY <= portfolioTop + 120;

  if (onProfile && deltaY > 25) {
    smoothScrollTo(portfolioTop, 1800);
    return true;
  }

  if (nearPortfolioTop && deltaY < -25) {
    smoothScrollTo(0, 1800);
    return true;
  }

  state.targetY = clampY(state.targetY + deltaY * 0.85);
  startLerp();
  return true;
}

export function initSmoothScroll() {
  if (state.initialized) return;
  syncState();
  state.initialized = true;
}

export function resetSmoothScroll() {
  cancelLerp();
  cancelSmoothScroll();
  state.locked = false;
  state.initialized = false;
}
