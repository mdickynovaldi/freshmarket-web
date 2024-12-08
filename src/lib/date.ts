export function formatDate(dateString: string | null) {
  if (!dateString) {
    return "Unknown date & time";
  }

  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
