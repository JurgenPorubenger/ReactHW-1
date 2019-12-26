let s = {gridRowStart:1,gridRowEnd:5,gridColumnStart:3,gridColumnEnd:5};
s.name = function () {
    console.log(this.gridColumnEnd)
}
