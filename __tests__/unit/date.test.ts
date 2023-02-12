import { statusBarTimeFormatUTC } from '@/utils/date';

describe('Unit test for date utils', () => {
    describe('Time format in status bar', () => {
        it('Should display time in right format in status bar', () => {
            const now = new Date();
            const time = statusBarTimeFormatUTC();
            expect(time).toBe(`${now.getUTCHours()}:${now.getUTCMinutes()}`);
        });
    });
});
