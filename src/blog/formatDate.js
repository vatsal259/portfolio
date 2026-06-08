export function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function toSortableTime(dateStr) {
  const time = new Date(dateStr || 0).getTime();
  return Number.isNaN(time) ? 0 : time;
}

export function sortPostsByDate(posts) {
  return [...posts].sort((a, b) => {
    const aPinned = Boolean(a.pinned);
    const bPinned = Boolean(b.pinned);
    if (aPinned !== bPinned) return aPinned ? -1 : 1;
    return toSortableTime(b.date) - toSortableTime(a.date);
  });
}
