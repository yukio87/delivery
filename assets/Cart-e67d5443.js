import{j as t,u as c,c as d,f as m,L as o,o as u}from"./index-b4e6f14f.js";import{U as k,D as x}from"./UpdateItemQuantity-fc31ef3c.js";import{E as _}from"./EmptyCart-36ec6e44.js";import{u as j}from"./useDispatch-20e81808.js";const p="_item_12tk1_1",h="_buttonContainer_12tk1_21",l={item:p,buttonContainer:h};function C({item:i}){const{drinkId:n,name:e,quantity:s,totalPrice:r}=i;return t.jsxs("li",{className:l.item,children:[t.jsxs("p",{children:[s,"× ",e]}),t.jsxs("div",{className:l.buttonContainer,children:[t.jsxs("span",{children:[r,"₽"]}),t.jsx(k,{drinkId:n,quantity:s}),t.jsx(x,{drinkId:n})]})]})}const y="_container_1y1wp_31",f="_linkBack_1y1wp_34",b="_linkOrder_1y1wp_53",N="_button_1y1wp_83",a={container:y,linkBack:f,linkOrder:b,button:N};function O(){const i=j(),n=c(d),e=c(m);function s(){i(u())}return e.length?t.jsxs("div",{className:a.container,children:[t.jsx(o,{to:"/delivery/menu",className:a.linkBack,children:"← Back to menu"}),t.jsxs("h2",{children:["Your cart, ",n]}),t.jsx("ul",{children:e.map(r=>t.jsx(C,{item:r},r.drinkId))}),t.jsxs("div",{children:[t.jsx(o,{className:a.linkOrder,to:"/delivery/order/new",children:"Order drinks"}),t.jsx("button",{onClick:s,className:a.button,children:"Clear cart"})]})]}):t.jsx(_,{})}export{O as default};
