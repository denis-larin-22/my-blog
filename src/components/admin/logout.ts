export const logout = (toggleState: (state: boolean) => void): void => {
    toggleState(false);
}