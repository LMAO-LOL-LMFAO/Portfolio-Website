export function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function ArchLinuxIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2.5c-.75 1.77-1.39 3.2-1.95 4.5-.47 1.08-.88 2.05-1.29 3.06 1.06.46 2.19.86 3.24 1.25-.79.35-1.57.71-2.36 1.06-.52 1.34-1.09 2.81-1.78 4.63-.58 1.52-1.25 3.32-2.18 5.5.95-.54 1.75-.98 2.45-1.34.61-.32 1.13-.57 1.69-.81-.38-.98-.67-1.84-.79-2.36.87-.29 1.79-.62 2.97-.99-.81.33-1.63.66-2.45.98.08.38.33 1.15.75 2.15 1.08-.43 2.22-.84 3.51-1.22 1.48.42 2.76.88 3.96 1.34.42-1.02.66-1.78.73-2.14-.81-.32-1.61-.64-2.4-.96 1.16.36 2.07.69 2.93.97-.12.52-.4 1.37-.77 2.34.56.24 1.08.49 1.69.81.71.36 1.51.81 2.47 1.35-.93-2.19-1.6-3.99-2.18-5.52-.69-1.81-1.26-3.28-1.78-4.62-.79-.35-1.57-.71-2.36-1.06 1.05-.39 2.18-.79 3.24-1.25-.41-1.01-.82-1.98-1.29-3.06C13.39 5.7 12.75 4.27 12 2.5z" />
    </svg>
  );
}
