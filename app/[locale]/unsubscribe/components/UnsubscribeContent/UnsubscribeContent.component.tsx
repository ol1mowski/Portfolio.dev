'use client';

import s from '../../page.module.scss';
import { useUnsubscribe } from '../../hooks/useUnsubscribe.hook';
import { useTranslations } from 'next-intl';
import UnsubscribeHeader from '../UnsubscribeHeader/UnsubscribeHeader.component';
import UnsubscribeForm from '../UnsubscribeForm/UnsubscribeForm.component';
import UnsubscribeMessage from '../UnsubscribeMessage/UnsubscribeMessage.component';
import UnsubscribeInfo from '../UnsubscribeInfo/UnsubscribeInfo.component';

export default function UnsubscribeContent() {
  const t = useTranslations('unsubscribe');
  const { token, isLoading, message, isSuccess, isValidToken, setToken, handleSubmit } =
    useUnsubscribe();

  if (!isValidToken) {
    return (
      <main className={s.container}>
        <div className={s.content}>
          <UnsubscribeHeader title={t('titles.main')} subtitle={t('titles.withoutToken')} />
          <UnsubscribeInfo
            title={t('howToUnsubscribe.title')}
            items={[
              t('howToUnsubscribe.items.link'),
              t('howToUnsubscribe.items.reply'),
              t('howToUnsubscribe.items.contact'),
            ]}
          />
        </div>
      </main>
    );
  }

  return (
    <main className={s.container}>
      <div className={s.content}>
        <UnsubscribeHeader title={t('titles.main')} subtitle={t('titles.withToken')} />

        <UnsubscribeForm
          token={token}
          onTokenChange={setToken}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />

        <UnsubscribeMessage message={message} isSuccess={isSuccess} />

        <UnsubscribeInfo
          title={t('whatHappensAfter.title')}
          items={[
            t('whatHappensAfter.items.deleteEmail'),
            t('whatHappensAfter.items.stopMessages'),
            t('whatHappensAfter.items.stopNotifications'),
            t('whatHappensAfter.items.rejoin'),
          ]}
        />
      </div>
    </main>
  );
}
