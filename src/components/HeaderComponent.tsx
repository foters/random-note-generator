import { useTranslation } from 'react-i18next';
import './HeaderComponent.css';
import React from 'react';

const HeaderComponent = () => {
    const { t } = useTranslation();
  return (
    <header>
      <p>{t('headerMessage')}</p>
    </header>
  )
}
export default HeaderComponent;