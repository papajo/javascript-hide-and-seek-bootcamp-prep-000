function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const elst = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < elst.length; i++) {
    //debugger
    for (let j = 0; j < elst[i].children.length; j++) {
        var tempLi = elst[i].children
        tempLi[j].innerHTML = (parseInt(tempLi[j].innerHTML) + n).toString();
    }
  }
}

function deepestChild() {
  /* Define a function deepestChild() that pulls out 
  the most deeply nested child element 
  from div#grand-node. */
  debugger
  const temArray = document.querySelector('grand-node')
}