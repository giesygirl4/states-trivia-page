
// primary function which renders all data to the page
var render = function()
{
  var pagehtml = ejs.render(document.querySelector("#template").innerHTML, data);
  document.querySelector("#stuff").innerHTML = pagehtml;

  document.querySelectorAll(".states-names li").forEach(function(stateClick, index)
  { //for each line item event listner for click
    stateClick.addEventListener("click", function()
    {
      data.selectedState = index;
      render();
    })
  })

// event listner for the button to sort the states in alpha order
  document.querySelector(".js-alpha").addEventListener("click", function()
  {
    data.states.sort(alphaOrder);
    data.selectedState = null;
    render();
  })

// event listner for the button to sort the states in assending order by size
  document.querySelector(".js-ascend").addEventListener("click", function()
  {
    data.states.sort(ascendingOrder);
    data.selectedState = null;
    render();
  })

// event listner for the button to sort the states in descening order by size
  document.querySelector(".js-descend").addEventListener("click", function()
  {
    data.states.sort(descendingOrder);
    data.selectedState = null;
    render();
  })

// event listner for the button to sort the states in chronological order by statehood
  document.querySelector(".js-statehood").addEventListener("click", function()
  {
    data.states.sort(statehoodOrder);
    data.selectedState = null;
    render();
  })
}
render();

// function to accomplish the ascending order sort
var ascendingOrder = function(a, b)
{
  return a.area - b.area;
}

// function to accomplish the descending order sort
var descendingOrder = function(a, b)
{
  return b.area - a.area;
}

// function to accomplish the alpha order sort
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

// function to accomplish the statehood order sort
var statehoodOrder = function(a, b)
{
  return a.order - b.order;
}
