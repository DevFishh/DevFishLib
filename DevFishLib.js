/*
    DevFish Library by DevFish
    v1.0
*/

class DFL{
    getElem(e){
        return document.querySelector(e)
    }

    vanish(e){
        this.getElem(e).style.display = "none"
    }

    unvanish(e){
        this.getElem(e).style.display = "block"
    }

    invis(e){
        this.getElem(e).style.visibility = "hidden"
    }

    vis(e){
        this.getElem(e).style.visibility = "visible"
    }

    kill(e){
        this.getElem(e).remove()
    }

    innerText(e, text){
        this.getElem(e).innerText = text
    }

    aClass(e, classname){
        this.getElem(e).classList.add(classname)
    }

    rClass(e, classname){
        this.getElem(e).classList.remove(classname)
    }

    aAttribute(e, attribute){
        this.getElem(e).setAttribute(attribute)
    }

    rAttribute(e, attribute){
        this.getElem(e).removeAttribute(attribute)
    }

    aEvent(e, event, func){
        this.getElem(e).addEventListener(event, func)
    }
}
DFL = new DFL
console.log("%c🐟Loaded DevFishLIB | v1.0","width: fit-content; padding: .5em; padding-right: 5em; background: #1E1E1E; border-left: .5em solid #FF00FF; color: #FF00FF; font-family: 'Segoe UI Black'; cursor: default")
