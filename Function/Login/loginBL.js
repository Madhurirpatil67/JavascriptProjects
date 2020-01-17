function loginVerification(strUserName,strPassword)
{
    let tempUsername="Madhu";
    let tempPswd="123";

    if((strUserName === tempUsername) && (strPassword === tempPswd))
    {
        return true;
    }
    else
    return "Username and password does not match..";
}