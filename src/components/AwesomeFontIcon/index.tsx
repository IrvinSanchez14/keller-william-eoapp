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
  faAngleLeft,
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
  faCheckCircle,
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
import { SizeProp, IconProp } from '@fortawesome/fontawesome-svg-core';

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
  faAngleLeft,
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
  faCheckCircle,
  faAngleLeft,
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
  faAngleLeft,
};

function getIcon(type: string, name: string): IconProp {
  switch (type) {
    case 'regular':
      return regularIcons[name];
    case 'light':
      return lightIcons[name];
    default:
      return solidIcons[name];
  }
}

export const AwesomeFontIcon = ({
  name,
  type,
  className,
  onClick,
  dataTestId,
  size,
}: AwesomeFontIconProps) => (
  <FontAwesomeIcon
    size={size}
    icon={getIcon(type, name)}
    className={className}
    onClick={onClick}
    data-test-id={dataTestId}
  />
);
