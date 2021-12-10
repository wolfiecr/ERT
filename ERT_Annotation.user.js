// ==UserScript==
// @name        Paragon ERT Annotation
// @namespace   paragon_ERT_annotation_SESU
// @author      rverfra@amazon.com
// @description Paragon New version Standard ERT Annotation
// @include     https://paragon-na.amazon.com/*
// @include     https://paragon-eu.amazon.com/*
// @version     1.9
// @grant       none
// @updateURL	https://github.com/wolfiecr/ERT/raw/main/ERT_Annotation.user.js
// @downloadURL https://github.com/wolfiecr/ERT/raw/main/ERT_Annotation.user.js
// Feedback	rverfra@amazon.com
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
    document.getElementById('annotationTextAreaannotationText').textContent += "✤✤✤𝗘𝗥𝗧 𝗔𝗻𝗻𝗼✤✤✤\n• 𝗦𝗲𝗹𝗹𝗲𝗿 𝗜𝗗: " + gmSellerId + "\n𝗠𝗮𝗿𝗸𝗲𝘁𝗽𝗹𝗮𝗰𝗲 (𝗘𝘅: 𝗔𝗺𝗮𝘇𝗼𝗻.𝗰𝗼𝗺 𝟭 𝗼𝗿 𝗔𝗺𝗮𝘇𝗼𝗻.𝗰𝗮 𝟳): \n𝗦𝗲𝗹𝗹𝗶𝗻𝗴-𝗣𝗮𝗿𝘁𝗻𝗲𝗿 𝗔𝘀𝗸(𝘀): (𝗦𝗽𝗲𝗰𝗶𝗳𝗶𝗰 𝗰𝗼𝗻𝗰𝗲𝗿𝗻𝘀)\n𝟭. \n𝟮. \n𝟯. \n• 𝗥𝗼𝗼𝘁 𝗰𝗮𝘂𝘀𝗲: \n• 𝗥𝗲𝘀𝗼𝘂𝗿𝗰𝗲 𝗟𝗶𝗻𝗸𝘀 (𝗦𝗢𝗣𝘀/𝗵𝗲𝗹𝗽 𝗽𝗮𝗴𝗲𝘀/𝘄𝗶𝗸𝗶𝘀): \n\n• 𝗥𝗲𝘀𝗲𝗮𝗿𝗰𝗵 (𝗦𝘂𝗰𝗵 𝗮𝘀 𝗿𝗲𝗹𝗲𝘃𝗮𝗻𝘁 𝘀𝗲𝗰𝘁𝗶𝗼𝗻𝘀 𝗼𝗳 𝗿𝗲𝘀𝗼𝘂𝗿𝗰𝗲𝘀, 𝘆𝗼𝘂𝗿 𝘁𝗵𝗼𝘂𝗴𝗵𝘁 𝗽𝗿𝗼𝗰𝗲𝘀𝘀, 𝗮𝗻𝗱 𝗿𝗮𝘁𝗶𝗼𝗻𝗮𝗹𝗲):\n\n• 𝗥𝗲𝘃𝗶𝗲𝘄𝗲𝗱 𝘁𝗵𝗲 𝗳𝗼𝗹𝗹𝗼𝘄𝗶𝗻𝗴:\n\n• 𝗔𝗱𝗱𝗶𝘁𝗶𝗼𝗻𝗮𝗹 𝗗𝗼𝗰𝘂𝗺𝗲𝗻𝘁𝗮𝘁𝗶𝗼𝗻 𝗣𝗿𝗼𝘃𝗶𝗱𝗲𝗱 𝗯𝘆 𝗦𝗲𝗹𝗹𝗲𝗿:\n\n• 𝗔𝗱𝗱𝗶𝘁𝗶𝗼𝗻𝗮𝗹 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 𝗣𝗿𝗼𝘃𝗶𝗱𝗲𝗱 𝗯𝘆 𝗦𝗲𝗹𝗹𝗲𝗿:\n\n#𝗥𝗲𝗺𝗼𝘃𝗲 𝗶𝗿𝗿𝗲𝗹𝗲𝘃𝗮𝗻𝘁 𝗽𝗮𝗿𝘁𝘀 𝗯𝗲𝗹𝗼𝘄#\n• 𝗧𝗶𝗰𝗸𝗲𝘁/𝗦𝗜𝗠 𝗹𝗶𝗻𝗸 : \n• 𝗢𝗿𝗱𝗲𝗿 𝗻𝘂𝗺𝗯𝗲𝗿: \n• 𝗟𝗶𝗻𝗸 𝘁𝗼 𝗼𝗿𝗱𝗲𝗿 𝗱𝗲𝘁𝗮𝗶𝗹𝘀:\n• 𝗢𝘁𝗵𝗲𝗿 𝗥𝗲𝗹𝗲𝘃𝗮𝗻𝘁 𝗱𝗲𝘁𝗮𝗶𝗹𝘀 (𝗔𝗦𝗜𝗡, 𝗦𝗞𝗨, 𝗲𝘁𝗰):\n• 𝗘𝘅𝗽𝗲𝗿𝘁(𝘀) 𝗰𝗼𝗻𝘁𝗮𝗰𝘁𝗲𝗱 (𝗰𝗼𝗽𝘆/𝗽𝗮𝘀𝘁𝗲 𝗰𝗵𝗶𝗺𝗲 𝗰𝗵𝗮𝘁𝘀, 𝗲𝗺𝗮𝗶𝗹𝘀 𝗶𝗻𝗰𝗹𝘂𝗱𝗶𝗻𝗴 𝗵𝗲𝗮𝗱𝗲𝗿𝘀 𝗶𝗻 𝘀𝗲𝗽𝗮𝗿𝗮𝘁𝗲 𝗮𝗻𝗻𝗼𝘁𝗮𝘁𝗶𝗼𝗻):\n\n𝗡𝗲𝘅𝘁 𝘀𝘁𝗲𝗽𝘀 𝘀𝗲𝗰𝘁𝗶𝗼𝗻\n\n• 𝗥𝗲𝘀𝗼𝗹𝘂𝘁𝗶𝗼𝗻: \n• 𝗣𝗔𝗔 / 𝗣𝗠𝗔 𝗥𝗲𝗮𝘀𝗼𝗻: \n• 𝗙𝗼𝗹𝗹𝗼𝘄 𝗨𝗽 𝗦𝗲𝘁: 𝗬𝗲𝘀/𝗡𝗼 & 𝗪𝗵𝘆? \n• 𝗧𝗿𝗮𝗻𝘀𝗳𝗲𝗿 𝗥𝗲𝗮𝘀𝗼𝗻 (𝗜𝗳 𝗽𝗮𝘀𝘀𝗯𝗮𝗰𝗸, 𝘀𝗲𝘁 𝘀𝘁𝗮𝘁𝘂𝘀 𝘁𝗼 𝗪𝗼𝗿𝗸-𝗜𝗻-𝗣𝗿𝗼𝗴𝗿𝗲𝘀𝘀):";
});
// Add Button Event Handler - Remove text on clear click
clear.addEventListener ("click", function() {
  document.getElementById('annotationTextAreaannotationText').textContent ="";
});
