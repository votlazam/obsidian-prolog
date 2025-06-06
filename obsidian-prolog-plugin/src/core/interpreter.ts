// Integrazione con Tau Prolog
import pl from 'tau-prolog';
import { isPrologCodeValid } from '../utils/helpers';

export class PrologInterpreter {
  private session: any;

  constructor() {
    this.session = pl.create(1000);
  }

  async consult(code: string): Promise<void> {
    if (!isPrologCodeValid(code)) {
      throw new Error('Codice Prolog non valido o potenzialmente pericoloso.');
    }
    return new Promise((resolve, reject) => {
      this.session.consult(code, {
        success: () => resolve(),
        error: (err: any) => reject(err)
      });
    });
  }

  async query(query: string): Promise<string[]> {
    if (!isPrologCodeValid(query)) {
      throw new Error('Query Prolog non valida o potenzialmente pericolosa.');
    }
    return new Promise((resolve, reject) => {
      this.session.query(query, {
        success: () => {
          const results: string[] = [];
          this.session.answers((answer: any) => {
            if (answer === false || answer === null) {
              resolve(results);
            } else if (answer.id === 'throw') {
              reject(answer);
            } else {
              results.push(pl.format_answer(answer));
            }
          });
        },
        error: (err: any) => reject(err)
      });
    });
  }
} 