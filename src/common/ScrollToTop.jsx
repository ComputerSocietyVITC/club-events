import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => window.addEventListener('scroll', () => setVisible(window.scrollY > 300)), []);
  return (
    <>
      {visible && (
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-lightergreen rounded-full fixed bottom-5 right-5 sm:hidden z-50 cursor-pointer"
        >
          <img
            width="64"
            height="64"
            src="https://unpkg.com/ionicons@5.5.2/dist/svg/arrow-up-outline.svg"
          />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
