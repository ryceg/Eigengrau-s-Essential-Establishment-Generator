setup.profile = function(char, descriptor) {
  var readout = descriptor || char.name;
  var id =
    "tip-" +
    Util.slugify(char.id) +
    "-" +
    Math.floor(Math.random() * 0x10000).toString(16);
  // \<<capture _char>>
  var test =
    "<span @id=" +
    id +
    'class="tip"><<link ' +
    readout +
    '"NPCProfile">><<set $currentNPC to ' +
    char +
    ">><</link>></span>";
  console.log(test);
  setup.profileTooltip(id, char);
  setup.tippy(".btn");
  return test;
};
