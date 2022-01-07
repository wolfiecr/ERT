// ==UserScript==
// @name        Paragon ERT Annotation
// @namespace   paragon_ERT_annotation_SESU
// @author      micarney@, johnsidn@
// @description Paragon New version Standard Annotation SeSu
// @include     https://paragon-na.amazon.com/*
// @include     https://paragon-eu.amazon.com/*
// @version     1.9
// @grant       none
// @downloadURL
// @updateURL
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
    document.getElementById('annotationTextAreaannotationText').textContent += "✤✤✤𝗘𝗥𝗧 𝗔𝗻𝗻𝗼✤✤✤\n• 𝗦𝗲𝗹𝗹𝗲𝗿 𝗜𝗗: " + gmSellerId + "\n𝗠𝗮𝗿𝗸𝗲𝘁𝗽𝗹𝗮𝗰𝗲 (𝑬𝒙: 𝑨𝒎𝒂𝒛𝒐𝒏.𝒄𝒐𝒎 1 𝒐𝒓 𝑨𝒎𝒂𝒛𝒐𝒏.𝒄𝒂 7): \n𝗦𝗲𝗹𝗹𝗶𝗻𝗴-𝗣𝗮𝗿𝘁𝗻𝗲𝗿 𝗔𝘀𝗸(𝘀): (𝑺𝒑𝒆𝒄𝒊𝒇𝒊𝒄 𝑪𝒐𝒏𝒄𝒆𝒓𝒏𝒔)\n𝟭. \n𝟮. \n𝟯. \n𝗥𝗼𝗼𝘁 𝗰𝗮𝘂𝘀𝗲: \n𝗥𝗲𝘀𝗼𝘂𝗿𝗰𝗲 𝗟𝗶𝗻𝗸𝘀 (𝑺𝑶𝑷𝒔/𝒉𝒆𝒍𝒑 𝒑𝒂𝒈𝒆𝒔/𝒘𝒊𝒌𝒊𝒔): \n\n𝗥𝗲𝘀𝗲𝗮𝗿𝗰𝗵 (𝑺𝒖𝒄𝒉 𝒂𝒔 𝒓𝒆𝒍𝒆𝒗𝒂𝒏𝒕 𝒔𝒆𝒄𝒕𝒊𝒐𝒏𝒔 𝒐𝒇 𝒓𝒆𝒔𝒐𝒖𝒓𝒄𝒆𝒔, 𝒚𝒐𝒖𝒓 𝒕𝒉𝒐𝒖𝒈𝒉𝒕 𝒑𝒓𝒐𝒄𝒆𝒔𝒔, 𝒂𝒏𝒅 𝒓𝒂𝒕𝒊𝒐𝒏𝒂𝒍𝒆): \n\n𝗥𝗲𝘃𝗶𝗲𝘄𝗲𝗱 𝘁𝗵𝗲 𝗳𝗼𝗹𝗹𝗼𝘄𝗶𝗻𝗴: \n\n𝗔𝗱𝗱𝗶𝘁𝗶𝗼𝗻𝗮𝗹 𝗗𝗼𝗰𝘂𝗺𝗲𝗻𝘁𝗮𝘁𝗶𝗼𝗻 𝗣𝗿𝗼𝘃𝗶𝗱𝗲𝗱 𝗯𝘆 𝗦𝗲𝗹𝗹𝗲𝗿: \n\n𝗔𝗱𝗱𝗶𝘁𝗶𝗼𝗻𝗮𝗹 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 𝗣𝗿𝗼𝘃𝗶𝗱𝗲𝗱 𝗯𝘆 𝗦𝗲𝗹𝗹𝗲𝗿: \n\n𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗲𝗿𝘀(𝑹𝒆𝒎𝒐𝒗𝒆 𝒊𝒓𝒓𝒆𝒍𝒆𝒗𝒂𝒏𝒕 𝒑𝒂𝒓𝒕𝒔 𝒃𝒆𝒍𝒐𝒘)\n• 𝗥𝗲𝗹𝗮𝘁𝗲𝗱 𝗰𝗮𝘀𝗲 𝗹𝗶𝗻𝗸: \n• 𝗧𝗶𝗰𝗸𝗲𝘁/𝗦𝗜𝗠 𝗹𝗶𝗻𝗸: \n• 𝗢𝗿𝗱𝗲𝗿 𝗻𝘂𝗺𝗯𝗲𝗿: \n• 𝗟𝗶𝗻𝗸 𝘁𝗼 𝗼𝗿𝗱𝗲𝗿 𝗱𝗲𝘁𝗮𝗶𝗹𝘀: \n• 𝗢𝘁𝗵𝗲𝗿 𝗥𝗲𝗹𝗲𝘃𝗮𝗻𝘁 𝗱𝗲𝘁𝗮𝗶𝗹𝘀 (𝑨𝑺𝑰𝑵, 𝑺𝑲𝑼, 𝒆𝒕𝒄): \n\n• 𝗘𝘅𝗽𝗲𝗿𝘁(𝘀) 𝗰𝗼𝗻𝘁𝗮𝗰𝘁𝗲𝗱 (𝒄𝒐𝒑𝒚/𝒑𝒂𝒔𝒕𝒆 𝒄𝒉𝒊𝒎𝒆 𝒄𝒉𝒂𝒕𝒔, 𝒆𝒎𝒂𝒊𝒍𝒔 𝒊𝒏𝒄𝒍𝒖𝒅𝒊𝒏𝒈 𝒉𝒆𝒂𝒅𝒆𝒓𝒔 𝒊𝒏 𝒔𝒆𝒑𝒂𝒓𝒂𝒕𝒆 𝒂𝒏𝒏𝒐𝒕𝒂𝒕𝒊𝒐𝒏): \n\n𝗡𝗲𝘅𝘁 𝘀𝘁𝗲𝗽𝘀 𝘀𝗲𝗰𝘁𝗶𝗼𝗻\n\n• 𝗥𝗲𝘀𝗼𝗹𝘂𝘁𝗶𝗼𝗻: \n• 𝗣𝗔𝗔 / 𝗣𝗠𝗔 𝗥𝗲𝗮𝘀𝗼𝗻: \n• 𝗙𝗼𝗹𝗹𝗼𝘄 𝗨𝗽 𝗦𝗲𝘁: 𝗬𝗲𝘀/𝗡𝗼 & 𝗪𝗵𝘆? \n• 𝗧𝗿𝗮𝗻𝘀𝗳𝗲𝗿 𝗥𝗲𝗮𝘀𝗼𝗻 (𝙄𝙛 𝙥𝙖𝙨𝙨𝙗𝙖𝙘𝙠, 𝙨𝙚𝙩 𝙨𝙩𝙖𝙩𝙪𝙨 𝙩𝙤 𝙒𝙤𝙧𝙠-𝙄𝙣-𝙋𝙧𝙤𝙜𝙧𝙚𝙨𝙨): \n• 𝗢𝘂𝘁𝗯𝗼𝘂𝗻𝗱 𝗖𝗮𝗹𝗹 𝗔𝘁𝘁𝗲𝗺𝗽𝘁? (𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍 / 𝑼𝒏𝒔𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍 /𝑶𝒖𝒕𝒔𝒊𝒅𝒆 𝒐𝒇 𝑩𝒖𝒔𝒊𝒏𝒆𝒔𝒔 𝒉𝒐𝒖𝒓𝒔 - 𝑰𝒇 𝒐𝒖𝒕𝒔𝒊𝒅𝒆 𝒐𝒇 𝒃𝒖𝒔𝒊𝒏𝒆𝒔𝒔 𝒉𝒐𝒖𝒓𝒔 𝒑𝒍𝒆𝒂𝒔𝒆 𝒂𝒏𝒏𝒐𝒕𝒂𝒕𝒆 𝒕𝒉𝒆 𝑺𝑷 𝒕𝒊𝒎𝒆): ";
});
// Add Button Event Handler - Remove text on clear click
clear.addEventListener ("click", function() {
  document.getElementById('annotationTextAreaannotationText').textContent ="";
});
