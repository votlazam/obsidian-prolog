Presentazione del Plugin Prolog per Obsidian

Introduzione

Abbiamo sviluppato un plugin per Obsidian che permette di eseguire codice Prolog direttamente all'interno dell'editor di note. Questo plugin integra l'interprete Tau Prolog, consentendo agli utenti di scrivere, eseguire e visualizzare i risultati di codice Prolog senza la necessità di installare software aggiuntivo.

Struttura del Progetto

Il progetto è composto da due parti principali:

1.
Plugin per Obsidian: Un plugin che integra l'interprete Tau Prolog in Obsidian, permettendo l'esecuzione di codice Prolog direttamente nelle note.

2.
Sito Web: Un sito web che spiega come installare e utilizzare il plugin, con esempi e informazioni aggiuntive.

Plugin per Obsidian

Funzionalità Principali

•
Editor di Codice Prolog: Evidenziazione della sintassi, completamento automatico e indentazione per il codice Prolog.

•
Esecuzione del Codice: Esecuzione di query Prolog direttamente dall'editor e visualizzazione dei risultati.

•
Gestione della Base di Conoscenza: Caricamento di file Prolog esterni, salvataggio della base di conoscenza e visualizzazione della base attiva.

•
Integrazione con Obsidian: Incorporazione di blocchi di codice Prolog nelle note e visualizzazione dei risultati inline o in un pannello separato.

•
Funzionalità Aggiuntive: Supporto per moduli aggiuntivi di Tau Prolog, modalità debug e esportazione dei risultati.

Struttura del Codice

Il plugin è stato sviluppato utilizzando TypeScript e segue la struttura standard dei plugin di Obsidian. I file principali sono:

•
main.ts: Il file principale del plugin che contiene la logica di base.

•
manifest.json: Il file di configurazione del plugin.

•
styles.css: Il file di stile per l'interfaccia utente del plugin.

Tecnologie Utilizzate

•
TypeScript: Per lo sviluppo del plugin.

•
Tau Prolog: Un interprete Prolog in JavaScript per l'esecuzione del codice Prolog.

•
Obsidian API: Per l'integrazione con Obsidian.

Sito Web

Struttura del Sito

Il sito web è stato sviluppato utilizzando HTML, CSS e JavaScript. La struttura del sito è la seguente:

•
Home: Presentazione del plugin e delle sue funzionalità principali.

•
Funzionalità: Descrizione dettagliata delle funzionalità del plugin.

•
Installazione: Guida all'installazione del plugin.

•
Utilizzo: Guida all'utilizzo del plugin con esempi.

•
Chi Siamo: Informazioni sul team di sviluppo.

Tecnologie Utilizzate

•
HTML5: Per la struttura del sito.

•
CSS3: Per lo stile e il layout del sito.

•
JavaScript: Per le funzionalità interattive del sito.

•
Font Awesome: Per le icone.

•
Google Fonts: Per i font.

Installazione del Plugin

Installazione Manuale

Metodo 1: Utilizzo dello script di installazione (Windows)

1.
Scaricare l'ultima versione del plugin dal repository GitHub.

2.
Eseguire il file `install-plugin.bat` incluso nel download.

3.
Seguire le istruzioni a schermo, inserendo il percorso del vault Obsidian quando richiesto.

4.
Lo script copierà automaticamente tutti i file necessari, incluso il file `manifest.json`, nella posizione corretta.

5.
Abilitare il plugin nelle impostazioni di Obsidian (Impostazioni > Plugin comunitari).

Metodo 2: Installazione manuale

1.
Scaricare l'ultima versione del plugin dal repository GitHub.

2.
Creare una nuova cartella chiamata `obsidian-prolog` nella cartella dei plugin di Obsidian (solitamente si trova in `.obsidian/plugins/` all'interno del tuo vault).

3.
Copiare i seguenti file nella cartella appena creata:
   - `manifest.json`
   - `versions.json`
   - `styles.css`
   - `dist/main.js`

4.
Abilitare il plugin nelle impostazioni di Obsidian (Impostazioni > Plugin comunitari).

Nota sull'importanza del file manifest.json:
Il file `manifest.json` è essenziale per l'installazione del plugin in Obsidian. Questo file contiene i metadati del plugin (ID, nome, versione, ecc.) che Obsidian utilizza per riconoscere e caricare correttamente il plugin. Assicurati che questo file sia sempre presente nella cartella del plugin e che non venga modificato, altrimenti Obsidian potrebbe non riconoscere il plugin o potrebbero verificarsi errori durante il caricamento.

Verifica dell'installazione del file manifest.json:
Per verificare che il file `manifest.json` sia stato installato correttamente:
1. Dopo aver copiato i file e abilitato il plugin, vai in Impostazioni > Plugin comunitari
2. Cerca "Prolog for Obsidian" nell'elenco dei plugin installati
3. Se il plugin appare nell'elenco con il nome e la versione corretti (come specificati nel manifest.json), significa che il file è stato riconosciuto correttamente
4. Se il plugin non appare o mostra informazioni errate, controlla che il file manifest.json sia stato copiato correttamente nella cartella del plugin

Installazione tramite BRAT

1.
Installare il plugin BRAT da Obsidian.

2.
Aggiungere il repository beta manus-ai/obsidian-prolog.

3.
Abilitare il plugin nelle impostazioni di Obsidian.

Utilizzo del Plugin

Blocchi di Codice Prolog

Per creare un blocco di codice Prolog nelle note, utilizzare la sintassi dei blocchi di codice di Markdown:

Plain Text


% Definizione di fatti e regole
padre(giovanni, mario).
padre(mario, anna).
padre(mario, giuseppe).

% Definizione di una regola per nonno
nonno(X, Y) :- padre(X, Z), padre(Z, Y).

% Query di esempio
?- nonno(giovanni, anna).


Esecuzione di Query

Per eseguire una query Prolog:

1.
Selezionare la query nel testo (ad esempio, nonno(giovanni, anna).).

2.
Usare il comando "Esegui Query Prolog" dalla palette dei comandi (Ctrl+P).

3.
I risultati verranno visualizzati in base alle impostazioni (inline o in un pannello separato).

Verifica del Funzionamento del Plugin

Per verificare se il plugin Prolog è installato e funziona correttamente, segui questi passaggi:

1. Dopo l'installazione, verifica che il plugin sia abilitato nelle impostazioni di Obsidian (Impostazioni > Plugin comunitari).

2. Crea una nuova nota in Obsidian e inserisci un blocco di codice Prolog utilizzando la sintassi:
```prolog
% Un semplice programma di test
member(X, [X|_]).
member(X, [_|T]) :- member(X, T).

% Query di esempio
?- member(X, [a,b,c]).
```

3. Verifica che il blocco di codice venga evidenziato correttamente con la sintassi Prolog.

4. Clicca sul pulsante "Esegui" che appare sotto il blocco di codice. Se il plugin funziona correttamente, dovresti vedere i risultati della query:
```
X = a ;
X = b ;
X = c.
```

5. In alternativa, puoi aprire l'editor Prolog dedicato usando la palette dei comandi (Ctrl+P) e cercando "Apri Editor Prolog". Se si apre un pannello laterale con un editor Prolog, il plugin è funzionante.

Se riscontri problemi:
- Verifica che il plugin sia stato installato correttamente
- Controlla la console degli sviluppatori (Ctrl+Shift+I) per eventuali errori
- Riavvia Obsidian e prova nuovamente

Conclusioni

Il plugin Prolog per Obsidian è uno strumento potente che permette di integrare la programmazione logica nelle note di Obsidian. Grazie all'interprete Tau Prolog, gli utenti possono eseguire codice Prolog direttamente nelle note, senza la necessità di installare software aggiuntivo.

Il sito web fornisce tutte le informazioni necessarie per installare e utilizzare il plugin, con esempi e guide dettagliate.

Distribuzione del Plugin

Per creare un pacchetto di distribuzione del plugin:

1. Assicurarsi che il plugin sia stato compilato correttamente (eseguire `npm run build`).
2. Eseguire lo script `create-release.bat` incluso nel repository.
3. Lo script creerà un file ZIP contenente tutti i file necessari per l'installazione, incluso il file `manifest.json`.
4. Distribuire questo file ZIP agli utenti, che potranno installare il plugin seguendo le istruzioni di installazione.

Il pacchetto di distribuzione include:
- `manifest.json`: File essenziale per il riconoscimento del plugin da parte di Obsidian
- `versions.json`: Storico delle versioni
- `styles.css`: Stili del plugin
- `dist/main.js`: Codice compilato del plugin
- `install-plugin.bat`: Script di installazione per utenti Windows
- `README.md`: Documentazione e istruzioni di installazione

Sviluppi Futuri

•
Supporto per Librerie Prolog Esterne: Aggiungere la possibilità di caricare librerie Prolog esterne.

•
Miglioramento dell'Interfaccia Utente: Rendere l'interfaccia utente più intuitiva e personalizzabile.

•
Integrazione con Altri Plugin: Integrare il plugin con altri plugin di Obsidian per creare un ecosistema più completo.

•
Supporto per Altri Linguaggi di Programmazione Logica: Aggiungere il supporto per altri linguaggi di programmazione logica, come Datalog o ASP.
