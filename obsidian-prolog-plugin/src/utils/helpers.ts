// Funzioni helper
const DANGEROUS_PATTERNS = [
  /shell\s*\(/i,
  /process\s*\(/i,
  /consult\s*\(["']?\w+\.(pl|prolog)["']?\)/i,
  /open\s*\(/i,
  /see\s*\(/i,
  /tell\s*\(/i,
  /read\s*\(/i,
  /write\s*\(/i,
  /system\s*\(/i,
  /asserta?\s*\(/i,
  /retracta?\s*\(/i,
  /abolish\s*\(/i,
  /set_prolog_flag\s*\(/i
];

export function isPrologCodeValid(code: string): boolean {
  if (code.trim().length === 0) return false;
  for (const pattern of DANGEROUS_PATTERNS) {
    if (pattern.test(code)) {
      console.warn('Tentativo di esecuzione di codice Prolog potenzialmente pericoloso bloccato:', code);
      return false;
    }
  }
  return true;
}

export function formatPrologResults(results: string[]): string {
  if (!results.length) return 'Nessun risultato.';
  return results.join('\n');
} 