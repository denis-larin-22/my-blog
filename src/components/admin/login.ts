export const login = (toggleComponents: (state: boolean) => void): void => {
    const adminKey: string = process.env.REACT_APP_ADMIN_KEY || '';
    const password: string | null = prompt('Admin password:');
    if (password !== null && password === adminKey) {
        toggleComponents(true);
    } else {
        alert('The password is wrong!');
    }
}