// ==UserScript==
// @name         Twitch Autoclick
// @match        https://www.twitch.tv/*
// ==/UserScript==

let checked = false;

(function() {
  setInterval(() => {
    let button1 = document.querySelector("div.claimable-bonus__icon");
    if (button1) {
      button1.click();
      console.log('channel points');
    }
    let button2 = document.querySelector("button[data-a-target='side-nav-show-more-button']");
    if (button2) {
      button2.click();
      console.log('expand following list');
    }
    let button3 = document.querySelector("div.boqpkL.kiLhh.tw-modal > div.knuzxD > div.hDxAnf > button.cAjrcA");
    if (button3) {
      button3.click();
      console.log('bypass twitch censoring');
    }
    // let button4 = document.querySelector("div.ReactModalPortal > div.ReactModal__Overlay.ReactModal__Overlay--after-open.modal__backdrop.js-modal-backdrop > div.ReactModal__Content.ReactModal__Content--after-open.modal__content > div.bjPIuI.modal-wrapper__backdrop.modal-wrapper__backdrop--info > div.hEzALl.modal-wrapper__content.modal-wrapper__content--info > div.ScModalWrapper-sc-1k48se-0.irlvFX.SCFFx.tw-modal > div.jPmKIH > div.jvXfsm > div.modal__close-button > button.ScCoreButton-sc-ocjdkq-0.fYnRik.ScButtonIcon-sc-9yap0r-0.dOOPAe");
    // if (button4) {
    //   button4.click();
    //   console.log('complain about twitch censoring');
    // }
    let button5 = document.querySelector("button.iPkwTD.dcNXJO[aria-label^='Captions']:has(> div.lnTwMD > div.kjQOIz > div.jgpfbi > svg.kXuCmW > path):not(:has(> div.lnTwMD > div.jgpfbi > div.kjQOIz > svg.kXuCmW > g > path))");
    if (button5) {
      button5.click();
      console.log('disable captions');
    }
    // let button6 = document.querySelector("div.ekYTef > div.gIraVA.chat-input-tray__open > div:has(> div.common-tray-body > div.dkelyH):has(> div.gYkXeo > div.iYIJSn > strong.bGvnuL) > div.gYkXeo > button.iPkwTD.dcNXJO");
    // if (button6) {
    //   button6.click();
    //   console.log('close chat injection');
    // }
    let button7 = document.querySelector("div.cEllaX > div > div.scrollable-area.community-highlight-stack__scroll-area--disable.community-highlight-stack__scroll-content--disable > div.Akwmp > div.lkDtpE.tw-transition > div.community-highlight-stack__card > div.cpWPwm.tw-transition-group > div.lkDtpE.tw-transition > div.jubumC.community-highlight > div.ircmYD > div > div.highlight__click-target > div.gwQEvr.highlight.highlight__collapsed > div.cCaZpv:has(> div.dtSdDz.highlight__header > div.bKvgvG[aria-label='Get cred when you share a viral clip']) > div.iUFOZe > button.lhAOjJ.bYQKLq[aria-label='Expand']");
    if (button7) {
      button7.click();
      console.log('expand viral clip nagger');
    }
    let button8 = document.querySelector("div.cEllaX > div.kjWTWh > div.scrollable-area.community-highlight-stack__scroll-area--disable.community-highlight-stack__scroll-content--disable > div.Akwmp > div.lkDtpE.tw-transition > div.community-highlight-stack__card > div.NjUUT.cpWPwm.tw-transition-group > div.lkDtpE.tw-transition > div.jubumC.community-highlight > div.ircmYD > div > div.highlight__click-target > div.gwQEvr.highlight:has(> div.cCaZpv > div.dtSdDz.highlight__header > div.bKvgvG[aria-label='Get cred when you share a viral clip']) > div.imbKZa.tw-transition > div > div.faiNzz > div.cqFbva > div.cexlzi > div.eGTAlE > div.epRulB > div.AoXTY.gmlKs.tw-checkbox > label.fKHFsE.gBIYMt.tw-checkbox__label > div.lmaTtG > p.CoreText-sc-1txzju1-0.gXJNtm");
    if (button8 && !checked) {
      button8.click();
      console.log('don\'t show clip nagger again');
      checked = true;
    }
    let button9 = document.querySelector("div.cEllaX > div.kjWTWh > div.scrollable-area.community-highlight-stack__scroll-area--disable.community-highlight-stack__scroll-content--disable > div.Akwmp > div.lkDtpE.tw-transition > div.community-highlight-stack__card > div.NjUUT.cpWPwm.tw-transition-group > div.lkDtpE.tw-transition > div.jubumC.community-highlight > div.ircmYD > div > div.highlight__click-target > div.gwQEvr.highlight:has(> div.cCaZpv > div.dtSdDz.highlight__header > div.bKvgvG[aria-label='Get cred when you share a viral clip']) > div.imbKZa.tw-transition > div > div.faiNzz > div.cqFbva > div.cexlzi > div.eGTAlE > div.epRulB > div.epRulB > button.eoyBQj > div.kaIUar > div.bLZXTb > p.CoreText-sc-1txzju1-0.gXJNtm");
    if (button9) {
      button9.click();
      console.log('dismiss clip nagger');
    }
    let span10 = document.querySelector("div > div.hOlFJ > div.fSfyIg > div.bTkUWo > div > div.hDlHnO > div.ozBVK.chat-private-callout__header-segment > div > span.klMfey");
    if (span10 && span10.innerText === 'Keep watching this stream to save your Streak!') {
      let button10 = document.querySelector("div > div.hOlFJ > div.fSfyIg > div.bTkUWo > div > div.hDlHnO > div.ozBVK.chat-private-callout__header-segment > div.doBHR > div.jfyitl > button.iwMIba[aria-label='Close']");
      if (button10) {
        button10.click();
        console.log('dismiss watch streak nagger');
      }
    }
    let button11 = document.querySelector("div:has(> div.hOlFJ.tw-transition > div.fSfyIg > div.bTkUWo > div > div.hDlHnO > div.gYZUoi.chat-private-callout__icon > div.btRJVu.reward-icon.reward-icon--extra-small > div.ihSefD.reward-icon__image.reward-icon__image--extra-small > div.AoXTY > img):has(> div.hOlFJ.tw-transition > div.fSfyIg > div.bTkUWo > div > div.hDlHnO > div.ozBVK.chat-private-callout__header-segment > div > span.klMfey > div > div.buczjK > div.fGzbCC):has(> div.hOlFJ.tw-transition > div.fSfyIg > div.bTkUWo > div > div.hDlHnO > div.kvrzxX.chat-private-callout__header-segment > div.hOPRsN > div.jfyitl > button > div > div):has(> div.hOlFJ.tw-transition > div.fSfyIg > div.bTkUWo > div > div.cexlzi > div.jfyitl > div.loPPQD.eVfydX.tw-progress-bar > div.cireTk) > div.hOlFJ.tw-transition > div.fSfyIg > div.bTkUWo > div > div.hDlHnO > div.kvrzxX.chat-private-callout__header-segment > div.doBHR > div.jfyitl > button[aria-label='Close']:has(> div.kVXKNj > div.kccyMt.tw-svg > svg > path)");
    if (button11) {
      button11.click();
      console.log('dismiss channel point nagger');
    }
    let button12 = document.querySelector("div > div.hOlFJ.tw-transition > div > div.bTkUWo > div:has(> div.hDlHnO > div.ozBVK.chat-private-callout__header-segment > div > span.klMfey):has(> div.hDlHnO > div.kvrzxX.chat-private-callout__header-segment > div > div.jfyitl.cIQTKJ > button.evvsZQ.iwMIba > div.kVXKNj > div.kccyMt.tw-svg > svg > path):has(> div.cexlzi > div.jfyitl.cIQTKJ > div.loPPQD.eVfydX.tw-progress-bar > div) > div.hDlHnO > div.kvrzxX.chat-private-callout__header-segment > div.hOPRsN > div.jfyitl.cIQTKJ > button[aria-label='Close']:has(> div.kaIUar > div)");
    if (button12) {
      button12.click();
      console.log('close chat injection');
    }
    let strong13 = document.querySelector("div.iGRgSf.tw-transition > div > div.cMeiZH > div.cMeiZH > div.gGBpkX > div.cpWPwm.tw-transition-group > div.tw-transition > div.eSKdYr > div.gGBpkX > div.iSIERH > div.dewBQX > div.htypow > button.iCUBCA.blixHj.tw-interactable > div.dKLdbi > div > div.ienLGl > strong.gVZUva");
    if (strong13 && strong13.innerText.includes('gifts until badge upgrade!')) {
      let button13 = document.querySelector("div.iGRgSf.tw-transition > div > div.cMeiZH > div.cMeiZH > div.gGBpkX > div.cpWPwm.tw-transition-group > div.tw-transition > div.eSKdYr > div.gGBpkX > div.iSIERH > div.dewBQX > div.htypow > button.glPhvE.dgVYJo[aria-label='Next leaderboard set']");
      if (button13) {
        button13.click();
        console.log('click off sub gift badge nagger');
      }
    }
  }, 1000);
})();