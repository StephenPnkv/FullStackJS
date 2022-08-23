import config from './../config/config.js';
import app from './express.js';
import Template from './../template.js';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.listen(config.port, (err) => {
	if(err){
		console.log(err);
	}
	console.info('Server started on port %s.', config.port);
});

app.get('/', (req,res) => {
	res.status(200).send(Template());
});

