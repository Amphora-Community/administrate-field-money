//= require jquery.maskMoney.min

$(function() {
  var getUnmaskedMoneyCents,
      updateSiblingHiddenFieldValueOf,
      syncUnmaskedValueWithHiddenField,
      $applyMaskMoneyTo,
      setupMaskMoney,
      EVENTS_TO_SYNC = 'change keyup paste';

  getUnmaskedMoneyCents = function($el) {

    console.log("getUnmaskedMoneyCents")
    var unmasked = $el.maskMoney("unmasked")[0];

    return unmasked ? unmasked : 0;
  };

  updateSiblingHiddenFieldValueOf = function($el, getNewValue) {
    console.log("updateSiblingHiddenFieldValueOf")
    $el.siblings('[type="hidden"]').val(
      getNewValue($el)
    );
  };

  syncUnmaskedValueWithHiddenField = function() {
    console.log("syncUnmaskedValueWithHiddenField")
    updateSiblingHiddenFieldValueOf($(this), getUnmaskedMoneyCents);
  };

  $applyMaskMoneyTo = function(el) {
    console.log("applyMaskMoneyTo")
    return $(el).maskMoney().trigger('mask');
  };

  setupMaskMoney = function() {
    console.log("setupMaskMoney ")
    $applyMaskMoneyTo(this)
      .on(
        EVENTS_TO_SYNC,
        syncUnmaskedValueWithHiddenField
      );
  };

  $('[data-maskmoney]').each(setupMaskMoney);
  console.log("main function <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
});
