var timerId = null,
  timeout = 5;

function handleFormSubmit(ele) {
  var submitButton = ele.querySelector("input[type=submit]");
  var spinner = document.createElement("span");
  spinner.setAttribute("class", "loader");
  submitButton.setAttribute("disabled", true);
  submitButton.style.cursor = "wait";
  submitButton.parentNode.appendChild(spinner);
  return true;
}
function resetSubmitButton(e) {
  var submitButtons = e.target.form.getElementsByClassName("submit-button");
  for (var i = 0; i < submitButtons.length; i++) {
    submitButtons[i].disabled = false;
  }
}
function addChangeHandler(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("change", resetSubmitButton);
  }
}
var form = document.getElementById("form509");
addChangeHandler(form.getElementsByTagName("input"));
addChangeHandler(form.getElementsByTagName("select"));
addChangeHandler(form.getElementsByTagName("textarea"));
var nodes = document.querySelectorAll("#form509 input[data-subscription]");
if (nodes) {
  for (var i = 0, len = nodes.length; i < len; i++) {
    var status = nodes[i].dataset
      ? nodes[i].dataset.subscription
      : nodes[i].getAttribute("data-subscription");
    if (status === "true") {
      nodes[i].checked = true;
    }
  }
}
var nodes = document.querySelectorAll("#form509 select[data-value]");
if (nodes) {
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    var selectedValue = node.dataset
      ? node.dataset.value
      : node.getAttribute("data-value");
    if (selectedValue) {
      for (var j = 0; j < node.options.length; j++) {
        if (node.options[j].value === selectedValue) {
          node.options[j].selected = "selected";
          break;
        }
      }
    }
  }
}
this.getParentElement = function (list) {
  return list[list.length - 1].parentElement;
};
var dom0 = document.querySelector("#form509 #fe4203");
var fe4203 = new LiveValidation(dom0, {
  validMessage: "",
  onlyOnBlur: false,
  wait: 300,
});
fe4203.add(Validate.Presence, {
  failureMessage: "This field is required",
});
var dom1 = document.querySelector("#form509 #fe4204");
var fe4204 = new LiveValidation(dom1, {
  validMessage: "",
  onlyOnBlur: false,
  wait: 300,
});
fe4204.add(Validate.Presence, {
  failureMessage: "This field is required",
});
var dom2 = document.querySelector("#form509 #fe4205");
var fe4205 = new LiveValidation(dom2, {
  validMessage: "",
  onlyOnBlur: false,
  wait: 300,
});
fe4205.add(Validate.Format, {
  pattern: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i,
  failureMessage: "A valid email address is required",
});
fe4205.add(Validate.Presence, {
  failureMessage: "This field is required",
});
var dom3 = document.querySelector("#form509 #fe4207");
var fe4207 = new LiveValidation(dom3, {
  validMessage: "",
  onlyOnBlur: false,
  wait: 300,
});
fe4207.add(Validate.Presence, {
  failureMessage: "This field is required",
});
fe4207.add(Validate.Length, {
  tooShortMessage: "Invalid length for field value",
  tooLongMessage: "Invalid length for field value",
  minimum: 0,
  maximum: 35,
});
fe4207.add(Validate.Custom, {
  against: function (value) {
    return !value.match(
      /(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i
    );
  },
  failureMessage: "Value must not contain any URL's",
});
var dom4 = document.querySelector("#form509 #fe4209");
var fe4209 = new LiveValidation(dom4, {
  validMessage: "",
  onlyOnBlur: false,
  wait: 300,
});
fe4209.add(Validate.Presence, {
  failureMessage: "This field is required",
});
var dom5 = document.querySelector("#form509 #fe4211");
var fe4211 = new LiveValidation(dom5, {
  validMessage: "",
  onlyOnBlur: false,
  wait: 300,
});
var dom6 = document.querySelector("#form509 #fe4212");
var fe4212 = new LiveValidation(dom6, {
  validMessage: "",
  onlyOnBlur: false,
  wait: 300,
});

$(document).ready(function () {
  $("input#fe4205").on("keyup", function () {
    ReturnOptin();
  });
  $("input#fe4205").on("change", function () {
    ReturnOptin();
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

var pathArray = window.location.pathname.split("/");
var secondLevelLocation = pathArray[pathArray.length - 1];
if (secondLevelLocation === "")
  secondLevelLocation = pathArray[pathArray.length - 2];
var PM_UC = secondLevelLocation.toUpperCase();
document.getElementById("field20").value = PM_UC;
