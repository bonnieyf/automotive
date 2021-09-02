$(document).ready(function () {
  $("input#fe4205").on("keyup", function () {
    ReturnOptin();
  });
  $("input#fe4205").on("change", function () {
    ReturnOptin();
  });

  // $(window).scroll(function () {
  //   let scrollY = $(window).scrollTop();

  //   if (scrollY > 70) {
  //     $("#btn-stick").addClass("btn-block-head");
  //   } else {
  //     $("#btn-stick").removeClass("btn-block-head");
  //   }
  // });

  jQuery.validator.addMethod(
    "domain",
    function (value, element) {
      return !value.match(
        /(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i
      );
    },
    "Value must not contain any URL's"
  );

  $("#form533").validate({
    rules: {
      first_name: {
        required: true,
        maxlength: 35,
      },
      last_name: {
        required: true,
        maxlength: 35,
      },
      company: {
        required: true,
        maxlength: 35,
        domain: true,
      },
      email: {
        required: true,
        maxlength: 35,
      },
      country: {
        required: true,
      },
      processdata: {
        required: true,
      },
    },
    messages: {
      first_name: {
        minlength: "Invalid length for field value",
        maxlength: "Invalid length for field value",
      },
      last_name: {
        minlength: "Invalid length for field value",
        maxlength: "Invalid length for field value",
      },
      company: {
        minlength: "Invalid length for field value",
        maxlength: "Invalid length for field value",
      },
    },
    submitHandler: function (form) {
      // $(".spinner").removeClass("visually-hidden");
      // $(".submit-text").addClass("visually-hidden");
      // $("#fe4218").attr("disabled", true);
      // console.log("valid form submitted !!");
      alert("hi");
      return false;
    },
    highlight: function (input) {
      $(input).addClass("is-invalid");
    },
    unhighlight: function (input) {
      $(input).removeClass("is-invalid");
    },
    errorPlacement: function (error, element) {
      $(element).next().append(error);
    },
  });
});

function ReturnOptin() {
  var email_addr = document.getElementById("fe4205").value;
  var DataLookupKey = escape("5518d6fdba414044a6a32c05d79894e8");
  var DataLookupString = "<C_EmailAddress>" + email_addr + "</C_EmailAddress>";
  var dt = new Date();
  var ms = dt.getMilliseconds();
  var SiteID = "179956068";
  var PPS = "50";
  var lookupScript =
    "https://secure.p06.eloqua.com/visitor/v200/svrGP?pps=50&siteid=179956068&DLKey=" +
    DataLookupKey +
    "&DLLookup=" +
    DataLookupString +
    "&ms=" +
    ms;
  $.getScript(lookupScript, function () {
    if (typeof GetElqContentPersonalizationValue != "undefined") {
      var lookup_optin = GetElqContentPersonalizationValue("C_Opt_In1");
      if (lookup_optin == "") {
        document.getElementById("fe4213").value = "0";
      } else {
        document.getElementById("fe4213").value = lookup_optin;
      }
    } else {
      document.getElementById("fe4213").value = "0";
    }
  });
}
