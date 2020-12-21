const getDbConnection = require('./DbFactory');

class DbService {
    connection = null;
    constructor() {
        this.connection = getDbConnection();
        this.connection.connect((err) => {
            if (err) {
                console.log(err.message);
            } else {
                console.log('db connected succesfully')
            }
        })
    }

    executeQuery = async (query, ...args) => {
        const options = args[0];
        return await new Promise((resolve, reject) => {
            this.connection.query(query, options, (err, results) => {
                if (err) reject(new Error(err.message));
                resolve(results);
            });
        })
    }
}

module.exports = DbService;