function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(way = "*") {
  return function (state = "special") {
    return `You are ${way}${state}${way}!`;
  };
}
