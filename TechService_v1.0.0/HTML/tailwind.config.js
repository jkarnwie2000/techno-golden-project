module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "node_modules/@frostui/tailwindcss/dist/*.js"
    ],
    darkMode: 'class',
    theme: {

        container: {
            center: true,
            padding: '1rem',
        },

        fontFamily: {
            'body': ['Be Vietnam Pro', 'sans-serif'],
        },      
    },

    plugins: [
        require('@frostui/tailwindcss/plugin'),
    ],
}