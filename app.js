const scrollerInner = document.querySelector(".scroller-inner")
const scrollerContent = Array.from(scrollerInner.children)

scrollerContent.map((item)=>{
    const duplicateItem = item.cloneNode(true)
    duplicateItem.setAttribute("area-hidden", true)
    // duplicateItem.setAttribute("class", "r")
    scrollerInner.appendChild(duplicateItem)
})