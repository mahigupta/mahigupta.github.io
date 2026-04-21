// Main JS entry point for the site
import { setupFamilyTree } from './family-tree.js';
import { setupMap } from './map.js';
import { setupAlbumModal } from './album.js';
import { setupAboutModal } from './modals.js';

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
  setupFamilyTree();
  setupMap();
  setupAlbumModal();
  setupAboutModal();
});
