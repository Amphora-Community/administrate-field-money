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
      console.log(this.input)
      if (this.value === null || this.value === "" || this.value === "$0.00"){
        var e = jQuery.Event("keyup");
        this.trigger(e);
      }

  };

  $('[data-maskmoney]').each(setupMaskMoney);
});