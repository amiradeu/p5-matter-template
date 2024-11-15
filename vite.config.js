import restart from 'vite-plugin-restart'

export default {
    root: 'src/',
    publicDir: '../public/',
    base: './',
    plugins: [
        // Restart server on public file change
        restart({ restart: ['../public/**'] }),
    ],
    server: {
        host: true, // Open to local network and display URL
        open: !(
            'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env
        ), // Open if it's not a CodeSandbox
    },
    build: {
        outDir: '../dist', // Output in the dist/ folder
        emptyOutDir: true, // Empty the folder first
        sourcemap: true, // Add sourcemap
    },
}
