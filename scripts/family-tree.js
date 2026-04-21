// family-tree.js
// Family tree (f3) initialization logic
export function setupFamilyTree() {
  if (!window.familyData || typeof f3 === 'undefined') return;
  function setDeceasedBadge(card, person) {
    const cardEl = card.querySelector('.card');
    if (!cardEl) return;
    const existingBadge = cardEl.querySelector('.deceased-badge');
    const isDeceased = person.deceased === true;
    if (!isDeceased) {
      if (existingBadge) existingBadge.remove();
      return;
    }
    if (existingBadge) return;
    const badge = document.createElement('span');
    badge.className = 'deceased-badge';
    badge.textContent = '🪔';
    badge.setAttribute('aria-label', 'Deceased');
    badge.title = 'Deceased';
    cardEl.appendChild(badge);
  }

  function showPersonModal(personNode) {
    const person = personNode?.data?.data || {};
    const fullName = [person.first_name, person.last_name].filter(Boolean).join(' ').trim() || 'Unknown Person';
    const displayNickname = person.nickname && String(person.nickname).trim()
      ? person.nickname
      : person.first_name;
    const hasBirthday = Boolean(person.birthday && String(person.birthday).trim());
    const hasOccupation = Boolean(person.occupation && String(person.occupation).trim());
    const hasEducation = Boolean(person.education && String(person.education).trim());
    const hasCollege = Boolean(person.college && String(person.college).trim());
    const personModalTitle = document.getElementById('personModalTitle');
    const personModalBody = document.getElementById('personModalBody');
    const personModal = document.getElementById('personModal');
    function escapeHtml(value) {
      return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
    }
    function renderDetailRow(label, value) {
      return `
        <div class="person-detail-row">
          <div class="person-detail-label">${label}</div>
          <div>${value || 'N/A'}</div>
        </div>
      `;
    }
    function renderPersonAvatar(person, fullName) {
      const safeFullName = escapeHtml(fullName);
      const deceasedNameIcon = person.deceased === true
        ? '<span class="deceased-name-icon" aria-label="Deceased" title="Deceased">🪔</span>'
        : '';
      if (person.avatar) {
        return `
          <div class="person-avatar-wrap">
            <img class="person-avatar" src="${person.avatar}" alt="${safeFullName} avatar">
            <div class="person-full-name">${deceasedNameIcon}${safeFullName}</div>
          </div>
        `;
      }
      const initials = fullName
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase() || '')
        .join('') || '?';
      return `
        <div class="person-avatar-wrap">
          <div class="person-avatar-fallback" aria-label="No avatar">${initials}</div>
          <div class="person-full-name">${deceasedNameIcon}${safeFullName}</div>
        </div>
      `;
    }
    function renderBioSection(bio) {
      if (!bio || !String(bio).trim()) {
        return '';
      }
      return `
        <section class="person-bio-block">
          <h3 class="person-bio-label">📝 About Me</h3>
          <p class="person-bio-text">${escapeHtml(bio)}</p>
        </section>
      `;
    }
    personModalTitle.textContent = fullName;
    personModalBody.innerHTML = `
      ${renderPersonAvatar(person, fullName)}
      ${renderDetailRow('🏷️ Nickname', displayNickname)}
      ${hasBirthday ? renderDetailRow('🎂 Birthday', person.birthday) : ''}
      ${hasOccupation ? renderDetailRow('💼 Occupation', person.occupation) : ''}
      ${hasEducation ? renderDetailRow('🎓 Education', person.education) : ''}
      ${hasCollege ? renderDetailRow('🏫 College', person.college) : ''}
      ${renderBioSection(person.bio)}
    `;
    personModal.classList.add('open');
    personModal.setAttribute('aria-hidden', 'false');
  }

  // Modal close logic
  const personModal = document.getElementById('personModal');
  const personModalClose = document.getElementById('personModalClose');
  personModalClose?.addEventListener('click', () => {
    personModal.classList.remove('open');
    personModal.setAttribute('aria-hidden', 'true');
  });
  personModal?.addEventListener('click', (event) => {
    if (event.target === personModal) {
      personModal.classList.remove('open');
      personModal.setAttribute('aria-hidden', 'true');
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      personModal.classList.remove('open');
      personModal.setAttribute('aria-hidden', 'true');
    }
  });

  // Family tree chart
  const f3Chart = f3.createChart('#FamilyChart', window.familyData)
    .setTransitionTime(1000)
    .setCardXSpacing(250)
    .setCardYSpacing(150);
  const card = f3Chart.setCardHtml();
  card
    .setCardDisplay([["first_name","last_name"],["birthday"]])
    .setOnCardUpdate(function (d) {
      setDeceasedBadge(this, d?.data?.data || {});
    })
    .setOnCardClick((event, d) => {
      showPersonModal(d);
    });
  f3Chart.updateTree({initial: true});
  // Enable scroll over tree
  const chartEl = document.getElementById('FamilyChart');
  if (chartEl) {
    chartEl.addEventListener('wheel', (event) => {
      const isIntentionalZoom = event.ctrlKey || event.metaKey;
      if (isIntentionalZoom) return;
      event.stopImmediatePropagation();
    }, { capture: true, passive: false });
  }
}
