$(document).ready(function () {
    
    $('#copyButton').on('click', function (e) {
        e.preventDefault();
        $("#dummy").val($("#textarea").val());
        $("#dummy").show().select();
        $("body").css({"overflow": "hidden"});
        document.execCommand("copy");
        $("#dummy").hide()
        
        if ($(this).text() == "Copy") {
            $(this).text('Text Copied. . . .');
            $(this).css({"width":"200px"});
            $(this).removeClass('btn-primary').addClass('btn-success');
        }
        
    })
});

function outputPreview(){

    if ($("#copyButton").text() == "Text Copied. . . .") {
        $("#copyButton").text("Copy");
        $("#copyButton").css({"width":"150px"});
        $("#copyButton").removeClass('btn-success').addClass('btn-primary');
    }
    if($("#userconfirm").val() != "Choose.."){
    $("#textarea").text(
        'User Confirmed Closure: ' + $('#userconfirm').val() +
        '\nCustomer Time Zone: ' + $("#timezone").val() +
        '\nUser Location: ' + $("#userlocation").val() +
        '\nAuthentication Done: ' + $("#authenticationdone").val() +
        '\nApproved for Escalation (SME/L1.5): ' + $("#approvedforescalation").val() +        
        '\nToubleshooting Steps done: ' + $("#troubleshootingsteps").val() +
        '\nRemote Disclaimer taken: ' + $("#remotedisclaimer").val() +
        '\nError Message Captured: ' + $("#errormessage").val() +
        '\nSystem Logs collected: ' + $("#systemlogs").val() +
        '\nPossible Root Cause Identified: ' + $("#possiblerootcause").val() +
        '\nApplication Logs Collected: ' + $("#applicationlogs").val() +
        '\nRelated IMCT Post: ' + $("#relatedimctpost").val() +
        '\nOS & Version: ' + $("#osversion").val() +
        '\nConnection Type: ' + $("#connectiontype").val() +
        '\n*********************************************************************************' + '\n' 
    )
    }

}


$( "#userconfirm" ).change(function() {
    outputPreview();
});

$( "#timezone" ).change(function() {
    outputPreview();   
});

$( "#userlocation" ).change(function() {
    outputPreview();   
});

$( "#authenticationdone" ).change(function() {
    outputPreview();
});

$( "#approvedforescalation" ).change(function() {
    outputPreview();
});

$( "#troubleshootingsteps" ).change(function() {
    outputPreview();
});

$( "#remotedisclaimer" ).change(function() {
    outputPreview();
});

$( "#errormessage" ).change(function() {
    outputPreview();
});

$( "#systemlogs" ).change(function() {
    outputPreview();
});

$( "#possiblerootcause" ).change(function() {
    outputPreview();
});

$( "#applicationlogs" ).change(function() {
    outputPreview();
});

$( "#relatedimctpost" ).change(function() {
    outputPreview();
});

$( "#osversion" ).change(function() {
    outputPreview();
});

$( "#connectiontype" ).change(function() {
    outputPreview();
});
