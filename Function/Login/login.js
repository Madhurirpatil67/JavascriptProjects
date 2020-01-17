///<reference path='../Login/jquery-3.4.1.min.js'/>

function onCancel()
{
    //clear Textbox
    $("#txtusername").val("");
    $("#txtpswd").val("");

    //Focus on UserName
    $("#txtusername").focus();
}

function loginData()
{
    let loginArray=[$("#txtusername").val(),$("#txtpswd").val()];
    return loginArray;
}

function validResponse(message)
{
    
    if(typeof(message)==="boolean")
    {
        window.alert("Login Successful...");
        $("#response").html("");
        $("#response").hide();
    }
    else if(typeof(message)==="string")
    {
       onCancel();
       console.log(message);
       $("#response").html(message);
       $("#response").show();
    }
}

function onSubmit()
{
  let logArray=loginData();
  
  let msg=loginVerification(logArray[0],logArray[1]);

  validResponse(msg);
}