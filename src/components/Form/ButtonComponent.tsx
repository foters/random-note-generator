import React from 'react';
import './ButtonComponent.css';
import { useTranslation } from 'react-i18next';

const ButtonComponent = (props: any) => {
  const { t } = useTranslation();
  return <button onClick={props.onClick} disabled={props.isButtonDisabled}>{t('getNote')}</button>
}

export default ButtonComponent;