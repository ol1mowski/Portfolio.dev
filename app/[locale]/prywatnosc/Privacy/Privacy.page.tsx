import s from './Privacy.page.module.scss';
import { useTranslations } from 'next-intl';

import Caption from '@/components/UI/Caption/Caption.component';

function Privacy() {
  const t = useTranslations('privacy');

  return (
    <section className={s.container}>
      <Caption type="sub" value={t('title')} />
      <section className={s.container__content}>
        <Caption type="sub" value={t('sections.generalInfo.title')} /> <br />
        <ol className={s.container__content__ol}>
          <li>{t('sections.generalInfo.content.serviceInfo')}</li>
          <li>{t('sections.generalInfo.content.operator')}</li>

          <li>{t('sections.generalInfo.content.contactEmail')}</li>

          <li>{t('sections.generalInfo.content.dataController')}</li>
          <li>{t('sections.generalInfo.content.dataPurposes')}</li>
          <ul>
            <li>{t('sections.generalInfo.content.purposes.newsletter')}</li>
            <li>{t('sections.generalInfo.content.purposes.forum')}</li>
            <li>{t('sections.generalInfo.content.purposes.presentation')}</li>
          </ul>
          <li>
            {t('sections.generalInfo.content.dataCollection')}
            <ol className={s.container__content__ol}>
              <li>{t('sections.generalInfo.content.collectionMethod')}</li>
            </ol>
          </li>
        </ol>
        <br />
        <Caption type="sub" value={t('sections.dataProtection.title')} />
        <br />
        <ol className={s.container__content__ol}>
          <li>{t('sections.dataProtection.content.ssl')}</li>
          <li>{t('sections.dataProtection.content.backups')}</li>
          <li>{t('sections.dataProtection.content.updates')}</li>
        </ol>
        <br />
        <Caption type="sub" value={t('sections.hosting.title')} />
        <br />
        <ol className={s.container__content__ol}>
          <li>{t('sections.hosting.content.hostingProvider')}</li>

          <li>
            {t('sections.hosting.content.logs')}
            <ul>
              <li>{t('sections.hosting.content.logTypes.url')},</li>
              <li>{t('sections.hosting.content.logTypes.time')},</li>
              <li>{t('sections.hosting.content.logTypes.responseTime')},</li>
              <li>{t('sections.hosting.content.logTypes.clientName')},</li>
              <li>{t('sections.hosting.content.logTypes.errors')},</li>
              <li>{t('sections.hosting.content.logTypes.referer')},</li>
              <li>{t('sections.hosting.content.logTypes.browser')},</li>
              <li>{t('sections.hosting.content.logTypes.ip')},</li>
              <li>{t('sections.hosting.content.logTypes.diagnostics')},</li>
              <li>{t('sections.hosting.content.logTypes.email')}.</li>
            </ul>
          </li>
        </ol>
        <br />
        <Caption type="sub" value={t('sections.rights.title')} />
        <br />
        <ol className={s.container__content__ol}>
          <li>
            {t('sections.rights.content.dataRecipients')}
            <ul>
              <li>{t('sections.rights.content.recipients.authorized')},</li>
              <li>{t('sections.rights.content.recipients.hosting')},</li>
              <li>{t('sections.rights.content.recipients.mailing')},</li>
              <li>{t('sections.rights.content.recipients.sms')},</li>
              <li>{t('sections.rights.content.recipients.marketing')},</li>
              <li>{t('sections.rights.content.recipients.couriers')},</li>
              <li>{t('sections.rights.content.recipients.insurers')},</li>
              <li>{t('sections.rights.content.recipients.legal')},</li>
              <li>{t('sections.rights.content.recipients.banks')},</li>
              <li>{t('sections.rights.content.recipients.payments')},</li>
              <li>{t('sections.rights.content.recipients.authorities')}.</li>
            </ul>
          </li>
          <li>{t('sections.rights.content.retention')}</li>
          <li>
            {t('sections.rights.content.userRights')}
            <ul>
              <li>{t('sections.rights.content.rights.access')},</li>
              <li>{t('sections.rights.content.rights.rectification')},</li>
              <li>{t('sections.rights.content.rights.erasure')},</li>
              <li>{t('sections.rights.content.rights.restriction')},</li>
              <li>{t('sections.rights.content.rights.portability')}.</li>
            </ul>
          </li>
          <li>{t('sections.rights.content.objection')}</li>
          <li>{t('sections.rights.content.complaint')}</li>
          <li>{t('sections.rights.content.voluntary')}</li>
          <li>{t('sections.rights.content.automation')}</li>
          <li>{t('sections.rights.content.thirdCountries')}</li>
        </ol>
        <br />
        <Caption type="sub" value={t('sections.forms.title')} />
        <br />
        <ol className={s.container__content__ol}>
          <li>{t('sections.forms.content.voluntaryData')}</li>
          <li>{t('sections.forms.content.connectionParams')}</li>
          <li>{t('sections.forms.content.emailLinking')}</li>
          <li>{t('sections.forms.content.processing')}</li>
        </ol>
        <br />
        <Caption type="sub" value={t('sections.adminLogs.title')} />
        <br />
        <ol className={s.container__content__ol}>
          <li>{t('sections.adminLogs.content.behaviorLogging')}</li>
        </ol>
        <br />
        <Caption type="sub" value={t('sections.marketing.title')} />
        <br />
        <ol className={s.container__content__ol}>
          <li>{t('sections.marketing.content.analytics')}</li>
          <li>{t('sections.marketing.content.remarketing')}</li>
          <li>{t('sections.marketing.content.facebookPixel')}</li>
          <li>{t('sections.marketing.content.heatmaps')}</li>
          <li>{t('sections.marketing.content.automation')}</li>
          <li>{t('sections.marketing.content.profiling')}</li>
        </ol>
        <br />
        <Caption type="sub" value={t('sections.cookies.title')} />
        <br />
        <ol className={s.container__content__ol}>
          <li>{t('sections.cookies.content.usage')}</li>
          <li>{t('sections.cookies.content.definition')}</li>
          <li>{t('sections.cookies.content.controller')}</li>
          <li>
            {t('sections.cookies.content.purposes')}
            <ol className={s.container__content__ol}>
              <li>{t('sections.cookies.content.sessionMaintenance')};</li>
            </ol>
          </li>
          <li>{t('sections.cookies.content.types')}</li>
          <li>{t('sections.cookies.content.browserSettings')}</li>
          <li>{t('sections.cookies.content.limitations')}</li>
          <li>{t('sections.cookies.content.thirdParty')}</li>
        </ol>
        <br />
        <Caption type="sub" value={t('sections.cookieManagement.title')} />
        <br />
        <ol className={s.container__content__ol}>
          <li>{t('sections.cookieManagement.content.disableCookies')}</li>
          <li>
            {t('sections.cookieManagement.content.browserInstructions')}
            <ul>
              <li>
                <a href="https://support.microsoft.com/pl-pl/help/10607/microsoft-edge-view-delete-browser-history">
                  {t('sections.cookieManagement.content.browsers.edge')}
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/pl-pl/help/278835/how-to-delete-cookie-files-in-internet-explorer">
                  {t('sections.cookieManagement.content.browsers.ie')}
                </a>
              </li>
              <li>
                <a href="http://support.google.com/chrome/bin/answer.py?hl=pl&amp;answer=95647">
                  {t('sections.cookieManagement.content.browsers.chrome')}
                </a>
              </li>
              <li>
                <a href="http://support.apple.com/kb/PH5042">
                  {t('sections.cookieManagement.content.browsers.safari')}
                </a>
              </li>
              <li>
                <a href="http://support.mozilla.org/pl/kb/W%C5%82%C4%85czanie%20i%20wy%C5%82%C4%85czanie%20obs%C5%82ugi%20ciasteczek">
                  {t('sections.cookieManagement.content.browsers.firefox')}
                </a>
              </li>
              <li>
                <a href="http://help.opera.com/Windows/12.10/pl/cookies.html">
                  {t('sections.cookieManagement.content.browsers.opera')}
                </a>
              </li>
            </ul>
            <p>{t('sections.cookieManagement.content.mobileDevices')}</p>
            <ul>
              <li>
                <a href="http://support.google.com/chrome/bin/answer.py?hl=pl&amp;answer=95647">
                  {t('sections.cookieManagement.content.mobileBrowsers.android')}
                </a>
              </li>
              <li>
                <a href="http://support.apple.com/kb/HT1677?viewlocale=pl_PL">
                  {t('sections.cookieManagement.content.mobileBrowsers.ios')}
                </a>
              </li>
              <li>
                <a href="http://www.windowsphone.com/pl-pl/how-to/wp7/web/changing-privacy-and-other-browser-settings">
                  {t('sections.cookieManagement.content.mobileBrowsers.windowsPhone')}
                </a>
              </li>
            </ul>
          </li>
        </ol>
      </section>
    </section>
  );
}

export default Privacy;
