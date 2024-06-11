import Caption from "@/components/UI/Caption/Caption.component";
import s from "./Privacy.page.module.scss";

function Privacy() {
  return (
    <section className={s.container}>
      <Caption type="sub" value="Polityka Prywatności" />
      <section className={s.container__content}>
        <Caption type="sub" value="1. Informacje Ogólne" /> <br />
        <ol className={s.container__content__ol}>
          <li>
            Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem
            url: <b>oliwiermarkiewicz.netlify.app</b>
          </li>
          <li>
            Operatorem serwisu oraz Administratorem danych osobowych jest:
            Oliwier Markiewicz{" "}
          </li>

          <li>
            Adres kontaktowy poczty elektronicznej operatora:
            oliwier.markiewicz.dev@gmail.com
          </li>

          <li>
            Operator jest Administratorem Twoich danych osobowych w odniesieniu
            do danych podanych dobrowolnie w Serwisie.
          </li>
          <li>Serwis wykorzystuje dane osobowe w następujących celach:</li>
          <ul>
            <li>Prowadzenie newslettera</li>
            <li>Prowadzenie forum internetowego</li>
            <li>Prezentacja oferty lub informacji</li>
          </ul>
          <li>
            Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i
            ich zachowaniu w następujący sposób:
            <ol className={s.container__content__ol}>
              <li>
                Poprzez dobrowolnie wprowadzone w formularzach dane, które
                zostają wprowadzone do systemów Operatora.
              </li>
              <li>
                Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw.
                „ciasteczka”).
              </li>
            </ol>
          </li>
        </ol>
        <br />
        <Caption
          type="sub"
          value="2. Wybrane metody ochrony danych stosowane przez Operatora"
        />
        <br />
        <ol className={s.container__content__ol}>
          <li>
            Miejsca logowania i wprowadzania danych osobowych są chronione w
            warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i
            dane logowania, wprowadzone na stronie, zostają zaszyfrowane w
            komputerze użytkownika i mogą być odczytane jedynie na docelowym
            serwerze.
          </li>
          <li>
            W celu ochrony danych Operator regularnie wykonuje kopie
            bezpieczeństwa.
          </li>
          <li>
            Istotnym elementem ochrony danych jest regularna aktualizacja
            wszelkiego oprogramowania, wykorzystywanego przez Operatora do
            przetwarzania danych osobowych, co w szczególności oznacza regularne
            aktualizacje komponentów programistycznych.
          </li>
        </ol>
        <br />
        <Caption type="sub" value="3. Hosting" />
        <br />
        <ol className={s.container__content__ol}>
          <li>
            Serwis jest hostowany (technicznie utrzymywany) na serwerach
            operatora: Netlify
          </li>

          <li>
            Firma hostingowa w celu zapewnienia niezawodności technicznej
            prowadzi logi na poziomie serwera. Zapisowi mogą podlegać:
            <ul>
              <li>
                zasoby określone identyfikatorem URL (adresy żądanych zasobów –
                stron, plików),
              </li>
              <li>czas nadejścia zapytania,</li>
              <li>czas wysłania odpowiedzi,</li>
              <li>
                nazwę stacji klienta – identyfikacja realizowana przez protokół
                HTTP,
              </li>
              <li>
                informacje o błędach jakie nastąpiły przy realizacji transakcji
                HTTP,
              </li>
              <li>
                adres URL strony poprzednio odwiedzanej przez użytkownika
                (referer link) – w przypadku gdy przejście do Serwisu nastąpiło
                przez odnośnik,
              </li>
              <li>informacje o przeglądarce użytkownika,</li>
              <li>informacje o adresie IP,</li>
              <li>
                informacje diagnostyczne związane z procesem samodzielnego
                zamawiania usług poprzez rejestratory na stronie,
              </li>
              <li>
                informacje związane z obsługą poczty elektronicznej kierowanej
                do Operatora oraz wysyłanej przez Operatora.
              </li>
            </ul>
          </li>
        </ol>
        <br />
        <Caption
          type="sub"
          value=" 4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania
            danych"
        />
        <br />
        <ol className={s.container__content__ol}>
          <li>
            W niektórych sytuacjach Administrator ma prawo przekazywać Twoje
            dane osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania
            zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na
            Administratorze. Dotyczy to takich grup odbiorców:
            <ul>
              <li>
                osoby upoważnione przez nas, pracownicy i współpracownicy,
                którzy muszą mieć dostęp do danych osobowych w celu wykonywania
                swoich obowiązków,
              </li>
              <li>firma hostingowa,</li>
              <li>firmy obsługująca mailingi,</li>
              <li>firmy obsługująca komunikaty SMS,</li>
              <li>
                firmy, z którymi Administrator współpracuje w zakresie
                marketingu własnego,
              </li>
              <li>kurierzy,</li>
              <li>ubezpieczyciele,</li>
              <li>kancelarie prawne i windykatorzy,</li>
              <li>banki,</li>
              <li>operatorzy płatności,</li>
              <li>organy publiczne.</li>
            </ul>
          </li>
          <li>
            Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż
            jest to konieczne do wykonania związanych z nimi czynności
            określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W
            odniesieniu do danych marketingowych dane nie będą przetwarzane
            dłużej niż przez 3 lata.
          </li>
          <li>
            Przysługuje Ci prawo żądania od Administratora:
            <ul>
              <li>dostępu do danych osobowych Ciebie dotyczących,</li>
              <li>ich sprostowania,</li>
              <li>usunięcia,</li>
              <li>ograniczenia przetwarzania,</li>
              <li>oraz przenoszenia danych.</li>
            </ul>
          </li>
          <li>
            Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania
            wskazanego w pkt 3.2 wobec przetwarzania danych osobowych w celu
            wykonania prawnie uzasadnionych interesów realizowanych przez
            Administratora, w tym profilowania, przy czym prawo sprzeciwu nie
            będzie mogło być wykonane w przypadku istnienia ważnych prawnie
            uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie
            interesów, praw i wolności, w szczególności ustalenia, dochodzenia
            lub obrony roszczeń.
          </li>
          <li>
            Na działania Administratora przysługuje skarga do Prezesa Urzędu
            Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.
          </li>
          <li>
            Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi
            Serwisu.
          </li>
          <li>
            W stosunku do Ciebie mogą być podejmowane czynności polegające na
            zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu
            świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia
            przez Administratora marketingu bezpośredniego.
          </li>
          <li>
            Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu
            przepisów o ochronie danych osobowych. Oznacza to, że nie przesyłamy
            ich poza teren Unii Europejskiej.
          </li>
        </ol>
        <br />
        <Caption type="sub" value=" 5. Informacje w formularzach" />
        <br />
        <ol className={s.container__content__ol}>
          <li>
            Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym
            dane osobowe, o ile zostaną one podane.
          </li>
          <li>
            Serwis może zapisać informacje o parametrach połączenia (oznaczenie
            czasu, adres IP).
          </li>
          <li>
            Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą
            powiązanie danych w formularzu z adresem e-mail użytkownika
            wypełniającego formularz. W takim wypadku adres e-mail użytkownika
            pojawia się wewnątrz adresu url strony zawierającej formularz.
          </li>
          <li>
            Dane podane w formularzu są przetwarzane w celu wynikającym z
            funkcji konkretnego formularza, np. w celu dokonania procesu obsługi
            zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług
            itp. Każdorazowo kontekst i opis formularza w czytelny sposób
            informuje, do czego on służy.
          </li>
        </ol>
        <br />
        <Caption type="sub" value="6. Logi Administratora" />
        <br />
        <ol className={s.container__content__ol}>
          <li>
            Informacje zachowaniu użytkowników w serwisie mogą podlegać
            logowaniu. Dane te są wykorzystywane w celu administrowania
            serwisem.
          </li>
        </ol>
        <br />
        <Caption type="sub" value="7. Istotne techniki marketingowe" />
        <br />
        <ol className={s.container__content__ol}>
          <li>
            Operator stosuje analizę statystyczną ruchu na stronie, poprzez
            Google Analytics (Google Inc. z siedzibą w USA). Operator nie
            przekazuje do operatora tej usługi danych osobowych, a jedynie
            zanonimizowane informacje. Usługa bazuje na wykorzystaniu ciasteczek
            w urządzeniu końcowym użytkownika. W zakresie informacji o
            preferencjach użytkownika gromadzonych przez sieć reklamową Google
            użytkownik może przeglądać i edytować informacje wynikające z plików
            cookies przy pomocy narzędzia:
            https://www.google.com/ads/preferences/
          </li>
          <li>
            Operator stosuje techniki remarketingowe, pozwalające na dopasowanie
            przekazów reklamowych do zachowania użytkownika na stronie, co może
            dawać złudzenie, że dane osobowe użytkownika są wykorzystywane do
            jego śledzenia, jednak w praktyce nie dochodzi do przekazania
            żadnych danych osobowych od Operatora do operatorom reklam.
            Technologicznym warunkiem takich działań jest włączona obsługa
            plików cookie.
          </li>
          <li>
            Operator stosuje korzysta z piksela Facebooka. Ta technologia
            powoduje, że serwis Facebook (Facebook Inc. z siedzibą w USA) wie,
            że dana osoba w nim zarejestrowana korzysta z Serwisu. Bazuje w tym
            wypadku na danych, wobec których sam jest administratorem, Operator
            nie przekazuje od siebie żadnych dodatkowych danych osobowych
            serwisowi Facebook. Usługa bazuje na wykorzystaniu ciasteczek w
            urządzeniu końcowym użytkownika.
          </li>
          <li>
            Operator stosuje rozwiązanie badające zachowanie użytkowników
            poprzez tworzenie map ciepła oraz nagrywanie zachowania na stronie.
            Te informacje są anonimizowane zanim zostaną przesłane do operatora
            usługi tak, że nie wie on jakiej osoby fizycznej one dotyczą. W
            szczególności nagrywaniu nie podlegają wpisywane hasła oraz inne
            dane osobowe.
          </li>
          <li>
            Operator stosuje rozwiązanie automatyzujące działanie Serwisu w
            odniesieniu do użytkowników, np. mogące przesłać maila do
            użytkownika po odwiedzeniu konkretnej podstrony, o ile wyraził on
            zgodę na otrzymywanie korespondencji handlowej od Operatora.
          </li>
          <li>
            Operator może stosować profilowanie w rozumieniu przepisów o
            ochronie danych osobowych
          </li>
        </ol>
        <br />
        <Caption type="sub" value="8. Informacja o plikach cookies" />
        <br />
        <ol className={s.container__content__ol}>
          <li>Serwis korzysta z plików cookies.</li>
          <li>
            Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w
            szczególności pliki tekstowe, które przechowywane są w urządzeniu
            końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze
            stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę
            strony internetowej, z której pochodzą, czas przechowywania ich na
            urządzeniu końcowym oraz unikalny numer.
          </li>
          <li>
            Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu
            pliki cookies oraz uzyskującym do nich dostęp jest operator Serwisu.
          </li>
          <li>
            Pliki cookies wykorzystywane są w następujących celach:
            <ol className={s.container__content__ol}>
              <li>
                utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki
                której użytkownik nie musi na każdej podstronie Serwisu ponownie
                wpisywać loginu i hasła;
              </li>
              <li>
                realizacji celów określonych powyżej w części "Istotne techniki
                marketingowe";
              </li>
            </ol>
          </li>
          <li>
            W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies:
            „sesyjne” (session cookies) oraz „stałe” (persistent cookies).
            Cookies „sesyjne” są plikami tymczasowymi, które przechowywane są w
            urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia
            strony internetowej lub wyłączenia oprogramowania (przeglądarki
            internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu
            końcowym Użytkownika przez czas określony w parametrach plików
            cookies lub do czasu ich usunięcia przez Użytkownika.
          </li>
          <li>
            Oprogramowanie do przeglądania stron internetowych (przeglądarka
            internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików
            cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą
            dokonać zmiany ustawień w tym zakresie.&nbsp;Przeglądarka
            internetowa umożliwia usunięcie plików cookies. Możliwe jest także
            automatyczne blokowanie plików cookies Szczegółowe informacje na ten
            temat zawiera pomoc lub dokumentacja przeglądarki internetowej.
          </li>
          <li>
            Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre
            funkcjonalności dostępne na stronach internetowych Serwisu.
          </li>
          <li>
            Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu
            wykorzystywane mogą być również przez współpracujące z operatorem
            Serwisu podmioty, w szczególności dotyczy to firm: Google (Google
            Inc. z siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA),
            Twitter (Twitter Inc. z siedzibą w USA).
          </li>
        </ol>
        <br />
        <Caption
          type="sub"
          value=" 9. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?"
        />
        <br />
        <ol className={s.container__content__ol}>
          <li>
            Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić
            ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików
            cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa,
            utrzymania preferencji użytkownika może utrudnić,&nbsp;a w skrajnych
            przypadkach może uniemożliwić korzystanie ze stron www
          </li>
          <li>
            W celu zarządzania ustawienia cookies wybierz z listy poniżej
            przeglądarkę internetową, której używasz i postępuj zgodnie z
            instrukcjami:
            <ul>
              <li>
                <a href="https://support.microsoft.com/pl-pl/help/10607/microsoft-edge-view-delete-browser-history">
                  Edge
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/pl-pl/help/278835/how-to-delete-cookie-files-in-internet-explorer">
                  Internet Explorer
                </a>
              </li>
              <li>
                <a href="http://support.google.com/chrome/bin/answer.py?hl=pl&amp;answer=95647">
                  Chrome
                </a>
              </li>
              <li>
                <a href="http://support.apple.com/kb/PH5042">Safari</a>
              </li>
              <li>
                <a href="http://support.mozilla.org/pl/kb/W%C5%82%C4%85czanie%20i%20wy%C5%82%C4%85czanie%20obs%C5%82ugi%20ciasteczek">
                  Firefox
                </a>
              </li>
              <li>
                <a href="http://help.opera.com/Windows/12.10/pl/cookies.html">
                  Opera
                </a>
              </li>
            </ul>
            <p>Urządzenia mobilne:</p>
            <ul>
              <li>
                <a href="http://support.google.com/chrome/bin/answer.py?hl=pl&amp;answer=95647">
                  Android
                </a>
              </li>
              <li>
                <a href="http://support.apple.com/kb/HT1677?viewlocale=pl_PL">
                  Safari (iOS)
                </a>
              </li>
              <li>
                <a href="http://www.windowsphone.com/pl-pl/how-to/wp7/web/changing-privacy-and-other-browser-settings">
                  Windows Phone
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
