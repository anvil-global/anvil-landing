/* Anvil Global — minimal site behaviour. No third-party scripts. */
(function () {
  'use strict';

  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  function setMenu(open) {
    if (!toggle || !nav) return;
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('.nav-toggle-label').textContent = open ? 'Close' : 'Menu';
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
  }

  // Services sub-menu
  var subToggle = document.querySelector('.sub-toggle');
  var subList = document.getElementById('services-sub');
  function setSub(open) {
    if (!subToggle || !subList) return;
    subList.classList.toggle('open', open);
    subToggle.setAttribute('aria-expanded', String(open));
  }
  if (subToggle && subList) {
    subToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      setSub(subToggle.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('click', function (e) {
      if (!subList.contains(e.target) && e.target !== subToggle) setSub(false);
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (subToggle && subToggle.getAttribute('aria-expanded') === 'true') { setSub(false); subToggle.focus(); return; }
    if (toggle && toggle.getAttribute('aria-expanded') === 'true') { setMenu(false); toggle.focus(); }
  });
  if (nav) {
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setMenu(false); setSub(false); });
    });
  }

  // Contact form — posts to the existing Formspree endpoint (falls back to a normal POST without JS)
  var enquiry = document.getElementById('enquiry-form');
  if (enquiry) {
    enquiry.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.getElementById('enquiry-status');
      var btn = enquiry.querySelector('button[type="submit"]');
      var label = btn.textContent;
      var gotcha = enquiry.querySelector('input[name="_gotcha"]');
      if (gotcha && gotcha.value) { enquiry.reset(); return; }
      btn.disabled = true;
      btn.textContent = 'Sending…';
      fetch(enquiry.action, { method: 'POST', body: new FormData(enquiry), headers: { Accept: 'application/json' } })
        .then(function (r) {
          if (!r.ok) throw new Error('send failed');
          status.textContent = 'Thank you — your enquiry has been sent. We’ll be in touch shortly.';
          enquiry.reset();
        })
        .catch(function () {
          status.textContent = 'Something went wrong sending your enquiry. Please email us directly at info@anvil-global.com.';
        })
        .then(function () { btn.disabled = false; btn.textContent = label; });
    });
  }

  // Academy course enquiry — prepares an email to info@anvil-global.com (no server)
  var course = document.getElementById('course-form');
  if (course) {
    course.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = new FormData(course);
      var body = 'Name: ' + f.get('name') +
        '\nEmail: ' + f.get('email') +
        '\nCourse: ' + f.get('course') +
        '\nPreferred date: ' + f.get('date') +
        '\nNumber of learners: ' + f.get('delegates') +
        '\nPhone: ' + (f.get('phone') || 'Not provided') +
        '\n\n' + (f.get('message') || '');
      document.getElementById('course-status').textContent = 'Your email app should open with the enquiry details.';
      window.location.href = 'mailto:info@anvil-global.com?subject=' +
        encodeURIComponent('Course enquiry: ' + f.get('course')) + '&body=' + encodeURIComponent(body);
    });
  }

  // Homepage spinning globe (same renderer as the live site, no inline script)
  var globe = document.getElementById('globe');
  if (globe && typeof window.startAnvilGlobe === 'function') {
    Promise.resolve(window.startAnvilGlobe(globe)).then(function () {
      var fallback = document.querySelector('.home-globe-fallback');
      if (fallback) fallback.hidden = true;
    }).catch(function () {
      // Leave the static pack globe visible if the canvas fails to start.
    });
  }
})();
