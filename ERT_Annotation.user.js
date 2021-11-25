// ==UserScript==
// @name        Paragon ERT Annotation
// @namespace   paragon_ERT_annotation_SESU
// @author      rverfra@amazon.com
// @description Paragon New version Standard ERT Annotation
// @include     https://paragon-na.amazon.com/*
// @include     https://paragon-eu.amazon.com/*
// @version     1.7
// @grant       none
// @updateURL	https://drive.corp.amazon.com/documents/rverfra@/ERT/ERT_Annotation.user.js
// @downloadURL https://drive.corp.amazon.com/documents/rverfra@/ERT/ERT_Annotation.user.js?download=true
// Feedback		rverfra@amazon.com
// Updated By   rverfra@amazon.com
// ==/UserScript==

// Increase Size Annotation Text Area
document.getElementById("annotationTextAreaannotationText").style.height = "200px";

const getCaseDetailsJSON = () => {
    const caseDetails = document.getElementsByTagName("composite-case-details")[0].getAttribute("composite-case-details-field-map")
    try {
        const caseDetailsJSON = JSON.parse(caseDetails).compositeCaseDetails.caseDetails
        return caseDetailsJSON
    } catch(e) {
        console.error(`Failed to get case details! ${e}`)
        return {}
    }
}
const caseDetails = getCaseDetailsJSON()
const gmSellerId = encodeURIComponent(caseDetails.merchantId);

// Grab Seller Nick-name and place it on the annotation
var SellerNickname = document.getElementsByClassName("pg-gacd-seller-name")[0].innerText;

// Create Standard Annotation button (sa)
var divsa = document.createElement("span");

divsa.innerHTML = "<span id=\"createERTAnnotation\" class=\"a-button a-button-primary a-float-left a-spacing-small a-spacing-top-medium\" style=\"margin-left: 7px; margin-right: 7px;\"><span class=\"a-button-inner\"><button id=\"createERTAnnotationbtn\" class=\"a-button-text pg-case-view-vcm-note\" type=\"button\">Add ERT Annotation</button></span></span>";

// Append SA to Annotation Text Area
var standardAnnotation = document.getElementById("annotateCaseButtonWidget2");
standardAnnotation.appendChild(divsa);

// Create clear button (clear)
var clear = document.createElement("span");
clear.innerHTML = "<span id=\"createClear\" class=\"a-button a-button-sucess a-float-left a-spacing-small a-spacing-top-medium\"><span class=\"a-button-inner\"><button id=\"createClearbtn\" class=\"a-button-text\" type=\"button\">Clear</button></span></span>";
clear.style.background = "#f0c14b !important";

// Append clear to Annotation Text Area
var clearbtn = document.getElementById("annotateCaseButtonWidget2");
clearbtn.appendChild(clear);

// Add Button Event Handler - Insert Standard Annotation on click
divsa.addEventListener ("click", function() {
    document.getElementById('annotationTextAreaannotationText').textContent += "***ERT Anno***\n• Seller ID: " + gmSellerId + "\nMarketplace (Ex: Amazon.com 1 or Amazon.ca 7): \nSelling-Partner Ask(s): (Specific concerns)\n1. \n2. \n3. \n• Root cause: \n• Resource Links (SOPs/help pages/wikis): \n• Research (Such as relevant sections of resources, your thought process, and rationale): \n\n• Reviewed the following: \n\n• Additional Documentation Provided by Seller: \n• Additional Information Provided by Seller: \n\n#Remove irrelevant parts below#\n• Related case link: \n• Ticket/SIM link : \n• Order number: \n• Link to order details: \n• Other Relevant details (ASIN, SKU, etc): \n• Expert(s) contacted (copy/paste chime chats, emails including headers in separate annotation): \n\nNext steps section\n\n• Resolution: \n• PAA / PMA Reason: \n• Follow Up Set: Yes/No & Why? \n• Transfer Reason (If passback, set status to Work-In-Progress): ";
});
// Add Button Event Handler - Remove text on clear click
clear.addEventListener ("click", function() {
  document.getElementById('annotationTextAreaannotationText').textContent ="";
});


