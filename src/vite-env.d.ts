/// <reference types='vite/client' />

declare module '@handsontable/react'
declare module 'handsontable/registry'

interface ImportMeta {
    env: {
        APP_TITLE: string,
        APP_SUBTITLE: string,
    }
}
