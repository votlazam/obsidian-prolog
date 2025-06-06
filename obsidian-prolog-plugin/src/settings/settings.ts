import { App, PluginSettingTab, Setting } from 'obsidian';

// Gestione delle impostazioni del plugin
export interface PrologPluginSettings {
  tauPrologVersion: string;
}

export const DEFAULT_SETTINGS: PrologPluginSettings = {
  tauPrologVersion: '0.3.2',
};

export class PrologSettingTab extends PluginSettingTab {
  settings: PrologPluginSettings;
  constructor(app: App, settings: PrologPluginSettings) {
    super(app, app.plugins.plugins['obsidian-prolog-plugin']);
    this.settings = settings;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();
    new Setting(containerEl)
      .setName('Tau Prolog Version')
      .setDesc('Versione della libreria Tau Prolog da usare')
      .addText(text => text
        .setPlaceholder('0.3.2')
        .setValue(this.settings.tauPrologVersion)
        .onChange(async (value) => {
          this.settings.tauPrologVersion = value;
          // Salva le impostazioni
          (this.app.plugins.plugins['obsidian-prolog-plugin'] as any).saveSettings();
        }));
  }
} 
