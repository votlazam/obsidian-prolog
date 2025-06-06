import { Plugin, ItemView, WorkspaceLeaf } from 'obsidian';
import { PrologSettingTab, DEFAULT_SETTINGS, PrologPluginSettings } from './settings/settings';
import React, { useRef, useState } from 'react';
import { createRoot, Root } from 'react-dom/client';
import PrologEditor, { PrologEditorRef } from './components/PrologEditor';
import PrologView from './components/PrologView';
import { PrologInterpreter } from './core/interpreter';
import { formatPrologResults } from './utils/helpers';

const VIEW_TYPE = 'prolog-view';

class PrologReactView extends ItemView {
  plugin: PrologPlugin;
  root: Root | null = null;

  constructor(leaf: WorkspaceLeaf, plugin: PrologPlugin) {
    super(leaf);
    this.plugin = plugin;
  }

  getViewType() {
    return VIEW_TYPE;
  }

  getDisplayText() {
    return 'Prolog Panel';
  }

  async onOpen() {
    // Crea un div per React se non esiste
    let reactRoot = this.containerEl.querySelector('.prolog-react-root');
    if (!reactRoot) {
      reactRoot = document.createElement('div');
      reactRoot.className = 'prolog-react-root';
      this.containerEl.appendChild(reactRoot);
    }
    this.root = createRoot(reactRoot);
    this.root.render(React.createElement(PrologPanel, { plugin: this.plugin }));
  }

  async onClose() {
    this.root?.unmount();
  }
}

function PrologPanel(props: { plugin: PrologPlugin }) {
  const editorRef = useRef<PrologEditorRef>(null);
  const [result, setResult] = useState('');

  const runProlog = async () => {
    const code = editorRef.current?.getValue() || '';
    try {
      await props.plugin.interpreter.consult(code);
      const answers = await props.plugin.interpreter.query('member(X, [1,2,3]).');
      setResult(formatPrologResults(answers));
    } catch (e: any) {
      setResult('Errore: ' + e.message);
    }
  };

  return React.createElement(
    'div',
    null,
    React.createElement(PrologEditor, { ref: editorRef, initialCode: 'member(X, [1,2,3]).' }),
    React.createElement('button', { onClick: runProlog, style: { margin: '8px 0' } }, 'Esegui'),
    React.createElement(PrologView, { result })
  );
}

export default class PrologPlugin extends Plugin {
  settings: PrologPluginSettings;
  interpreter: PrologInterpreter;

  async onload() {
    this.interpreter = new PrologInterpreter();
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    this.addSettingTab(new PrologSettingTab(this.app, this.settings));

    this.registerView(
      VIEW_TYPE,
      (leaf) => new PrologReactView(leaf, this)
    );

    this.addCommand({
      id: 'open-prolog-editor',
      name: 'Apri Editor Prolog',
      callback: () => this.activateView(),
    });

    // Aggiungi il processore di markdown per i blocchi di codice Prolog
    this.registerMarkdownCodeBlockProcessor('prolog', (source, el, ctx) => {
      // Crea un container per il codice Prolog
      const container = document.createElement('div');
      container.className = 'prolog-code-block';

      // Mostra il codice Prolog
      const codeDisplay = document.createElement('pre');
      codeDisplay.className = 'prolog-code';
      codeDisplay.textContent = source;
      container.appendChild(codeDisplay);

      // Aggiungi un pulsante per eseguire il codice
      const runButton = document.createElement('button');
      runButton.textContent = 'Esegui';
      runButton.className = 'prolog-run-button';
      container.appendChild(runButton);

      // Crea un elemento per mostrare i risultati
      const resultDisplay = document.createElement('div');
      resultDisplay.className = 'prolog-result';
      resultDisplay.style.display = 'none';
      container.appendChild(resultDisplay);

      // Aggiungi l'evento click al pulsante
      runButton.addEventListener('click', async () => {
        try {
          resultDisplay.style.display = 'block';
          resultDisplay.textContent = 'Esecuzione in corso...';

          await this.interpreter.consult(source);
          const query = source.match(/\?-\s*(.*?)\./)?.[1] || 'member(X, [1,2,3]).';
          const answers = await this.interpreter.query(query);

          resultDisplay.textContent = formatPrologResults(answers);
        } catch (e: any) {
          resultDisplay.textContent = 'Errore: ' + e.message;
        }
      });

      el.appendChild(container);
    });
  }

  onunload() {
    console.log('Scaricamento del plugin Prolog');
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  async activateView() {
    const leaves = this.app.workspace.getLeavesOfType(VIEW_TYPE);
    if (leaves.length === 0) {
      await this.app.workspace.getRightLeaf(false).setViewState({
        type: VIEW_TYPE,
        active: true,
      });
    } else {
      this.app.workspace.revealLeaf(leaves[0]);
    }
  }
}
