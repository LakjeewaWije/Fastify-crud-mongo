import  mongoose from 'mongoose';
import {MONGOOSE_URL} from '../../env';
export class DatabaseMongoDB {
	// Initialize your database connection
	public static init(): any {
		const dsn = 'mongodb://localhost/fastify-crud';
        const cloudMongooseUrl = MONGOOSE_URL;
		const options = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify: false, autoIndex: true };

		mongoose.set('useCreateIndex', true);

		mongoose.connect(cloudMongooseUrl, options, (error) => {
			// handle the error
			if (error) {
				console.error('Failed to connect to the database server!!');
				throw error;
			} else {
                console.info('Connected to database server at: ' + cloudMongooseUrl);
			}
		});
	}
}

export default mongoose;
