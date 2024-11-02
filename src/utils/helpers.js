export const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    }).format(date);
  };
  
  export const calculateEnergySavings = (previousUsage, currentUsage) => {
    if (previousUsage === 0) return null; // Avoid division by zero
    return ((previousUsage - currentUsage) / previousUsage) * 100;
  };