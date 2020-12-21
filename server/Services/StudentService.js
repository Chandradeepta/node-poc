const DbService = require("./DbService");

class StudentService {
    dbService = null;
    constructor() {
        this.dbService = new DbService();
    }

    getAll = async () => {
        return new Promise((resolve, reject) => {
            this.dbService.executeQuery("SELECT * FROM  StudentDetails;")
                .then(data => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err)
                });
        })
    }

    insert = (student) => {
        const { LastName, FirstName, Roll, Class } = student;
        return new Promise((resolve, reject) => {
            this.dbService.executeQuery(`INSERT INTO StudentDetails (LastName, FirstName, Roll, Class)
            VALUES (?, ?, ?, ?);`, [LastName, FirstName, Roll, Class])
                .then(data => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err)
                });
        })
    }

    update = (student) => {
        const { StudentID, LastName, FirstName, Roll, Class } = student;
        return new Promise((resolve, reject) => {
            this.dbService.executeQuery(`UPDATE StudentDetails SET LastName = ? , FirstName = ?, Roll = ? ,  Class = ?
            WHERE StudentID = ?`, [LastName, FirstName, Roll, Class, StudentID])
                .then(data => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err)
                });
        })
    }

    delete = (id) => {
        return new Promise((resolve, reject) => {
            this.dbService.executeQuery(`DELETE FROM StudentDetails WHERE StudentID = ?`, [id])
                .then(data => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err)
                });
        })
    }
}

module.exports = StudentService;