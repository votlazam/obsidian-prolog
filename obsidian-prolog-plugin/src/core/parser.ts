// Parser per il codice Prolog
export function parseProlog(code: string): string[] {
  // Estrae i nomi dei predicati dal codice (placeholder semplificato)
  const matches = code.match(/([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g);
  return matches ? matches.map(m => m.replace(/\(.*/, '')) : [];
} 