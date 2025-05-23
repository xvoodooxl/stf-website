'use client';
import React from 'react';

export const CodePage = () => (
  <div className="m-8">
    <CopyToClipboard>yarn add next react react-dom</CopyToClipboard>
    <div className="mb-5" />
    <CopyToClipboard>npm install @supabase/supabase-js</CopyToClipboard>
  </div>
);

/* logic */

export function CopyToClipboard({ children }) {
  const [copied, setCopied] = React.useState(false);
  const resetCopy = React.useRef(null);

  const onCopyCode = () => {
    navigator.clipboard.writeText(children).then(() => setCopied(true));
  };

  React.useEffect(() => {
    if (copied) {
      resetCopy.current = setTimeout(() => setCopied(false), 2500);
    }

    return () => {
      clearTimeout(resetCopy.current);
    };
  }, [copied]);
  return (
    <pre className="inline-flex w-full text-sm p-1.5 rounded overflow-x-auto max-w-full bg-gray-100 border border-gray-400 dark:bg-neutral-800 dark:border-neutral-700 ">
      <span>{children}</span>
      <span className="ml-auto" >
        {copied ? <CopiedIcon /> : <CopyIcon onClick={onCopyCode} />}
      </span>
    </pre>
  );
}

const CopyIcon = (props) => (
  <svg
    stroke="currentColor"
    width="20"
    height="20"
    fill="transparent"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    strokeLinejoin="round"
    strokeLinecap="round"
    role="button"
    aria-label="Copy"
    {...props}
  >
    <path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z" />
  </svg>
);

const CopiedIcon = () => (
  <svg
    width="20"
    height="20"
    fill="currentColor"
    aria-label="Copied"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm376 116c-119.3 0-216 96.7-216 216s96.7 216 216 216 216-96.7 216-216-96.7-216-216-216zm107.5 323.5C750.8 868.2 712.6 884 672 884s-78.8-15.8-107.5-44.5C535.8 810.8 520 772.6 520 732s15.8-78.8 44.5-107.5C593.2 595.8 631.4 580 672 580s78.8 15.8 107.5 44.5C808.2 653.2 824 691.4 824 732s-15.8 78.8-44.5 107.5zM761 656h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8-23.1-31.9a7.92 7.92 0 0 0-6.5-3.3H573c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.9-5.3.1-12.7-6.4-12.7zM440 852H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" />
  </svg>
);