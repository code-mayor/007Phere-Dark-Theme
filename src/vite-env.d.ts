/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly BASE_URL: string
    // Add more env vars if needed
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
