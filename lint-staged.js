module.exports = {
    'src/**/*.{js,jsx,ts,tsx}': [
        'eslint --max-warnings=0', 
        'react-scripts test --bail --watchAll=false --findRelatedTests --passWithNoTests',
        () => 'tsc-files --noEmit',
        'commitlint -E HUSKY_GIT_PARAMS'
    ],
    '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write'],
}