# Obsidian Prolog Plugin - Specifiche Funzionali

## Descrizione Generale
Il plugin "Obsidian Prolog" è un'estensione per Obsidian che consente agli utenti di scrivere, eseguire e visualizzare i risultati di codice Prolog direttamente all'interno dell'editor di note. Questo plugin integra l'interprete Tau Prolog, permettendo l'esecuzione di codice Prolog senza la necessità di installare software aggiuntivo.

## Funzionalità Principali

### 1. Editor di Codice Prolog
- Evidenziazione della sintassi per il codice Prolog
- Completamento automatico per predicati comuni
- Indentazione automatica del codice

### 2. Esecuzione del Codice
- Esecuzione di query Prolog direttamente dall'editor
- Visualizzazione dei risultati in un pannello dedicato
- Possibilità di eseguire più query consecutive

### 3. Gestione della Base di Conoscenza
- Caricamento di file Prolog esterni come base di conoscenza
- Salvataggio della base di conoscenza corrente
- Visualizzazione della base di conoscenza attiva

### 4. Integrazione con Obsidian
- Possibilità di incorporare blocchi di codice Prolog nelle note
- Esecuzione di codice Prolog all'interno dei blocchi di codice
- Visualizzazione dei risultati inline o in un pannello separato

### 5. Funzionalità Aggiuntive
- Supporto per moduli aggiuntivi di Tau Prolog (DOM, JS, ecc.)
- Modalità debug per il codice Prolog
- Esportazione dei risultati delle query

## Interfaccia Utente
- Barra degli strumenti con pulsanti per le operazioni comuni
- Pannello laterale per la visualizzazione dei risultati
- Comandi nella palette dei comandi di Obsidian
- Impostazioni configurabili nel menu delle impostazioni di Obsidian

## Requisiti Tecnici
- Utilizzo dell'interprete Tau Prolog per l'esecuzione del codice
- Compatibilità con le versioni recenti di Obsidian
- Funzionamento su tutte le piattaforme supportate da Obsidian (Windows, macOS, Linux, iOS, Android)

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

1.
Scaricare l'ultima versione del plugin dal repository GitHub.

2.
Estrarre il file zip nella cartella dei plugin di Obsidian.

3.
Abilitare il plugin nelle impostazioni di Obsidian.

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

Conclusioni

Il plugin Prolog per Obsidian è uno strumento potente che permette di integrare la programmazione logica nelle note di Obsidian. Grazie all'interprete Tau Prolog, gli utenti possono eseguire codice Prolog direttamente nelle note, senza la necessità di installare software aggiuntivo.

Il sito web fornisce tutte le informazioni necessarie per installare e utilizzare il plugin, con esempi e guide dettagliate.

Sviluppi Futuri

•
Supporto per Librerie Prolog Esterne: Aggiungere la possibilità di caricare librerie Prolog esterne.

•
Miglioramento dell'Interfaccia Utente: Rendere l'interfaccia utente più intuitiva e personalizzabile.

•
Integrazione con Altri Plugin: Integrare il plugin con altri plugin di Obsidian per creare un ecosistema più completo.

•
Supporto per Altri Linguaggi di Programmazione Logica: Aggiungere il supporto per altri linguaggi di programmazione logica, come Datalog o ASP.

