// 个人网站交互脚本：霓虹粒子星空、打字机、导航、滚动动效、邮箱复制
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initTyping();
  initNav();
  initReveal();
  initCopyEmail();
});

/* ---------- 霓虹粒子星空（Canvas + 鼠标视差） ---------- */
function initParticles() {
  const canvas = document.getElementById('bg');
  const ctx = canvas.getContext('2d');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const colors = ['#b026ff', '#00f0ff', '#ff2d78', '#e6eaf2'];

  let w, h, particles = [];
  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const count = Math.min(120, Math.floor((w * h) / 12000)); // 按面积控制粒子数
    particles = Array.from({ length: count }, () => spawn());
  }
  function spawn() {
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      phase: Math.random() * Math.PI * 2, // 闪烁相位
    };
  }

  let mx = 0, my = 0;
  window.addEventListener('mousemove', (e) => {
    mx = (e.clientX / w - 0.5) * 2;
    my = (e.clientY / h - 0.5) * 2;
  });

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach((p) => {
      // 缓慢闪烁
      const twinkle = 0.5 + 0.5 * Math.sin(p.phase);
      p.phase += 0.02;
      // 移动 + 鼠标视差
      p.x += p.vx + mx * 0.15;
      p.y += p.vy + my * 0.15;
      // 边界回绕
      if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;

      ctx.globalAlpha = 0.25 + 0.55 * twinkle;
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 6;
      ctx.shadowColor = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
    if (!reduced) requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  if (reduced) draw(); else requestAnimationFrame(draw);
}

/* ---------- 打字机效果 ---------- */
function initTyping() {
  const el = document.getElementById('typing');
  const lines = [
    '用代码连接硬件与世界。',
    '把想法做成能跑的东西。',
    '在嵌入式与 AI 之间折腾。',
  ];
  let li = 0, ci = 0, deleting = false;
  function tick() {
    const line = lines[li];
    if (!deleting) {
      el.textContent = line.slice(0, ++ci);
      if (ci === line.length) { deleting = true; setTimeout(tick, 1400); return; }
    } else {
      el.textContent = line.slice(0, --ci);
      if (ci === 0) { deleting = false; li = (li + 1) % lines.length; }
    }
    setTimeout(tick, deleting ? 45 : 90);
  }
  tick();
}

/* ---------- 导航吸顶 + 汉堡菜单 + 高亮 ---------- */
function initNav() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

/* ---------- 进入视口淡入上移 ---------- */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.section, .project-card, .blog-item, .skill-cat, .about-grid > *')
    .forEach((el) => { el.classList.add('reveal'); io.observe(el); });
}

/* ---------- 邮箱复制 ---------- */
function initCopyEmail() {
  const btn = document.getElementById('copy-email');
  const email = document.getElementById('email').textContent.trim();
  const tip = document.getElementById('copy-tip');
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
      tip.textContent = '✓ 邮箱已复制到剪贴板';
    } catch (e) {
      tip.textContent = '复制失败，请手动输入：' + email;
    }
    setTimeout(() => { tip.textContent = ''; }, 2500);
  });
}
