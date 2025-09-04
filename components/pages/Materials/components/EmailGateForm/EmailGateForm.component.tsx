'use client';

import { memo } from 'react';
import s from './EmailGateForm.component.module.scss';
import { EmailGateForm as EmailGateFormComponent } from './components/EmailGateForm/EmailGateForm.component';

interface EmailGateFormProps {
  onEmailSubmit: (email: string) => void;
}

const EmailGateForm = memo(({ onEmailSubmit }: EmailGateFormProps) => {
  return (
    <div className={s.materialsGate}>
      <div className={s.floatingIcons}>
        <div className={`${s.floatingIcon} ${s.icon1}`}>📚</div>
        <div className={`${s.floatingIcon} ${s.icon2}`}>💡</div>
        <div className={`${s.floatingIcon} ${s.icon3}`}>🧠</div>
        <div className={`${s.floatingIcon} ${s.icon4}`}>⚙️</div>
        <div className={`${s.floatingIcon} ${s.icon5}`}>🔍</div>
        <div className={`${s.floatingIcon} ${s.icon6}`}>📘</div>
        <div className={`${s.floatingIcon} ${s.icon7}`}>🧪</div>
        <div className={`${s.floatingIcon} ${s.icon8}`}>🎯</div>
        <div className={`${s.floatingIcon} ${s.icon9}`}>📝</div>
        <div className={`${s.floatingIcon} ${s.icon10}`}>🚀</div>
        <div className={`${s.floatingIcon} ${s.icon11}`}>💻</div>
        <div className={`${s.floatingIcon} ${s.icon12}`}>🔧</div>
        <div className={`${s.floatingIcon} ${s.icon13}`}>📊</div>
        <div className={`${s.floatingIcon} ${s.icon14}`}>🎨</div>
        <div className={`${s.floatingIcon} ${s.icon15}`}>⭐</div>
        <div className={`${s.floatingIcon} ${s.icon16}`}>🔥</div>
        <div className={`${s.floatingIcon} ${s.icon17}`}>💎</div>
        <div className={`${s.floatingIcon} ${s.icon18}`}>🎪</div>
        <div className={`${s.floatingIcon} ${s.icon19}`}>🌟</div>
        <div className={`${s.floatingIcon} ${s.icon20}`}>⚡</div>
      </div>

      <div className={s.mainLayout}>
        <div className={s.leftContent}>
          <div className={s.contentHeader}>
            <h1 className={s.mainTitle}>
              Odblokuj <span className={s.highlight}>Centrum Materiałów</span>
            </h1>
            <p className={s.mainSubtitle}>
              Podaj swój adres email i uzyskaj natychmiastowy dostęp do wszystkich materiałów
              edukacyjnych, e-booków i zasobów dla programistów.
            </p>
          </div>

          <div className={s.knowledgeLibrary}>
            <div className={s.libraryIcon}>📚</div>
            <div className={s.libraryContent}>
              <h3 className={s.libraryTitle}>Biblioteka wiedzy</h3>
              <p className={s.libraryDescription}>
                Dostęp do 50+ e-booków, notatek i praktycznych przewodników
              </p>
            </div>
          </div>
        </div>

        <div className={s.rightForm}>
          <EmailGateFormComponent onEmailSubmit={onEmailSubmit} />
        </div>
      </div>
    </div>
  );
});

EmailGateForm.displayName = 'EmailGateForm';

export default EmailGateForm;
