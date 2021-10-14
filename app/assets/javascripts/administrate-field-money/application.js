//= require jquery.maskMoney.min

$(function() {
  var getUnmaskedMoneyCents,
      updateSiblingHiddenFieldValueOf,
      syncUnmaskedValueWithHiddenField,
      $applyMaskMoneyTo,
      setupMaskMoney,
      EVENTS_TO_SYNC = 'change keyup paste ready show';

  getUnmaskedMoneyCents = function($el) {
    return $el.maskMoney('unmasked')[0];
  };

  updateSiblingHiddenFieldValueOf = function($el, getNewValue) {
    $el.siblings('[type="hidden"]').val(
      getNewValue($el)
    );
  };

  syncUnmaskedValueWithHiddenField = function() {
    updateSiblingHiddenFieldValueOf($(this), getUnmaskedMoneyCents);
    console.log("Called here <<<<<<<<<<<<")
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

      console.log(this.value)
      if (this.value === null || this.value === "" || this.value === "$0.00"){
        this.trigger(jQuery.Event('keypress', {keyCode: 87, which: 13}));
      }

  };

  $('[data-maskmoney]').each(setupMaskMoney);
});