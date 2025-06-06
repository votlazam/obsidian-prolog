import React from 'react';

interface PrologViewProps {
  result: string;
}

const PrologView: React.FC<PrologViewProps> = ({ result }) => {
  return (
    <pre style={{ background: '#222', color: '#fff', padding: 12, borderRadius: 6, minHeight: 40 }}>
      {result || 'Nessun risultato'}
    </pre>
  );
};

export default PrologView; 