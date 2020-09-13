// returns the line segment length
export default function(ax, ay, bx, by) {
  let x = ax - bx, y = ay - by
  return Math.sqrt(x*x + y*y)
}