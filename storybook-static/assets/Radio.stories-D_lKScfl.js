import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,t as r}from"./iframe-CximP2yJ.js";import{m as i,p as a,t as o}from"./exports-Dq5Z-bK0.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O=e((()=>{s=`_root_xkpus_2`,c=`_rootDisabled_xkpus_8`,l=`_hiddenInput_xkpus_13`,u=`_label_xkpus_26`,d=`_labelText_xkpus_38`,f=`_circle_xkpus_51`,p=`_sm_xkpus_63`,m=`_md_xkpus_68`,h=`_selected_xkpus_74`,g=`_circleDisabled_xkpus_80`,_=`_circleFocused_xkpus_86`,v=`_dot_xkpus_102`,y=`_smDot_xkpus_109`,b=`_mdDot_xkpus_115`,x=`_dotDisabled_xkpus_120`,S=`_group_xkpus_125`,C=`_groupLabel_xkpus_134`,w=`_groupItems_xkpus_143`,T=`_vertical_xkpus_148`,E=`_horizontal_xkpus_152`,D={root:s,rootDisabled:c,hiddenInput:l,label:u,labelText:d,circle:f,sm:p,md:m,selected:h,circleDisabled:g,circleFocused:_,dot:v,smDot:y,mdDot:b,dotDisabled:x,group:S,groupLabel:C,groupItems:w,vertical:T,horizontal:E}}));function k({value:e,label:t,disabled:n=!1,size:r=`md`,id:a}){return(0,j.jsx)(i,{id:a,value:e,isDisabled:n,className:({isDisabled:e})=>[D.root,e&&D.rootDisabled].filter(Boolean).join(` `),children:({isSelected:e,isDisabled:n,isFocusVisible:i})=>(0,j.jsxs)(`span`,{className:D.label,children:[(0,j.jsx)(`span`,{className:[D.circle,D[r],e?D.selected:``,n?D.circleDisabled:``,i?D.circleFocused:``].filter(Boolean).join(` `),"aria-hidden":`true`,children:e&&(0,j.jsx)(`span`,{className:[D.dot,D[`${r}Dot`],n?D.dotDisabled:``].filter(Boolean).join(` `)})}),t&&(0,j.jsx)(`span`,{className:D.labelText,children:t})]})})}function A({value:e,defaultValue:t,onChange:n,label:r,orientation:i=`vertical`,children:o,name:s}){return(0,j.jsxs)(a,{value:e,defaultValue:t,onChange:n,name:s,className:D.group,children:[r&&(0,j.jsx)(`span`,{className:D.groupLabel,children:r}),(0,j.jsx)(`div`,{className:`${D.groupItems} ${i===`horizontal`?D.horizontal:D.vertical}`,children:o})]})}var j,M=e((()=>{o(),O(),j=r(),k.displayName=`Radio`,A.displayName=`RadioGroup`,k.__docgenInfo={description:``,methods:[],displayName:`Radio`,props:{value:{required:!0,tsType:{name:`string`},description:``},label:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},id:{required:!1,tsType:{name:`string`},description:``}}},A.__docgenInfo={description:``,methods:[],displayName:`RadioGroup`,props:{value:{required:!1,tsType:{name:`string`},description:``},defaultValue:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},label:{required:!1,tsType:{name:`string`},description:``},orientation:{required:!1,tsType:{name:`union`,raw:`'vertical' | 'horizontal'`,elements:[{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`}]},description:``,defaultValue:{value:`'vertical'`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``},name:{required:!1,tsType:{name:`string`},description:``}}}})),N,P,F,I,L,R,z,B,V,H,U;e((()=>{N=t(n(),1),M(),P=r(),F={title:`Components/Radio`,component:k,parameters:{layout:`centered`,docs:{description:{component:"Custom-styled radio button. Use inside a `RadioGroup` for automatic value management via React context."}}},argTypes:{size:{control:`select`,options:[`sm`,`md`]},disabled:{control:`boolean`},label:{control:`text`}},args:{value:`option-a`,label:`Option A`,size:`md`,disabled:!1}},I={render:e=>(0,P.jsx)(A,{children:(0,P.jsx)(k,{...e})})},L={render:()=>(0,P.jsx)(A,{value:`selected`,children:(0,P.jsx)(k,{value:`selected`,label:`Selected option`})})},R={args:{disabled:!0,label:`Unavailable option`,value:`disabled`},render:e=>(0,P.jsx)(A,{children:(0,P.jsx)(k,{...e})})},z={render:()=>(0,P.jsx)(A,{value:`disabled-selected`,children:(0,P.jsx)(k,{value:`disabled-selected`,label:`Pre-selected and locked`,disabled:!0})})},B={render:()=>(0,P.jsx)(A,{children:(0,P.jsx)(k,{size:`sm`,value:`small`,label:`Small radio`})})},V={render:()=>{let[e,t]=(0,N.useState)(`monthly`);return(0,P.jsxs)(A,{label:`Billing cycle`,orientation:`vertical`,value:e,onChange:t,children:[(0,P.jsx)(k,{value:`monthly`,label:`Monthly`}),(0,P.jsx)(k,{value:`quarterly`,label:`Quarterly`}),(0,P.jsx)(k,{value:`annually`,label:`Annually (save 20%)`}),(0,P.jsx)(k,{value:`custom`,label:`Custom period`,disabled:!0})]})}},H={render:()=>{let[e,t]=(0,N.useState)(`card`);return(0,P.jsxs)(A,{label:`Payment method`,orientation:`horizontal`,value:e,onChange:t,children:[(0,P.jsx)(k,{value:`card`,label:`Credit card`}),(0,P.jsx)(k,{value:`bank`,label:`Bank transfer`}),(0,P.jsx)(k,{value:`crypto`,label:`Crypto`,disabled:!0})]})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => <RadioGroup>
      <Radio {...args} />
    </RadioGroup>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup value="selected">
      <Radio value="selected" label="Selected option" />
    </RadioGroup>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Unavailable option',
    value: 'disabled'
  },
  render: args => <RadioGroup>
      <Radio {...args} />
    </RadioGroup>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup value="disabled-selected">
      <Radio value="disabled-selected" label="Pre-selected and locked" disabled />
    </RadioGroup>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup>
      <Radio size="sm" value="small" label="Small radio" />
    </RadioGroup>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('monthly');
    return <RadioGroup label="Billing cycle" orientation="vertical" value={value} onChange={setValue}>
        <Radio value="monthly" label="Monthly" />
        <Radio value="quarterly" label="Quarterly" />
        <Radio value="annually" label="Annually (save 20%)" />
        <Radio value="custom" label="Custom period" disabled />
      </RadioGroup>;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('card');
    return <RadioGroup label="Payment method" orientation="horizontal" value={value} onChange={setValue}>
        <Radio value="card" label="Credit card" />
        <Radio value="bank" label="Bank transfer" />
        <Radio value="crypto" label="Crypto" disabled />
      </RadioGroup>;
  }
}`,...H.parameters?.docs?.source}}},U=[`Default`,`Selected`,`Disabled`,`DisabledSelected`,`SmallSize`,`GroupVertical`,`GroupHorizontal`]}))();export{I as Default,R as Disabled,z as DisabledSelected,H as GroupHorizontal,V as GroupVertical,L as Selected,B as SmallSize,U as __namedExportsOrder,F as default};