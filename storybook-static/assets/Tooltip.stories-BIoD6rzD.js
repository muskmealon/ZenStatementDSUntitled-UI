import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./iframe-CximP2yJ.js";import{n,r,t as i}from"./exports-Dq5Z-bK0.js";var a,o,s,c,l,u,d,f,p,m,h=e((()=>{a=`_wrapper_w8ovl_2`,o=`_tooltip_w8ovl_9`,s=`_tooltipIn_w8ovl_1`,c=`_tooltipOut_w8ovl_1`,l=`_visible_w8ovl_46`,u=`_top_w8ovl_51`,d=`_bottom_w8ovl_51`,f=`_left_w8ovl_51`,p=`_right_w8ovl_51`,m={wrapper:a,tooltip:o,tooltipIn:s,tooltipOut:c,visible:l,top:u,bottom:d,left:f,right:p}}));function g({content:e,children:t,placement:i=`top`,delay:a=300,disabled:o=!1}){return(0,_.jsxs)(r,{delay:a,isDisabled:o,children:[(0,_.jsx)(`span`,{className:m.wrapper,children:t}),(0,_.jsx)(n,{placement:i,className:[m.tooltip,m[i],m.visible].join(` `),offset:10,children:e})]})}var _,v=e((()=>{i(),h(),_=t(),g.__docgenInfo={description:``,methods:[],displayName:`Tooltip`,props:{content:{required:!0,tsType:{name:`ReactNode`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},placement:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom' | 'left' | 'right'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:``,defaultValue:{value:`'top'`,computed:!1}},delay:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`300`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})),y,b,x,S,C,w,T,E,D,O,k;e((()=>{v(),y=t(),b={title:`Components/Tooltip`,component:g,parameters:{layout:`centered`,docs:{description:{component:`Contextual tooltip shown on hover or focus. Supports four placements with an arrow indicator and configurable delay.`}}},argTypes:{placement:{control:`select`,options:[`top`,`bottom`,`left`,`right`]},delay:{control:`number`},disabled:{control:`boolean`},content:{control:`text`}},args:{content:`This is a tooltip`,placement:`top`,delay:300,disabled:!1}},x=({label:e})=>(0,y.jsx)(`button`,{type:`button`,style:{padding:`8px 20px`,borderRadius:`6px`,border:`1px solid #748FA1`,cursor:`pointer`,fontFamily:`inherit`},children:e}),S={args:{placement:`top`,content:`Tooltip on top`},render:e=>(0,y.jsx)(`div`,{style:{padding:`60px`},children:(0,y.jsx)(g,{...e,children:(0,y.jsx)(x,{label:`Hover me (top)`})})})},C={args:{placement:`bottom`,content:`Tooltip on bottom`},render:e=>(0,y.jsx)(`div`,{style:{padding:`60px`},children:(0,y.jsx)(g,{...e,children:(0,y.jsx)(x,{label:`Hover me (bottom)`})})})},w={args:{placement:`left`,content:`Tooltip on left`},render:e=>(0,y.jsx)(`div`,{style:{padding:`60px`},children:(0,y.jsx)(g,{...e,children:(0,y.jsx)(x,{label:`Hover me (left)`})})})},T={args:{placement:`right`,content:`Tooltip on right`},render:e=>(0,y.jsx)(`div`,{style:{padding:`60px`},children:(0,y.jsx)(g,{...e,children:(0,y.jsx)(x,{label:`Hover me (right)`})})})},E={name:`Long content`,args:{placement:`top`,content:`This tooltip contains a longer message that wraps across multiple lines to demonstrate the max-width and word-wrap behaviour of the tooltip container.`,delay:0},render:e=>(0,y.jsx)(`div`,{style:{padding:`80px`},children:(0,y.jsx)(g,{...e,children:(0,y.jsx)(x,{label:`Hover me (long content)`})})})},D={args:{placement:`top`,content:`You will never see this`,disabled:!0},render:e=>(0,y.jsx)(`div`,{style:{padding:`60px`},children:(0,y.jsx)(g,{...e,children:(0,y.jsx)(x,{label:`Tooltip disabled`})})})},O={name:`All placements`,render:()=>(0,y.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`60px`,padding:`80px`},children:[`top`,`bottom`,`left`,`right`].map(e=>(0,y.jsx)(g,{placement:e,content:`Placement: ${e}`,delay:0,children:(0,y.jsx)(x,{label:e})},e))})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    content: 'Tooltip on top'
  },
  render: args => <div style={{
    padding: '60px'
  }}>
      <Tooltip {...args}>
        <TriggerButton label="Hover me (top)" />
      </Tooltip>
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'bottom',
    content: 'Tooltip on bottom'
  },
  render: args => <div style={{
    padding: '60px'
  }}>
      <Tooltip {...args}>
        <TriggerButton label="Hover me (bottom)" />
      </Tooltip>
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'left',
    content: 'Tooltip on left'
  },
  render: args => <div style={{
    padding: '60px'
  }}>
      <Tooltip {...args}>
        <TriggerButton label="Hover me (left)" />
      </Tooltip>
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'right',
    content: 'Tooltip on right'
  },
  render: args => <div style={{
    padding: '60px'
  }}>
      <Tooltip {...args}>
        <TriggerButton label="Hover me (right)" />
      </Tooltip>
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Long content',
  args: {
    placement: 'top',
    content: 'This tooltip contains a longer message that wraps across multiple lines to demonstrate the max-width and word-wrap behaviour of the tooltip container.',
    delay: 0
  },
  render: args => <div style={{
    padding: '80px'
  }}>
      <Tooltip {...args}>
        <TriggerButton label="Hover me (long content)" />
      </Tooltip>
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    content: 'You will never see this',
    disabled: true
  },
  render: args => <div style={{
    padding: '60px'
  }}>
      <Tooltip {...args}>
        <TriggerButton label="Tooltip disabled" />
      </Tooltip>
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'All placements',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    padding: '80px'
  }}>
      {(['top', 'bottom', 'left', 'right'] as const).map(placement => <Tooltip key={placement} placement={placement} content={\`Placement: \${placement}\`} delay={0}>
          <TriggerButton label={placement} />
        </Tooltip>)}
    </div>
}`,...O.parameters?.docs?.source}}},k=[`Top`,`Bottom`,`Left`,`Right`,`LongContent`,`Disabled`,`AllPlacements`]}))();export{O as AllPlacements,C as Bottom,D as Disabled,w as Left,E as LongContent,T as Right,S as Top,k as __namedExportsOrder,b as default};