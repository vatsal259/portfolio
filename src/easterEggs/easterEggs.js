const STORAGE_KEY = 'vatsalverma-easter-eggs';

export const EASTER_EGGS = {
  bookmark: 'bookmark',
  bike: 'bike',
  caffeine: 'caffeine',
};

function readFound() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function markEggFound(id) {
  const found = readFound();
  if (found[id]) return;
  found[id] = Date.now();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(found));
  } catch {
    // Quota or private browsing egg still works for this session.
  }
  window.dispatchEvent(new CustomEvent('easter-egg-found', { detail: { id } }));
}

export function isEggFound(id) {
  return Boolean(readFound()[id]);
}

export function canAccessSecrets() {
  return (
    isEggFound(EASTER_EGGS.bookmark) && isEggFound(EASTER_EGGS.bike)
  );
}

/** Keys that unlock /secrets (bookmark + bike only). */
export function foundSecretsKeyCount() {
  let count = 0;
  if (isEggFound(EASTER_EGGS.bookmark)) count += 1;
  if (isEggFound(EASTER_EGGS.bike)) count += 1;
  return count;
}

export function foundEggCount() {
  return Object.keys(readFound()).length;
}
