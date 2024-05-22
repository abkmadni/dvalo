var config = require('./dbconfig');
const sql = require('mssql');
var currentStdID = 14;

async function getStd() {
    try {
        let pool = await sql.connect(config);
        let students = await pool.request().query("EXEC GetStds");
        return students.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

async function getStud(StdID) {
    try {
        let pool = await sql.connect(config);
        let students = await pool.request()
            .input('input_parameter', sql.Int, StdID)
            .query("EXEC GetStd @input_parameter");
        return students.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

async function addStd(student) {
    try {
        let pool = await sql.connect(config);
        let insertStudent = await pool.request()
            .input('StdName', sql.NVarChar, student.StdName)
            .input('StdDOB', sql.Date, student.StdDOB)
            .input('FirstSem', sql.Int, student.FirstSem)
            .input('StdPhone', sql.NVarChar, student.StdPhone)
            .input('StdAddress', sql.NVarChar, student.StdAddress)
            .input('StdEmail', sql.NVarChar, student.StdEmail)
            .input('GuardianContact', sql.NVarChar, student.GuardianContact)
            .input('ProgID', sql.Int, student.ProgID)
            .execute("AddStd");
        return insertStudent.recordsets;

    } catch (error) {
        console.log(error);
    }
}

async function getMaxStdID() {
    try {
        let pool = await sql.connect(config);
        let students = await pool.request().query("EXEC MaxStdID");
        return students.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

async function updateStd(student) {
    try {
        let pool = await sql.connect(config);
        let insertStudent = await pool.request()
            .input('StdID', sql.Int, student.StdID)
            .input('StdName', sql.NVarChar, student.StdName)
            .input('StdDOB', sql.Date, student.StdDOB)
            .input('FirstSem', sql.Int, student.FirstSem)
            .input('StdPhone', sql.NVarChar, student.StdPhone)
            .input('StdAddress', sql.NVarChar, student.StdAddress)
            .input('StdEmail', sql.NVarChar, student.StdEmail)
            .input('GuardianContact', sql.NVarChar, student.GuardianContact)
            .input('ProgID', sql.Int, student.ProgID)
            .execute("UpdateStd");
        return insertStudent.recordsets;

    } catch (error) {
        console.log(error);
    }
}

async function delStd(StdID) {
    try {
        let pool = await sql.connect(config);
        let student = await pool.request()
            .input('StdID', sql.Int, StdID)
            .query("EXEC DelStd @StdID");
        console.log(student);
        return student.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}


  //my stored procedure is this:
        /*create procedure sp_login
@username varchar(50),
@password varchar(20)
as
begin
IF(
(select password from login where userid = (select userid from users where UserEmail like @username)) = @password)
begin
return 100
end
else
begin
return 200
end
end*/

async function login(user) {
    try {
        let pool = await sql.connect(config);
        let loginUser = await pool.request()
            .input('username', sql.NVarChar, user.email)
            .input('password', sql.NVarChar, user.password)
            .query("EXEC sp_login @username, @password");
        return loginUser.recordsets;
    } catch (error) {
        console.log(error);
    }
}

async function getUser(UserID) {
    try {
        let pool = await sql.connect(config);
        let user = await pool.request()
            .input('UserID', sql.Int, UserID)
            .execute("GetUser");
        return user.recordsets;
    } catch (err) {
        console.log(err);
    }
}

async function getUserPass(UserID) {
    try {
        let pool = await sql.connect(config);
        let user = await pool.request()
            .input('UserID', sql.Int, UserID)
            .query("EXEC GetUserPassword @UserID");
        return user.recordsets;
    } catch (err) {
        console.log(err);
    }
}

async function addUser(user) {
    try {
        let pool = await sql.connect(config);
        let insertUser = await pool.request()
            .input('UserName', sql.NVarChar, user.username)
            .input('UserAddress', sql.NVarChar, user.address)
            .input('Age', sql.Int, user.age)
            .input('UserGender', sql.NVarChar, user.gender)
            .input('UserPhone', sql.NVarChar, user.phone)
            .input('UserEmail', sql.NVarChar, user.email)
            .input('Password', sql.NVarChar, user.password)
            .input('Role', sql.NVarChar, user.role)
            .execute("AddUser");
        return insertUser.recordsets;
    } catch (error) {
        console.log(error);
    }
}


async function updateUser(user) {
    try {
        let pool = await sql.connect(config);
        let insertUser = await pool.request()
            .input('UserID', sql.Int, user.UserID)
            .input('UserName', sql.NVarChar, user.username)
            .input('UserAddress', sql.NVarChar, user.address)
            .input('Age', sql.Int, user.age)
            .input('UserGender', sql.NVarChar, user.gender)
            .input('UserPhone', sql.NVarChar, user.phone)
            .input('UserEmail', sql.NVarChar, user.email)
            .input('Password', sql.NVarChar, user.password)
            .execute("UpdateUser");
        return insertUser.recordsets;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getStd: getStd,
    getStud: getStud,
    addStd: addStd,
    updateStd: updateStd,
    delStd: delStd,
    getMaxStdID: getMaxStdID,
    login: login,
    getUser: getUser,
    getUserPass: getUserPass,
    updateUser: updateUser,
    addUser: addUser,
}
