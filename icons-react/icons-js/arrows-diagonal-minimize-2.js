import * as React from "react";

function IconArrowsDiagonalMinimize2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-arrows-diagonal-minimize-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 10h-4v-4" /><path d="M20 4l-6 6" /><path d="M6 14h4v4" /><path d="M10 14l-6 6" /></svg>;
}

export default IconArrowsDiagonalMinimize2;