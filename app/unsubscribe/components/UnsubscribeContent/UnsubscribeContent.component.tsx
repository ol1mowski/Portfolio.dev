'use client';

import s from '../../page.module.scss';
import { useUnsubscribe } from '../../hooks/useUnsubscribe.hook';
import { UNSUBSCRIBE_CONSTANTS } from '../../constants/unsubscribe.constants';
import UnsubscribeHeader from '../UnsubscribeHeader/UnsubscribeHeader.component';
import UnsubscribeForm from '../UnsubscribeForm/UnsubscribeForm.component';
import UnsubscribeMessage from '../UnsubscribeMessage/UnsubscribeMessage.component';
import UnsubscribeInfo from '../UnsubscribeInfo/UnsubscribeInfo.component';

export default function UnsubscribeContent() {
  const { token, isLoading, message, isSuccess, isValidToken, setToken, handleSubmit } =
    useUnsubscribe();

  if (!isValidToken) {
    return (
      <main className={s.container}>
        <div className={s.content}>
          <UnsubscribeHeader
            title={UNSUBSCRIBE_CONSTANTS.TITLES.main}
            subtitle={UNSUBSCRIBE_CONSTANTS.TITLES.withoutToken}
          />
          <UnsubscribeInfo
            title={UNSUBSCRIBE_CONSTANTS.HOW_TO_UNSUBSCRIBE.title}
            items={UNSUBSCRIBE_CONSTANTS.HOW_TO_UNSUBSCRIBE.items}
          />
        </div>
      </main>
    );
  }

  return (
    <main className={s.container}>
      <div className={s.content}>
        <UnsubscribeHeader
          title={UNSUBSCRIBE_CONSTANTS.TITLES.main}
          subtitle={UNSUBSCRIBE_CONSTANTS.TITLES.withToken}
        />

        <UnsubscribeForm
          token={token}
          onTokenChange={setToken}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />

        <UnsubscribeMessage message={message} isSuccess={isSuccess} />

        <UnsubscribeInfo
          title={UNSUBSCRIBE_CONSTANTS.WHAT_HAPPENS_AFTER.title}
          items={UNSUBSCRIBE_CONSTANTS.WHAT_HAPPENS_AFTER.items}
        />
      </div>
    </main>
  );
}
