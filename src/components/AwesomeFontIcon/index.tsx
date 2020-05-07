import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes as FaTimesSolid,
  faCaretRight,
  faCaretLeft,
  faCaretDown,
  faPhone as faPhoneSolid,
  faArrowLeft as faArrowLeftSolid,
  faArrowRight as faArrowRightSolid,
  faPlusCircle as faPlusCircleSolid,
} from '@fortawesome/pro-solid-svg-icons';
import {
  faTimes,
  faPhone,
  faPlusCircle,
  faEnvelopeOpenText,
  faComment,
  faArrowLeft,
  faArrowRight as faArrowRightRegular,
  faFileAlt,
  faBars,
  faQuestionCircle,
} from '@fortawesome/pro-regular-svg-icons';
import {
  faTimes as FaTimesLight,
  faSearch,
  faPhone as faPhoneLight,
  faPlusCircle as faPlusCircleLight,
  faBorderAll,
  faEdit,
  faShare,
  faArrowRight,
} from '@fortawesome/pro-light-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

import { IconListType } from 'src/components/Icon';

interface AwesomeFontIconProps {
  name: string;
  type: 'solid' | 'regular' | 'light';
  className?: string;
  onClick?: () => void;
  dataTestId?: string;
  size?: SizeProp;
}

const solidIcons: IconListType = {
  faCaretRight,
  faCaretLeft,
  faCaretDown,
  faTimes: FaTimesSolid,
  faPhone: faPhoneSolid,
  faPlusCircle: faPlusCircleSolid,
  faArrowRight: faArrowRightSolid,
  faArrowLeft: faArrowLeftSolid,
};

const regularIcons: IconListType = {
  faPhone,
  faPlusCircle,
  faFileAlt,
  faTimes,
  faBars,
  faQuestionCircle,
  faEnvelopeOpenText,
  faComment,
  faArrowLeft,
  faArrowRight: faArrowRightRegular,
};

const lightIcons: IconListType = {
  faSearch,
  faBorderAll,
  faEdit,
  faShare,
  faArrowRight,
  faPhone: faPhoneLight,
  faTimes: FaTimesLight,
  faPlusCircle: faPlusCircleLight,
};

export const AwesomeFontIcon = ({
  name,
  type,
  className,
  onClick,
  dataTestId,
  size,
}: AwesomeFontIconProps) => {
  let icon;
  switch (type) {
    case 'regular':
      icon = regularIcons[name];
      break;
    case 'light':
      icon = lightIcons[name];
      break;
    default:
      icon = solidIcons[name];
      break;
  }

  return (
    <FontAwesomeIcon
      size={size}
      icon={icon}
      className={className}
      onClick={onClick}
      data-test-id={dataTestId}
    />
  );
};
