import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,t as r}from"./iframe-CximP2yJ.js";import{O as i,R as a,b as o,t as s}from"./lucide-react-D3bSSQyV.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w=e((()=>{c=`_wrapper_11iri_1`,l=`_label_11iri_8`,u=`_inputWrapper_11iri_16`,d=`_input_11iri_16`,f=`_errorInput_11iri_39`,p=`_sm_11iri_49`,m=`_md_11iri_56`,h=`_lg_11iri_63`,g=`_hasLeadingIcon_11iri_71`,_=`_hasTrailingIcon_11iri_72`,v=`_iconSlot_11iri_94`,y=`_leadingIcon_11iri_103`,b=`_trailingIcon_11iri_104`,x=`_helperText_11iri_107`,S=`_errorText_11iri_114`,C={wrapper:c,label:l,inputWrapper:u,input:d,errorInput:f,sm:p,md:m,lg:h,hasLeadingIcon:g,hasTrailingIcon:_,iconSlot:v,leadingIcon:y,trailingIcon:b,helperText:x,errorText:S}})),T,E,D,O=e((()=>{T=t(n(),1),w(),E=r(),D=(0,T.forwardRef)(({size:e=`md`,label:t,helperText:n,errorText:r,leadingIcon:i,trailingIcon:a,id:o,className:s,disabled:c,...l},u)=>{let d=!!r,f=[C.wrapper,C[e],i&&C.hasLeadingIcon,a&&C.hasTrailingIcon].filter(Boolean).join(` `),p=[C.input,d&&C.errorInput,s].filter(Boolean).join(` `);return(0,E.jsxs)(`div`,{className:f,children:[t&&(0,E.jsx)(`label`,{className:C.label,htmlFor:o,children:t}),(0,E.jsxs)(`div`,{className:C.inputWrapper,children:[i&&(0,E.jsx)(`span`,{className:`${C.iconSlot} ${C.leadingIcon}`,"aria-hidden":!0,children:i}),(0,E.jsx)(`input`,{ref:u,id:o,disabled:c,"aria-invalid":d,"aria-describedby":r||n?`${o}-helper`:void 0,className:p,...l}),a&&(0,E.jsx)(`span`,{className:`${C.iconSlot} ${C.trailingIcon}`,"aria-hidden":!0,children:a})]}),(r||n)&&(0,E.jsx)(`span`,{id:`${o}-helper`,className:`${C.helperText} ${d?C.errorText:``}`,role:d?`alert`:void 0,children:r||n})]})}),D.displayName=`Input`,D.__docgenInfo={description:``,methods:[],displayName:`Input`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},errorText:{required:!1,tsType:{name:`string`},description:``},leadingIcon:{required:!1,tsType:{name:`ReactNode`},description:``},trailingIcon:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`Omit`]}})),k,A,j,M,N,P,F,I,L,R,z;e((()=>{s(),O(),k=r(),A={title:`Components/Input`,component:D,parameters:{layout:`centered`,docs:{description:{component:"Text input with label, helper text, error state, and icon slot support. Sized via a `size` prop."}}},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]},disabled:{control:`boolean`},placeholder:{control:`text`},label:{control:`text`},helperText:{control:`text`},errorText:{control:`text`}},args:{placeholder:`Enter value…`,size:`md`,disabled:!1,id:`demo-input`},decorators:[e=>(0,k.jsx)(`div`,{style:{width:320},children:(0,k.jsx)(e,{})})]},j={},M={args:{label:`Email address`,placeholder:`name@company.com`,id:`email`}},N={args:{label:`Password`,placeholder:`••••••••`,helperText:`Must be at least 8 characters.`,id:`password`,type:`password`}},P={args:{label:`Invoice number`,placeholder:`INV-001`,errorText:`Invoice number already exists.`,id:`invoice`,defaultValue:`INV-001`}},F={render:()=>(0,k.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`,width:320},children:[(0,k.jsx)(D,{size:`sm`,placeholder:`Small input`}),(0,k.jsx)(D,{size:`md`,placeholder:`Medium input`}),(0,k.jsx)(D,{size:`lg`,placeholder:`Large input`})]})},I={args:{leadingIcon:(0,k.jsx)(o,{size:16}),placeholder:`Search invoices…`,id:`search`}},L={args:{leadingIcon:(0,k.jsx)(i,{size:16}),trailingIcon:(0,k.jsx)(a,{size:16}),placeholder:`Email`,id:`email-icon`}},R={args:{label:`Account ID`,defaultValue:`ACC-00123`,disabled:!0,id:`account-id`}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email address',
    placeholder: 'name@company.com',
    id: 'email'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: '••••••••',
    helperText: 'Must be at least 8 characters.',
    id: 'password',
    type: 'password'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Invoice number',
    placeholder: 'INV-001',
    errorText: 'Invoice number already exists.',
    id: 'invoice',
    defaultValue: 'INV-001'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    width: 320
  }}>
      <Input size="sm" placeholder="Small input" />
      <Input size="md" placeholder="Medium input" />
      <Input size="lg" placeholder="Large input" />
    </div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    leadingIcon: <Search size={16} />,
    placeholder: 'Search invoices…',
    id: 'search'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    leadingIcon: <Mail size={16} />,
    trailingIcon: <Eye size={16} />,
    placeholder: 'Email',
    id: 'email-icon'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Account ID',
    defaultValue: 'ACC-00123',
    disabled: true,
    id: 'account-id'
  }
}`,...R.parameters?.docs?.source}}},z=[`Default`,`WithLabel`,`WithHelperText`,`ErrorState`,`Sizes`,`WithLeadingIcon`,`WithBothIcons`,`Disabled`]}))();export{j as Default,R as Disabled,P as ErrorState,F as Sizes,L as WithBothIcons,N as WithHelperText,M as WithLabel,I as WithLeadingIcon,z as __namedExportsOrder,A as default};