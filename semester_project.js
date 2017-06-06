

var render = function()
{
  var pagehtml = ejs.render(document.querySelector("#template").innerHTML, data);
  document.querySelector("#stuff").innerHTML = pagehtml;

  document.querySelectorAll(".states-names li").forEach(function(stateClick, index)
  {
    stateClick.addEventListener("click", function()
    {
      data.selectedState = index;
      render();
    })
  })

  document.querySelector(".js-alpha").addEventListener("click", function()
  {
    data.states.sort(alphaOrder);
    data.selectedState = null;
    render();
  })

  document.querySelector(".js-ascend").addEventListener("click", function()
  {
    data.states.sort(ascendingOrder);
    data.selectedState = null;
    render();
  })

  document.querySelector(".js-descend").addEventListener("click", function()
  {
    data.states.sort(descendingOrder);
    data.selectedState = null;
    render();
  })

  document.querySelector(".js-statehood").addEventListener("click", function()
  {
    data.states.sort(statehoodOrder);
    data.selectedState = null;
    render();
  })
}
render();

var ascendingOrder = function(a, b)
{
  return a.area - b.area;
}

var descendingOrder = function(a, b)
{
  return b.area - a.area;
}

var alphaOrder = function(a, b)
{
  if (a.name < b.name)
  {
    return -1;
  }
  else
  {
    return 1;
  }
}

var statehoodOrder = function(a, b)
{
  return a.order - b.order;
}
