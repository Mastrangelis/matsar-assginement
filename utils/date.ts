const statusBarTimeFormatUTC = (): string => {
    const now = new Date();
    const utcHours = now.getUTCHours();
    const utcMinutes = now.getUTCMinutes();

    return `${utcHours}:${utcMinutes < 10 ? `0${utcMinutes}` : utcMinutes}`;
};

export { statusBarTimeFormatUTC };
