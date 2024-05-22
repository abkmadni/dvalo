class User{
    constructor(UserID, UserName, UserAddress, Age, UserGender, UserPhone, UserEmail, Password){
        this.UserID = UserID;
        this.UserName = UserName;
        this.UserAddress = UserAddress;
        this.Age = Age;
        this.UserGender = UserGender;
        this.UserPhone = UserPhone;
        this.UserEmail = UserEmail;
        this.Password = Password;
    }
}

module.exports = User;