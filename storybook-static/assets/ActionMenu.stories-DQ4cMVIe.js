import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./iframe-CximP2yJ.js";import{D as n,E as r,P as i,T as a,k as o,t as s,z as c}from"./exports-Dq5Z-bK0.js";import{B as l,H as u,W as d,f,g as p,t as m,u as h,ut as g,w as _}from"./lucide-react-D3bSSQyV.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M=e((()=>{v=`_wrapper_1l80k_2`,y=`_trigger_1l80k_8`,b=`_panel_1l80k_14`,x=`_menuIn_1l80k_1`,S=`_menuOut_1l80k_1`,C=`_menuList_1l80k_43`,w=`_item_1l80k_49`,T=`_itemFocused_1l80k_69`,E=`_itemIcon_1l80k_79`,D=`_itemLabel_1l80k_87`,O=`_itemDanger_1l80k_96`,k=`_itemDisabled_1l80k_109`,A=`_divider_1l80k_119`,j={wrapper:v,trigger:y,panel:b,menuIn:x,menuOut:S,menuList:C,item:w,itemFocused:T,itemIcon:E,itemLabel:D,itemDanger:O,itemDisabled:k,divider:A}}));function N({icon:e,label:t,onClick:n,disabled:i=!1,variant:a=`default`}){return(0,F.jsxs)(r,{onAction:i?void 0:n,isDisabled:i,className:({isDisabled:e,isFocused:t})=>[j.item,a===`danger`?j.itemDanger:``,e?j.itemDisabled:``,t?j.itemFocused:``].filter(Boolean).join(` `),children:[e&&(0,F.jsx)(`span`,{className:j.itemIcon,children:e}),(0,F.jsx)(`span`,{className:j.itemLabel,children:t})]})}function P({trigger:e,items:t,align:r=`left`,className:s}){return(0,F.jsx)(`div`,{className:[j.wrapper,s].filter(Boolean).join(` `),children:(0,F.jsxs)(a,{children:[(0,F.jsx)(c,{className:j.trigger,children:e}),(0,F.jsx)(o,{placement:r===`right`?`bottom end`:`bottom start`,className:j.panel,children:(0,F.jsx)(n,{className:j.menuList,children:t.map((e,t)=>(0,F.jsxs)(`div`,{children:[e.dividerAbove&&(0,F.jsx)(i,{className:j.divider}),(0,F.jsx)(N,{icon:e.icon,label:e.label,onClick:e.onClick,disabled:e.disabled,variant:e.variant})]},t))})})]})})}var F,I=e((()=>{s(),M(),F=t(),N.__docgenInfo={description:``,methods:[],displayName:`ActionMenuItem`,props:{icon:{required:!1,tsType:{name:`ReactNode`},description:``},label:{required:!0,tsType:{name:`string`},description:``},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'danger'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'danger'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}}}},P.__docgenInfo={description:``,methods:[],displayName:`ActionMenu`,props:{trigger:{required:!0,tsType:{name:`ReactNode`},description:``},items:{required:!0,tsType:{name:`Array`,elements:[{name:`ActionMenuItemDef`}],raw:`ActionMenuItemDef[]`},description:``},align:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:``,defaultValue:{value:`'left'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),L,R,z,B,V,H,U,W,G;e((()=>{m(),I(),L=t(),R={title:`Components/ActionMenu`,component:P,parameters:{layout:`centered`,docs:{description:{component:`A dropdown menu triggered by any custom element. Supports icons, danger items, dividers, disabled items, and left/right alignment.`}}}},z=()=>(0,L.jsx)(`button`,{type:`button`,style:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,width:32,height:32,borderRadius:6,border:`1px solid #748FA1`,background:`transparent`,cursor:`pointer`,color:`#36454F`},"aria-label":`Open menu`,children:(0,L.jsx)(l,{size:16})}),B={render:()=>(0,L.jsx)(P,{trigger:(0,L.jsx)(z,{}),items:[{label:`Edit`},{label:`Duplicate`},{label:`Archive`},{label:`Delete`}]})},V={name:`With icons`,render:()=>(0,L.jsx)(P,{trigger:(0,L.jsx)(z,{}),items:[{icon:(0,L.jsx)(_,{size:14}),label:`Edit`},{icon:(0,L.jsx)(d,{size:14}),label:`Duplicate`},{icon:(0,L.jsx)(u,{size:14}),label:`Download`},{icon:(0,L.jsx)(p,{size:14}),label:`Share`},{icon:(0,L.jsx)(g,{size:14}),label:`Archive`}]})},H={name:`With danger item`,render:()=>(0,L.jsx)(P,{trigger:(0,L.jsx)(z,{}),items:[{icon:(0,L.jsx)(_,{size:14}),label:`Edit`},{icon:(0,L.jsx)(d,{size:14}),label:`Duplicate`},{icon:(0,L.jsx)(f,{size:14}),label:`Mark as favourite`},{icon:(0,L.jsx)(h,{size:14}),label:`Delete`,variant:`danger`,dividerAbove:!0}]})},U={name:`With disabled item`,render:()=>(0,L.jsx)(P,{trigger:(0,L.jsx)(z,{}),items:[{icon:(0,L.jsx)(_,{size:14}),label:`Edit`},{icon:(0,L.jsx)(u,{size:14}),label:`Export (unavailable)`,disabled:!0},{icon:(0,L.jsx)(p,{size:14}),label:`Share`},{icon:(0,L.jsx)(h,{size:14}),label:`Delete`,variant:`danger`,dividerAbove:!0}]})},W={name:`Aligned right`,render:()=>(0,L.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,width:300},children:(0,L.jsx)(P,{align:`right`,trigger:(0,L.jsx)(z,{}),items:[{icon:(0,L.jsx)(_,{size:14}),label:`Edit`},{icon:(0,L.jsx)(d,{size:14}),label:`Duplicate`},{icon:(0,L.jsx)(g,{size:14}),label:`Archive`},{icon:(0,L.jsx)(h,{size:14}),label:`Delete`,variant:`danger`,dividerAbove:!0}]})})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <ActionMenu trigger={<EllipsisButton />} items={[{
    label: 'Edit'
  }, {
    label: 'Duplicate'
  }, {
    label: 'Archive'
  }, {
    label: 'Delete'
  }]} />
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'With icons',
  render: () => <ActionMenu trigger={<EllipsisButton />} items={[{
    icon: <Edit2 size={14} />,
    label: 'Edit'
  }, {
    icon: <Copy size={14} />,
    label: 'Duplicate'
  }, {
    icon: <Download size={14} />,
    label: 'Download'
  }, {
    icon: <Share2 size={14} />,
    label: 'Share'
  }, {
    icon: <Archive size={14} />,
    label: 'Archive'
  }]} />
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'With danger item',
  render: () => <ActionMenu trigger={<EllipsisButton />} items={[{
    icon: <Edit2 size={14} />,
    label: 'Edit'
  }, {
    icon: <Copy size={14} />,
    label: 'Duplicate'
  }, {
    icon: <Star size={14} />,
    label: 'Mark as favourite'
  }, {
    icon: <Trash2 size={14} />,
    label: 'Delete',
    variant: 'danger',
    dividerAbove: true
  }]} />
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'With disabled item',
  render: () => <ActionMenu trigger={<EllipsisButton />} items={[{
    icon: <Edit2 size={14} />,
    label: 'Edit'
  }, {
    icon: <Download size={14} />,
    label: 'Export (unavailable)',
    disabled: true
  }, {
    icon: <Share2 size={14} />,
    label: 'Share'
  }, {
    icon: <Trash2 size={14} />,
    label: 'Delete',
    variant: 'danger',
    dividerAbove: true
  }]} />
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Aligned right',
  render: () => <div style={{
    display: 'flex',
    justifyContent: 'flex-end',
    width: 300
  }}>
      <ActionMenu align="right" trigger={<EllipsisButton />} items={[{
      icon: <Edit2 size={14} />,
      label: 'Edit'
    }, {
      icon: <Copy size={14} />,
      label: 'Duplicate'
    }, {
      icon: <Archive size={14} />,
      label: 'Archive'
    }, {
      icon: <Trash2 size={14} />,
      label: 'Delete',
      variant: 'danger',
      dividerAbove: true
    }]} />
    </div>
}`,...W.parameters?.docs?.source}}},G=[`Default`,`WithIcons`,`WithDangerItem`,`WithDisabledItem`,`AlignedRight`]}))();export{W as AlignedRight,B as Default,H as WithDangerItem,U as WithDisabledItem,V as WithIcons,G as __namedExportsOrder,R as default};