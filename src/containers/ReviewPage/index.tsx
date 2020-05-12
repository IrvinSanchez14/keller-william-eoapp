import { useEffect, useState } from 'react';
import NavigationReview from 'src/components/NavigationReview';
import FooterReview from 'src/components/FooterReview';
import Layout from 'src/components/LayoutInformationReview';

const getWidth = (): number =>
  process.browser
    ? window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    : 1024;

export default function ReviewPage(): JSX.Element {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [width, setWidth] = useState(getWidth());

  const handleResize = () => {
    const w = getWidth();
    setIsMobile(w < 690);
    setIsTablet(w < 880);
    setWidth(w);
  };

  useEffect(() => {
    const w = getWidth();
    window.addEventListener('resize', handleResize);
    setIsMobile(w < 690);
    setIsTablet(w < 880);
    setWidth(w);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <NavigationReview
        sectionPage=":REVIEW"
        width={width}
        isTablet={isTablet}
        isMobile={isMobile}
      />
      <Layout textHeader="Please review your application before submitting" />
      <FooterReview />
    </>
  );
}
