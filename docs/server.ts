import express from 'express';
import swaggerUI from 'swagger-ui-express';
import { docs } from './docs';

const app = express();

app.get('/', (req, res, next) => res.redirect('/docs'));
app.use('/docs', swaggerUI.serve, swaggerUI.setup(docs, {}));

app.listen(8001, () => {
	console.log('Server is listening on port 8001');
});
