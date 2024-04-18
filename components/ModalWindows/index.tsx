import { useSelector } from 'react-redux';
import Auth from './Auth/Auth';

const Modals = () => {
    const { isOpen, modalType, modalProps } = useSelector((state: any) => state.modal);
    const ModalsMap = {
        auth: Auth
    };
    const CurrentModal = modalType ? ModalsMap[modalType] : null;
  
    return isOpen && CurrentModal ? <CurrentModal {...modalProps} /> : null;
  };

export default Modals;