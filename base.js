const $ = (prop, all) => {
  if(!all)
    return document.querySelector(prop);
  else
    return document.querySelectorAll(prop);
}
function animateElement(element, animation){
  $(element).style.animation = animation;
  $(element).style.animationFillMode = "forwards";
}
function cssVar(Var, Val){
  $(":root").style.setProperty(Var, Val);
}
