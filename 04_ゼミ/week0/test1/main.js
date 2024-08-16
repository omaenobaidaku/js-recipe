var frame = document.getElementById("frame")
const buttons = document.getElementById("buttons")
var frame_children = frame.children
console.log(frame_children)
console.log(buttons.children)

for (var i = 0; i < frame_children.length; i++) {
  console.log(frame_children[i])
}
