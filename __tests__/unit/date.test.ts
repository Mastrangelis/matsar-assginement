import { statusBarTimeFormatUTC } from '@/utils/date';

describe('Unit test for date utils', () => {
    describe('Time format in status bar', () => {
        it('Should display time in right format in status bar', () => {
            const now = new Date();
            const nowUTCHours = now.getUTCHours();
            const nowUTCMinutes = () => {
                const mins = now.getUTCMinutes();
                return mins < 10 ? `0${mins}` : mins;
            };
            const time = statusBarTimeFormatUTC();
            expect(time).toBe(`${nowUTCHours}:${nowUTCMinutes()}`);
        });
    });
});
