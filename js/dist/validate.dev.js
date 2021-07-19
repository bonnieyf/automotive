"use strict";

$(document).ready(function () {
  $("input#fe4205").on("keyup", function () {
    ReturnOptin();
  });
  $("input#fe4205").on("change", function () {
    ReturnOptin();
  });
  $(window).scroll(function () {
    var scrollY = $(window).scrollTop();

    if (scrollY > 70) {
      $("#btn-stick").addClass("btn-block-head");
    } else {
      $("#btn-stick").removeClass("btn-block-head");
    }
  });
  $("#form509").validate({
    rules: {
      first_name: {
        required: true,
        minlength: 2
      },
      last_name: {
        required: true,
        minlength: 2
      },
      company: {
        required: true,
        minlength: 2
      },
      email: {
        required: true
      },
      country: {
        required: true
      }
    },
    messages: {
      first_name: {
        minlength: "Must be at least 2 characters"
      },
      last_name: {
        minlength: "Must be at least 2 characters"
      },
      company: {
        minlength: "Must be at least 2 characters"
      }
    },
    submitHandler: function submitHandler(form) {
      $(".spinner").removeClass("visually-hidden");
      $(".submit-text").addClass("visually-hidden");
      $("#fe4218").attr("disabled", true);
      console.log("valid form submitted !!");
      return true;
    },
    highlight: function highlight(input) {
      $(input).addClass("is-invalid");
    },
    unhighlight: function unhighlight(input) {
      $(input).removeClass("is-invalid");
    },
    errorPlacement: function errorPlacement(error, element) {
      $(element).next().append(error);
    }
  });
});

function ReturnOptin() {
  var email_addr = document.getElementById("fe4205").value;
  var DataLookupKey = escape("5518d6fdba414044a6a32c05d79894e8");
  var DataLookupString = "<C_EmailAddress>" + email_addr + "</C_EmailAddress>";
  var dt = new Date();
  var ms = dt.getMilliseconds();
  var lookupScript = "https://secure.p06.eloqua.com/visitor/v200/svrGP?pps=50&siteid=179956068&DLKey=" + DataLookupKey + "&DLLookup=" + DataLookupString + "&ms=" + ms;
  $.getScript(lookupScript, function () {
    var de4213 = document.getElementById("fe4213");

    if (typeof GetElqContentPersonalizationValue != "undefined") {
      var lookup_optin = GetElqContentPersonalizationValue("C_Opt_In1");

      if (lookup_optin == "") {
        de4213.value = "0";
      } else {
        de4213.value = lookup_optin;
      }
    } else {
      de4213.value = "0";
    }

    console.log("get:", de4213.value);
  });
}