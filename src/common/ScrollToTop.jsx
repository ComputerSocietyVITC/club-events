import { useEffect, useState } from 'react';

/*
Embed the scrollable content and this component within a
relative-positioned container like so

<div className="relative">
<Content/>
<ScrollToTop/>
</div>

*/

const ScrollToTop = ({ child }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => window.addEventListener('scroll', () => setVisible(window.scrollY > 300)), []);
  return (
    <div className="relative">
      {child}
      {visible && (
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-lightergreen rounded-full absolute bottom-5 right-5 lg:hidden z-50 cursor-pointer"
        >
          <img
            width="64"
            height="64"
            src="https://unpkg.com/ionicons@5.5.2/dist/svg/arrow-up-outline.svg"
          />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
