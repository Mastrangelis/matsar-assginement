import { rest } from 'msw';

export const handlers = [
    rest.get('http://localhost:3000/api/autocomplete', (req, res, ctx) => {
        console.log('okkkkk');
        const suggestions = req.url.searchParams.get('q');
        console.log(suggestions);
        return res(ctx.json({ suggestions }));
    })
];
