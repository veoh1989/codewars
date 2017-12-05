var name = " ";

var abbrevName = function(name) {
  var parts = name.split(" ");
  var initials = "";
  for (var i = 0; i < parts.length; i++) {
    if (parts[i].length > 0 && parts[i] !== "") {
      initials += parts[i][0];
    }
  }
  return initials[0].toUpperCase() + "." + initials[1].toUpperCase();
};