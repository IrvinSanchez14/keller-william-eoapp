import { useEffect, useState } from 'react';
import { useAppContext } from 'src/store';
import { exampleContext } from 'src/store/actions/example';
import NavigationPdf from 'src/components/NavigationPdf';
import Layout from 'src/components/LayoutInformationPdf';

export default function ReviewPdfPage(): JSX.Element {
  const { dispatch } = useAppContext();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 690);
    setIsTablet(window.innerWidth < 880);
  };

  useEffect(() => {
    exampleContext(dispatch, 0);
    window.addEventListener('resize', handleResize);
    setIsMobile(window.innerWidth < 690);
    setIsTablet(window.innerWidth < 880);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <NavigationPdf isTablet={isTablet} isMobile={isMobile} />
      <Layout textHeader={`Application Number: ${257023}`} />
    </>
  );
}
