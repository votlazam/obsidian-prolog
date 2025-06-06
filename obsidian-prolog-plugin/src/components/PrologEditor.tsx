import React, { useRef, useImperativeHandle, forwardRef } from 'react';

export interface PrologEditorRef {
  getValue: () => string;
  setValue: (code: string) => void;
}

interface PrologEditorProps {
  initialCode?: string;
}

const PrologEditor = forwardRef<PrologEditorRef, PrologEditorProps>(({ initialCode = '' }, ref) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(ref, () => ({
    getValue: () => textareaRef.current?.value || '',
    setValue: (code: string) => {
      if (textareaRef.current) textareaRef.current.value = code;
    }
  }));

  return (
    <textarea
      ref={textareaRef}
      defaultValue={initialCode}
      style={{ width: '100%', minHeight: 120, fontFamily: 'monospace', fontSize: 14 }}
      spellCheck={false}
    />
  );
});

export default PrologEditor; 