import * as React from "react";

function IconCurrencyDogecoin({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-currency-dogecoin" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 12h6" /><path d="M8 5v14" /><path d="M5 19h7a7 7 0 0 0 0 -14h-7" /></svg>;
}

export default IconCurrencyDogecoin;