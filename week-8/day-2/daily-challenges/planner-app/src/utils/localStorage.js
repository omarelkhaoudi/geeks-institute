export function saveState(state) {
  try {
    localStorage.setItem('daily_planner_state_v1', JSON.stringify(state));
  } catch (e) {
    console.error('Error saving state:', e);
  }
}

export function loadState() {
  try {
    const serialized = localStorage.getItem('daily_planner_state_v1');
    if (!serialized) return undefined;
    return JSON.parse(serialized);
  } catch (e) {
    console.error('Error loading state:', e);
    return undefined;
  }
}
