USE StudentInformation
Select * From Std

CREATE PROCEDURE GetStds
AS
BEGIN
SELECT * FROM Std
END

CREATE PROCEDURE MaxStdID
AS
BEGIN
SELECT MAX(StdID) AS 'StdID' FROM Std
END

MaxStdID

CREATE PROCEDURE GetStd
@StdID INT
AS
BEGIN
SELECT * FROM Std
WHERE StdID = @StdID
END

CREATE PROCEDURE GetTeachers
AS
BEGIN
SELECT * FROM Teacher
END

CREATE PROCEDURE GetTeacher
@TID INT
AS
BEGIN
SELECT * FROM Teacher WHERE TeacherID = @TID
END


EXEC GetTeacher 2

CREATE PROCEDURE AddStd
@StdName VARCHAR(50), 
@StdDOB SMALLDATETIME, 
@FirstSem INT, 
@StdPhone CHAR(15), 
@StdAddress VARCHAR(50), 
@StdEmail VARCHAR(50), 
@GuardianContact CHAR(15), 
@ProgID SMALLINT
AS
BEGIN
INSERT INTO Std (StdName, StdDOB, FirstSem, StdPhone, StdAddress, StdEmail, GuardianContact, ProgID) 
VALUES (@StdName, @StdDOB, @FirstSem, @StdPhone, @StdAddress, @StdEmail, @GuardianContact, @ProgID)
END


CREATE PROCEDURE UpdateStd
@StdID INT,
@StdName VARCHAR(50), 
@StdDOB SMALLDATETIME, 
@FirstSem INT, 
@StdPhone CHAR(15), 
@StdAddress VARCHAR(50), 
@StdEmail VARCHAR(50), 
@GuardianContact CHAR(15), 
@ProgID SMALLINT
AS
BEGIN
UPDATE Std
SET StdName = @StdName,
StdDOB = @StdDOB,
FirstSem = @FirstSem,
StdPhone = @StdPhone,
StdAddress = @StdAddress,
StdEmail = @StdEmail,
GuardianContact = @GuardianContact,
ProgID = @ProgID
WHERE StdID = @StdID
END


EXEC UpdateStd 11, 'Abdul Basit Khan'
EXEC GetStds


CREATE PROCEDURE DelStd
@StdID INT
AS
BEGIN
DELETE 
FROM Std
WHERE StdID = @StdID;
END


