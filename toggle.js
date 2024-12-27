function setTheme() {
    const root = document.documentElement;
    const currentTheme = root.className;
    console.log(currentTheme);

    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    root.className = newTheme;

    document.querySelector('.theme-name').textContent = newTheme;
}

document.querySelector('.theme-toggle').addEventListener('click', setTheme)