export const handleSroll = () => {
  setTimeout(() => {
    window.scrollBy({
      top: 400,
      behavior: 'smooth',
    });
  }, 200);
};

export const pad = n => {
  if (n < 10) return '0' + n;
  return n;
};
