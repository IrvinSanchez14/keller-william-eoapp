import { phoneMask, fourDigitsMask } from 'src/utils';

export const getFullNameFields = () => [
  {
    name: 'contactFirstName',
    type: 'text',
    placeholder: '',
    label: 'Contact First Name',
    customWidth: 0,
  },
  {
    name: 'contactLastName',
    type: 'text',
    placeholder: '',
    label: 'Contact Last Name',
    customWidth: 0,
  },
  {
    name: 'brokerName',
    type: 'text',
    placeholder: '',
    label: 'Broker/owner name',
    customWidth: 0,
  },
  {
    name: 'kwMarketCenterName',
    type: 'text',
    placeholder: '',
    label: 'KW Market Center name',
    customWidth: 0,
  },
  {
    name: 'kwMarketCenterNumber',
    type: 'string',
    placeholder: '',
    label: 'KW Market Center number',
    customWidth: 186,
  },
  {
    name: 'yearEstablished',
    type: 'number',
    placeholder: '',
    label: 'Year established',
    customWidth: 94,
    numberMask: true,
    setNumberMask: fourDigitsMask,
  },
];

export const getFullEmailFields = () => [
  {
    name: 'streetAddress',
    type: 'text',
    placeholder: '',
    label: 'Street Address',
    customWidth: 0,
  },
  {
    name: 'suite',
    type: 'number',
    placeholder: '',
    label: 'Suite/Unit #',
    customWidth: 95,
  },
  {
    name: 'phoneNumber',
    type: 'text',
    placeholder: '',
    label: 'Phone Number',
    customWidth: 0,
    mask: phoneMask,
  },
  {
    name: 'faxNumber',
    type: 'text',
    placeholder: '',
    label: 'Fax Number',
    customWidth: 0,
    mask: phoneMask,
  },
  {
    name: 'email',
    type: 'text',
    placeholder: '',
    label: 'Email Address',
    customWidth: 0,
  },
];
