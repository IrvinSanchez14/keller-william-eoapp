import { useEffect, useState } from 'react';
import { useAppContext } from 'src/store';
import { exampleContext } from 'src/store/actions/example';
import NavigationReview from 'src/components/NavigationReview';
import FooterReview from 'src/components/FooterReview';
import Layout from 'src/components/LayoutInformationReview';

export default function ReviewPage(): JSX.Element {
  const { dispatch } = useAppContext();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [width, setWidth] = useState(1024);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 690);
    setIsTablet(window.innerWidth < 880);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    exampleContext(dispatch, 0);
    window.addEventListener('resize', handleResize);
    setIsMobile(window.innerWidth < 690);
    setIsTablet(window.innerWidth < 880);
    setWidth(window.innerWidth);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <NavigationReview width={width} isTablet={isTablet} isMobile={isMobile} />
      <Layout textHeader="Please review your application before submitting" />
      <FooterReview />
    </>
  );
}
