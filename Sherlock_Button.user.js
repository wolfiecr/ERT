// ==UserScript==
// @name        Sherlock Button
// @namespace   Sherlock_button_only
// @author      rverfra
// @include     https://paragon*.amazon.com/hz/case*
// @require     https://drive.corp.amazon.com/view/ESPR/Scripts/jquery.min.js
// @updateURL	https://drive.corp.amazon.com/view/rverfra@/ERT/Sherlock_BTNONLY.user.js
// @downloadURL https://drive.corp.amazon.com/view/rverfra@/ERT/Sherlock_BTNONLY.user.js?download=true
// @version     1.4
// @grant       none
// ==/UserScript==

if (typeof jqueryize == 'undefined') {
    jqueryize = function (fn) {
        var script = document.createElement('script');
        script.src = 'https://internal-cdn.amazon.com/btk.amazon.com/ajax/libs/jquery/1.9.1/jquery.js';
        script.onload = function () {
            var fnScript = document.createElement('script');
            fnScript.textContent = '(' + fn.toString() + ')(jQuery.noConflict(true));';
            document.body.appendChild(fnScript);
        };

        document.body.appendChild(script);
    }
}

const getCaseDetailsJSON = () => {
    const caseDetails = document.getElementsByTagName("composite-case-details")[0].getAttribute("composite-case-details-field-map")
    try {
        const caseDetailsJSON = JSON.parse(caseDetails).compositeCaseDetails.caseDetails;
        return caseDetailsJSON;
    } catch(e) {
        console.error(`Failed to get case details! ${e}`)
        return {}
    }
}

var MycaseDetails = getCaseDetailsJSON();
var MySellerId = encodeURIComponent(MycaseDetails.merchantId);
var MyCaseId = encodeURIComponent(MycaseDetails.id);
//var MySellerNickname2 = encodeURIComponent(MycaseDetails.Nickname);
var MyCaseDesc = encodeURIComponent(MycaseDetails.subject);
var MyTenantId = encodeURIComponent(MycaseDetails.tenantId);

const getSellerInfoJSON = () => {
    const sellerInfo = document.getElementsByTagName("composite-case-details")[0].getAttribute("composite-case-details-field-map")
	try {
        var sellerInfoJSON = '';
        if (MyTenantId == 1) {
            sellerInfoJSON = JSON.parse(sellerInfo).compositeCaseDetails.sellerInfo;
        }
        else
        {
            sellerInfoJSON = JSON.parse(sellerInfo).compositeCaseDetails.customerInfo;
        }
        return sellerInfoJSON;
    } catch(e) {
        console.error(`Failed to get case details! ${e}`)
        return {}
    }
}
var SellerInformation = getSellerInfoJSON();
var MySellerNickname = encodeURIComponent(SellerInformation.Nickname);

var MySimLink = "https://issues.amazon.com/issues/create?assignedFolder=2f75c7c7-7a2e-42dc-bdf5-6972b14cbcc0&extensions[tt][category]=&customFields[number][0][id]=case_id&customFields[number][0][value]="+ MyCaseId +"&customFields[string][0][id]=partner&customFields[string][0][value]="+ MySellerNickname +"&title=ESPR+ERT+Escalation+-+["+ MyCaseId +"]+-["+ MySellerNickname +"]+-["+ MyCaseDesc +"]&description=Partner+Name%3A+"+ MySellerNickname +"%0APartner+ID%3A+"+ MySellerId +"%0ACase+id%3A+"+ MyCaseId +"%0A%0AIssue%3A+%0A%0A"+ MyCaseDesc +"&descriptionContentType=text%2Famz-markdown-sim&assigneeIdentity=ΞΞENTER_AM_LOGINΞΞ";
console.log("Este es el link del sherlkock: " + MySimLink);

function lunchSherlock(){
    window.open(MySimLink, MyCaseId, "");
};
$( document ).ready(function() {
    console.log( "ready!" );
    $( "#issue-summary-parent-div" ).find(".a-span8").removeClass("a-span8").addClass("a-span7");
    $( "#issue-summary-parent-div" ).find(".a-span4").removeClass("a-span4").addClass("a-span5");
    $( "#issue-summary-parent-div" ).find(".a-span5").append('<span style=\"float: right;\"><span class=\"a-declarative\"><span id=\"sherlockbtn\" class=\"a-button a-button-base a-button-medium a-button-oneclick\"><span class=\"a-button-inner\"><a id=\"sherlockbutton\" class=\"a-button-text\" target=\"' + MyCaseId + '\" href=\"' + MySimLink + '\">Sherlock</a></span></span></span></span><span class=\"a-letter-space\"></span>');
    if ( $( "#issue-summary-parent-div-selling-assistant" ).length){
        $( "#issue-summary-parent-div-selling-assistant" ).find(".a-span8").removeClass("a-span8").addClass("a-span7");
        $( "#issue-summary-parent-div-selling-assistant" ).find(".a-span4").removeClass("a-span4").addClass("a-span5");
        $( "#issue-summary-parent-div-selling-assistant" ).find(".a-span5").append('<span style=\"float: right;\"><span class=\"a-declarative\"><span id=\"sherlockbtn\" class=\"a-button a-button-base a-button-medium a-button-oneclick\"><span class=\"a-button-inner\"><a id=\"sherlockbutton\" class=\"a-button-text\" target=\"' + MyCaseId + '\" href=\"' + MySimLink + '\">Sherlock</a></span></span></span></span><span class=\"a-letter-space\"></span>');
        $( "#toggle-transfer-case" ).removeClass("a-span2");
    }
});
