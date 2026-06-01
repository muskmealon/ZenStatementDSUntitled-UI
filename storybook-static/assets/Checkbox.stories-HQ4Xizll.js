import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./iframe-CximP2yJ.js";import{I as n,L as r,t as i}from"./exports-Dq5Z-bK0.js";import{E as a,it as o,t as s}from"./lucide-react-D3bSSQyV.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D=e((()=>{c=`_root_5r8ck_2`,l=`_rootDisabled_5r8ck_8`,u=`_hiddenInput_5r8ck_13`,d=`_label_5r8ck_26`,f=`_labelText_5r8ck_38`,p=`_box_5r8ck_51`,m=`_sm_5r8ck_64`,h=`_md_5r8ck_69`,g=`_checked_5r8ck_75`,_=`_indeterminate_5r8ck_76`,v=`_boxDisabled_5r8ck_82`,y=`_boxFocused_5r8ck_88`,b=`_helperText_5r8ck_107`,x=`_group_5r8ck_116`,S=`_groupLabel_5r8ck_125`,C=`_groupItems_5r8ck_134`,w=`_vertical_5r8ck_139`,T=`_horizontal_5r8ck_143`,E={root:c,rootDisabled:l,hiddenInput:u,label:d,labelText:f,box:p,sm:m,md:h,checked:g,indeterminate:_,boxDisabled:v,boxFocused:y,helperText:b,group:x,groupLabel:S,groupItems:C,vertical:w,horizontal:T}}));function O({checked:e,defaultChecked:t,onChange:r,label:i,helperText:s,disabled:c=!1,indeterminate:l=!1,size:u=`md`,id:d}){let f=u===`sm`?10:12;return(0,A.jsxs)(`div`,{className:E.root,children:[(0,A.jsx)(n,{id:d,isSelected:e,defaultSelected:t,onChange:r,isDisabled:c,isIndeterminate:l,className:({isDisabled:e})=>[E.label,e&&E.rootDisabled].filter(Boolean).join(` `),children:({isSelected:e,isIndeterminate:t,isDisabled:n,isFocusVisible:r})=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(`span`,{className:[E.box,E[u],e&&!t?E.checked:``,t?E.indeterminate:``,n?E.boxDisabled:``,r?E.boxFocused:``].filter(Boolean).join(` `),"aria-hidden":`true`,children:[t&&(0,A.jsx)(a,{size:f,strokeWidth:3}),!t&&e&&(0,A.jsx)(o,{size:f,strokeWidth:3})]}),i&&(0,A.jsx)(`span`,{className:E.labelText,children:i})]})}),s&&(0,A.jsx)(`span`,{id:d?`${d}-helper`:void 0,className:E.helperText,children:s})]})}function k({label:e,children:t,orientation:n=`vertical`}){return(0,A.jsxs)(r,{className:E.group,children:[e&&(0,A.jsx)(`span`,{className:E.groupLabel,children:e}),(0,A.jsx)(`div`,{className:`${E.groupItems} ${n===`horizontal`?E.horizontal:E.vertical}`,children:t})]})}var A,j=e((()=>{i(),s(),D(),A=t(),O.displayName=`Checkbox`,k.displayName=`CheckboxGroup`,O.__docgenInfo={description:``,methods:[],displayName:`Checkbox`,props:{checked:{required:!1,tsType:{name:`boolean`},description:``},defaultChecked:{required:!1,tsType:{name:`boolean`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:``},label:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},indeterminate:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},id:{required:!1,tsType:{name:`string`},description:``}}},k.__docgenInfo={description:``,methods:[],displayName:`CheckboxGroup`,props:{label:{required:!1,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},orientation:{required:!1,tsType:{name:`union`,raw:`'vertical' | 'horizontal'`,elements:[{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`}]},description:``,defaultValue:{value:`'vertical'`,computed:!1}}}}})),M,N,P,F,I,L,R,z,B,V,H,U;e((()=>{j(),M=t(),N={title:`Components/Checkbox`,component:O,parameters:{layout:`centered`,docs:{description:{component:`Custom-styled checkbox with support for indeterminate state, sizes, and grouping. Hides the native input and renders an accessible custom box.`}}},argTypes:{size:{control:`select`,options:[`sm`,`md`]},disabled:{control:`boolean`},indeterminate:{control:`boolean`},label:{control:`text`},helperText:{control:`text`}},args:{label:`Accept terms and conditions`,size:`md`,disabled:!1,indeterminate:!1}},P={},F={args:{checked:!0,label:`Receive email notifications`}},I={args:{indeterminate:!0,label:`Select all items`}},L={args:{disabled:!0,label:`This option is unavailable`}},R={args:{disabled:!0,checked:!0,label:`Pre-selected and locked`}},z={args:{label:`Subscribe to newsletter`,helperText:`You can unsubscribe at any time from your account settings.`}},B={args:{size:`sm`,label:`Small checkbox`}},V={render:()=>(0,M.jsxs)(k,{label:`Notification preferences`,orientation:`vertical`,children:[(0,M.jsx)(O,{label:`Email`,defaultChecked:!0}),(0,M.jsx)(O,{label:`SMS`}),(0,M.jsx)(O,{label:`Push notifications`,defaultChecked:!0}),(0,M.jsx)(O,{label:`In-app alerts`,disabled:!0})]})},H={render:()=>(0,M.jsxs)(k,{label:`Filters`,orientation:`horizontal`,children:[(0,M.jsx)(O,{label:`Invoices`,defaultChecked:!0}),(0,M.jsx)(O,{label:`Payments`,defaultChecked:!0}),(0,M.jsx)(O,{label:`Refunds`}),(0,M.jsx)(O,{label:`Disputes`,disabled:!0})]})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: 'Receive email notifications'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    label: 'Select all items'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'This option is unavailable'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true,
    label: 'Pre-selected and locked'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Subscribe to newsletter',
    helperText: 'You can unsubscribe at any time from your account settings.'
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small checkbox'
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxGroup label="Notification preferences" orientation="vertical">
      <Checkbox label="Email" defaultChecked />
      <Checkbox label="SMS" />
      <Checkbox label="Push notifications" defaultChecked />
      <Checkbox label="In-app alerts" disabled />
    </CheckboxGroup>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxGroup label="Filters" orientation="horizontal">
      <Checkbox label="Invoices" defaultChecked />
      <Checkbox label="Payments" defaultChecked />
      <Checkbox label="Refunds" />
      <Checkbox label="Disputes" disabled />
    </CheckboxGroup>
}`,...H.parameters?.docs?.source}}},U=[`Default`,`Checked`,`Indeterminate`,`Disabled`,`DisabledChecked`,`WithHelperText`,`SmallSize`,`GroupVertical`,`GroupHorizontal`]}))();export{F as Checked,P as Default,L as Disabled,R as DisabledChecked,H as GroupHorizontal,V as GroupVertical,I as Indeterminate,B as SmallSize,z as WithHelperText,U as __namedExportsOrder,N as default};