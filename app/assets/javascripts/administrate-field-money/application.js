//= require jquery.maskMoney.min

$(function() {
  var getUnmaskedMoneyCents,
      updateSiblingHiddenFieldValueOf,
      syncUnmaskedValueWithHiddenField,
      $applyMaskMoneyTo,
      setupMaskMoney,
      EVENTS_TO_SYNC = 'change keyup paste';

  getUnmaskedMoneyCents = function($el) {
    var unmasked = $el.maskMoney("unmasked")[0];

    return unmasked ? unmasked : 0;
  };

  updateSiblingHiddenFieldValueOf = function($el, getNewValue) {
    $el.siblings('[type="hidden"]').val(
      getNewValue($el)
    );
  };

  syncUnmaskedValueWithHiddenField = function() {
    updateSiblingHiddenFieldValueOf($(this), getUnmaskedMoneyCents);
  };

  $applyMaskMoneyTo = function(el) {
    return $(el).maskMoney().trigger('mask');
  };

  setupMaskMoney = function() {
    $applyMaskMoneyTo(this)
      .on(
        EVENTS_TO_SYNC,
        syncUnmaskedValueWithHiddenField
      );
  };

  $('[data-maskmoney]').each(setupMaskMoney);
  console.log("Are we in function <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
});
