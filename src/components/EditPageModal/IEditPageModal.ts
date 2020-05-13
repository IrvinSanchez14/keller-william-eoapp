export default interface IEditPageModal {
  isModalOpen: boolean;
  nameForm: string;
  closeModal: () => void;
  children?: any;
}
