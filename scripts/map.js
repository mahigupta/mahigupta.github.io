// map.js
// Google Maps initialization logic
export function setupMap() {
  const GOOGLE_MAPS_API_KEY = 'AIzaSyDrZ3yYTzsJ4mMkkhIWKdzu8d43x8je92c';
  const familyMapHint = document.getElementById('FamilyMapHint');
  function setMapHint(message) {
    if (familyMapHint) familyMapHint.textContent = message;
  }
  function getFullName(person) {
    return [person.first_name, person.last_name].filter(Boolean).join(' ').trim() || 'Unknown Person';
  }
  function getLocationValue(person) {
    const location = person.location;
    if (!location || typeof location !== 'object') return null;
    const lat = Number(location.lat);
    const lng = Number(location.lng);
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
    return { lat, lng, label: location.label || '' };
  }
  function renderFamilyMap(data) {
    if (!window.google || !google.maps) {
      setMapHint('Google Maps SDK did not load. Check your API key and browser console.');
      return;
    }
    const membersWithLocation = data
      .map((entry) => {
        const person = entry?.data || {};
        const loc = getLocationValue(person);
        if (!loc) return null;
        return {
          id: entry.id,
          name: getFullName(person),
          nickname: person.nickname || '',
          birthday: person.birthday || '',
          occupation: person.occupation || '',
          location: loc
        };
      })
      .filter(Boolean);
    if (!membersWithLocation.length) {
      setMapHint('No valid locations found. Add data.location = { lat, lng, label } for each person in data.js.');
      return;
    }
    setMapHint(`Showing ${membersWithLocation.length} mapped family member(s).`);
    const initialCenter = {
      lat: membersWithLocation.reduce((sum, person) => sum + person.location.lat, 0) / membersWithLocation.length,
      lng: membersWithLocation.reduce((sum, person) => sum + person.location.lng, 0) / membersWithLocation.length
    };
    const map = new google.maps.Map(document.getElementById('FamilyMap'), {
      center: initialCenter,
      zoom: 5,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true
    });
    const bounds = new google.maps.LatLngBounds();
    const infoWindow = new google.maps.InfoWindow();
    // Group members that share the same lat/lng into one marker
    const locationGroups = new Map();
    membersWithLocation.forEach((person) => {
      const key = `${person.location.lat},${person.location.lng}`;
      if (!locationGroups.has(key)) {
        locationGroups.set(key, { location: person.location, members: [] });
      }
      locationGroups.get(key).members.push(person);
    });
    locationGroups.forEach(({ location, members }) => {
      const markerTitle = members.map((p) => p.name).join(', ');
      const marker = new google.maps.Marker({
        map,
        position: { lat: location.lat, lng: location.lng },
        title: markerTitle,
        label: { text: String(members.length), color: '#ffffff', fontWeight: 'bold', fontSize: '12px' }
      });
      bounds.extend(marker.getPosition());
      function openInfoWindow() {
        const memberRows = members.map((person) => {
          // Find the full person data from familyData for avatar
          const personData = (window.familyData || []).find(e => e.id === person.id)?.data || {};
          const fullName = person.name;
          let avatarHtml = '';
          if (personData.avatar) {
            avatarHtml = `<img src="${personData.avatar}" alt="${fullName} avatar" style="width:32px;height:32px;border-radius:50%;object-fit:cover;border:1.5px solid #cbd5e1;background:#e2e8f0;margin-right:8px;vertical-align:middle;">`;
          } else {
            // Fallback to initials
            const initials = person.name.split(' ').filter(Boolean).slice(0,2).map(p=>p[0]?.toUpperCase()||'').join('') || '?';
            avatarHtml = `<span style="display:inline-flex;width:32px;height:32px;border-radius:50%;background:#334155;color:#fff;align-items:center;justify-content:center;font-size:15px;font-weight:700;margin-right:8px;vertical-align:middle;border:1.5px solid #cbd5e1;">${initials}</span>`;
          }
          return `<div style="display:flex;align-items:center;padding:5px 0;border-bottom:1px solid #e2e8f0;gap:4px;">
            ${avatarHtml}
            <span>${fullName}</span>
          </div>`;
        });
        const locationLabel = members[0].location.label
          ? `<div style="margin-bottom:6px;font-size:12px;color:#64748b">${members[0].location.label}</div>`
          : '';
        infoWindow.setContent(
          `<div style="min-width:220px;line-height:1.5;font-size:14px">
            ${locationLabel}
            ${memberRows.join('')}
          </div>`
        );
        infoWindow.open({ map, anchor: marker });
      }
      marker.addListener('click', openInfoWindow);
    });
    if (membersWithLocation.length === 1) {
      map.setCenter(initialCenter);
      map.setZoom(10);
      return;
    }
    map.fitBounds(bounds);
  }
  function loadGoogleMapsSdk() {
    return new Promise((resolve, reject) => {
      if (window.google && google.maps) {
        resolve();
        return;
      }
      if (!GOOGLE_MAPS_API_KEY || GOOGLE_MAPS_API_KEY === 'YOUR_GOOGLE_MAPS_API_KEY') {
        reject(new Error('Missing Google Maps API key'));
        return;
      }
      const existingScript = document.getElementById('googleMapsSdk');
      if (existingScript) {
        existingScript.addEventListener('load', () => resolve(), { once: true });
        existingScript.addEventListener('error', () => reject(new Error('Failed to load Google Maps SDK')), { once: true });
        return;
      }
      const script = document.createElement('script');
      script.id = 'googleMapsSdk';
      script.async = true;
      script.defer = true;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(GOOGLE_MAPS_API_KEY)}`;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Google Maps SDK'));
      document.head.appendChild(script);
    });
  }
  async function initializeFamilyMap(data) {
    try {
      await loadGoogleMapsSdk();
      renderFamilyMap(data);
    } catch (error) {
      setMapHint('Map is disabled. Add a valid Google Maps API key in index.html to enable it.');
      console.warn(error);
    }
  }
  if (window.familyData) {
    initializeFamilyMap(window.familyData);
  }
}
