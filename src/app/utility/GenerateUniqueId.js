export function generateUniqueId(prefix = "id") {
  return `${prefix}-${Math.random().toString(36).slice(2, 11)}`;
}
