import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,t as r}from"./iframe-CximP2yJ.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b=e((()=>{i=`_wrapper_1w799_2`,a=`_label_1w799_10`,o=`_textarea_1w799_19`,s=`_error_1w799_39`,c=`_resize_none_1w799_70`,l=`_resize_none_1w799_70`,u=`_resize_vertical_1w799_74`,d=`_resize_vertical_1w799_74`,f=`_resize_both_1w799_78`,p=`_resize_both_1w799_78`,m=`_footer_1w799_83`,h=`_helperText_1w799_93`,g=`_errorText_1w799_101`,_=`_charCount_1w799_109`,v=`_charCountError_1w799_118`,y={wrapper:i,label:a,textarea:o,error:s,resize_none:c,resizeNone:l,resize_vertical:u,resizeVertical:d,resize_both:f,resizeBoth:p,footer:m,helperText:h,errorText:g,charCount:_,charCountError:v}})),x,S,C,w=e((()=>{x=t(n(),1),b(),S=r(),C=(0,x.forwardRef)(({label:e,helperText:t,errorText:n,rows:r=4,resize:i=`vertical`,showCount:a=!1,maxLength:o,disabled:s=!1,id:c,placeholder:l,className:u,onChange:d,value:f,defaultValue:p,...m},h)=>{let g=(0,x.useId)(),_=c??g,v=`${_}-helper`,b=`${_}-error`,[C,w]=(0,x.useState)(()=>f===void 0?p===void 0?0:String(p).length:String(f).length),T=e=>{w(e.target.value.length),d?.(e)},E=!!n,D=[y.textarea,E?y.error:``,y[`resize_${i}`],u].filter(Boolean).join(` `),O=[E?b:null,t&&!E?v:null].filter(Boolean).join(` `)||void 0;return(0,S.jsxs)(`div`,{className:y.wrapper,children:[e&&(0,S.jsx)(`label`,{htmlFor:_,className:y.label,children:e}),(0,S.jsx)(`textarea`,{ref:h,id:_,rows:r,disabled:s,placeholder:l,maxLength:o,"aria-describedby":O,"aria-invalid":E||void 0,className:D,onChange:T,value:f,defaultValue:p,...m}),(t||n||a)&&(0,S.jsxs)(`div`,{className:y.footer,children:[(0,S.jsx)(`span`,{children:E?(0,S.jsx)(`span`,{id:b,className:y.errorText,children:n}):t?(0,S.jsx)(`span`,{id:v,className:y.helperText,children:t}):null}),a&&(0,S.jsxs)(`span`,{className:[y.charCount,E?y.charCountError:``].filter(Boolean).join(` `),children:[C,o===void 0?``:`/${o}`]})]})]})}),C.displayName=`Textarea`,C.__docgenInfo={description:``,methods:[],displayName:`Textarea`,props:{label:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},errorText:{required:!1,tsType:{name:`string`},description:``},rows:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`4`,computed:!1}},resize:{required:!1,tsType:{name:`union`,raw:`'none' | 'vertical' | 'both'`,elements:[{name:`literal`,value:`'none'`},{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'both'`}]},description:``,defaultValue:{value:`'vertical'`,computed:!1}},showCount:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},maxLength:{required:!1,tsType:{name:`number`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},id:{required:!1,tsType:{name:`string`},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``}},composes:[`TextareaHTMLAttributes`]}})),T,E,D,O,k,A,j,M,N,P,F;e((()=>{T=t(n(),1),w(),E=r(),D={title:`Components/Textarea`,component:C,parameters:{layout:`padded`,docs:{description:{component:`Multi-line text input with label, helper text, error state, character count, and resize control. Forwarded ref compatible.`}}},argTypes:{resize:{control:`select`,options:[`none`,`vertical`,`both`]},rows:{control:`number`},disabled:{control:`boolean`},showCount:{control:`boolean`},maxLength:{control:`number`},label:{control:`text`},helperText:{control:`text`},errorText:{control:`text`},placeholder:{control:`text`}},args:{placeholder:`Enter text…`,rows:4,resize:`vertical`,disabled:!1,showCount:!1}},O={args:{placeholder:`Start typing…`},render:e=>(0,E.jsx)(`div`,{style:{maxWidth:`480px`},children:(0,E.jsx)(C,{...e})})},k={name:`With label`,args:{label:`Description`,placeholder:`Write a short description…`,helperText:`Describe the item in a few sentences.`},render:e=>(0,E.jsx)(`div`,{style:{maxWidth:`480px`},children:(0,E.jsx)(C,{...e})})},A={args:{label:`Feedback`,placeholder:`Share your feedback…`,errorText:`This field is required.`,defaultValue:``},render:e=>(0,E.jsx)(`div`,{style:{maxWidth:`480px`},children:(0,E.jsx)(C,{...e})})},j={name:`With character count`,render:()=>{let[e,t]=(0,T.useState)(``);return(0,E.jsx)(`div`,{style:{maxWidth:`480px`},children:(0,E.jsx)(C,{label:`Bio`,placeholder:`Tell us about yourself…`,helperText:`Keep it brief.`,showCount:!0,maxLength:200,value:e,onChange:e=>t(e.target.value)})})}},M={args:{label:`Notes`,placeholder:`No notes available.`,helperText:`This field is read-only.`,disabled:!0,defaultValue:`These notes have been locked by an administrator.`},render:e=>(0,E.jsx)(`div`,{style:{maxWidth:`480px`},children:(0,E.jsx)(C,{...e})})},N={name:`No resize`,args:{label:`Fixed textarea`,placeholder:`This textarea cannot be resized.`,resize:`none`,rows:5},render:e=>(0,E.jsx)(`div`,{style:{maxWidth:`480px`},children:(0,E.jsx)(C,{...e})})},P={name:`All states`,render:()=>(0,E.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`,maxWidth:`480px`},children:[(0,E.jsx)(C,{label:`Default`,placeholder:`Default state`}),(0,E.jsx)(C,{label:`With helper`,placeholder:`With helper text`,helperText:`This is a helpful hint below the field.`}),(0,E.jsx)(C,{label:`Error state`,placeholder:`Error state`,errorText:`This field has an error.`,defaultValue:`Some invalid content here`}),(0,E.jsx)(C,{label:`With character count`,placeholder:`Type to see count…`,showCount:!0,maxLength:150,defaultValue:`Hello world`}),(0,E.jsx)(C,{label:`Disabled`,disabled:!0,defaultValue:`Disabled content that cannot be edited.`})]})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Start typing…'
  },
  render: args => <div style={{
    maxWidth: '480px'
  }}>
      <Textarea {...args} />
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'With label',
  args: {
    label: 'Description',
    placeholder: 'Write a short description…',
    helperText: 'Describe the item in a few sentences.'
  },
  render: args => <div style={{
    maxWidth: '480px'
  }}>
      <Textarea {...args} />
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Feedback',
    placeholder: 'Share your feedback…',
    errorText: 'This field is required.',
    defaultValue: ''
  },
  render: args => <div style={{
    maxWidth: '480px'
  }}>
      <Textarea {...args} />
    </div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'With character count',
  render: () => {
    const [val, setVal] = useState('');
    return <div style={{
      maxWidth: '480px'
    }}>
        <Textarea label="Bio" placeholder="Tell us about yourself…" helperText="Keep it brief." showCount maxLength={200} value={val} onChange={e => setVal(e.target.value)} />
      </div>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notes',
    placeholder: 'No notes available.',
    helperText: 'This field is read-only.',
    disabled: true,
    defaultValue: 'These notes have been locked by an administrator.'
  },
  render: args => <div style={{
    maxWidth: '480px'
  }}>
      <Textarea {...args} />
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'No resize',
  args: {
    label: 'Fixed textarea',
    placeholder: 'This textarea cannot be resized.',
    resize: 'none',
    rows: 5
  },
  render: args => <div style={{
    maxWidth: '480px'
  }}>
      <Textarea {...args} />
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'All states',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: '480px'
  }}>
      <Textarea label="Default" placeholder="Default state" />
      <Textarea label="With helper" placeholder="With helper text" helperText="This is a helpful hint below the field." />
      <Textarea label="Error state" placeholder="Error state" errorText="This field has an error." defaultValue="Some invalid content here" />
      <Textarea label="With character count" placeholder="Type to see count…" showCount maxLength={150} defaultValue="Hello world" />
      <Textarea label="Disabled" disabled defaultValue="Disabled content that cannot be edited." />
    </div>
}`,...P.parameters?.docs?.source}}},F=[`Default`,`WithLabel`,`Error`,`WithCharCount`,`Disabled`,`NoResize`,`AllStates`]}))();export{P as AllStates,O as Default,M as Disabled,A as Error,N as NoResize,j as WithCharCount,k as WithLabel,F as __namedExportsOrder,D as default};