export const formatDateTime = (timestamp?: string): string => {
  const now = new Date();
  let date = now;

  if (timestamp) date = new Date(timestamp);

  return Intl.DateTimeFormat("default", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
};
