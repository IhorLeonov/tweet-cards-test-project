export const handleSroll = () => {
  setTimeout(() => {
    window.scrollBy({
      top: 400,
      behavior: 'smooth',
    });
  }, 200);
};
