import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./iframe-CximP2yJ.js";import{M as n,V as r,d as i,j as a,k as o,t as s,u as c,z as l}from"./exports-Dq5Z-bK0.js";import{nt as u,t as d}from"./lucide-react-D3bSSQyV.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j=e((()=>{f=`_wrapper_1tad0_2`,p=`_label_1tad0_10`,m=`_selectWrapper_1tad0_19`,h=`_select_1tad0_19`,g=`_selectError_1tad0_42`,_=`_sm_1tad0_53`,v=`_md_1tad0_61`,y=`_lg_1tad0_69`,b=`_selectDisabled_1tad0_87`,x=`_icon_1tad0_95`,S=`_helperText_1tad0_111`,C=`_helperTextError_1tad0_118`,w=`_popover_1tad0_123`,T=`_listbox_1tad0_133`,E=`_option_1tad0_140`,D=`_optionFocused_1tad0_154`,O=`_optionSelected_1tad0_158`,k=`_optionDisabled_1tad0_164`,A={wrapper:f,label:p,selectWrapper:m,select:h,selectError:g,sm:_,md:v,lg:y,selectDisabled:b,icon:x,helperText:S,helperTextError:C,popover:w,listbox:T,option:E,optionFocused:D,optionSelected:O,optionDisabled:k}}));function M({options:e,value:t,defaultValue:s,onChange:d,placeholder:f=`Select an option`,disabled:p=!1,size:m=`md`,label:h,helperText:g,errorText:_,id:v}){let y=!!_,b=m===`sm`?14:m===`md`?16:18;return(0,N.jsxs)(i,{id:v,selectedKey:t,defaultSelectedKey:s,onSelectionChange:e=>d?.(String(e)),isDisabled:p,placeholder:f,className:[A.wrapper,A[m]].join(` `),"aria-describedby":_||g?`${v??``}-helper`:void 0,"aria-invalid":y,children:[h&&(0,N.jsx)(r,{className:A.label,children:h}),(0,N.jsx)(`div`,{className:A.selectWrapper,children:(0,N.jsxs)(l,{className:[A.select,y?A.selectError:``,p?A.selectDisabled:``].filter(Boolean).join(` `),children:[(0,N.jsx)(c,{}),(0,N.jsx)(`span`,{className:A.icon,"aria-hidden":`true`,children:(0,N.jsx)(u,{size:b})})]})}),(0,N.jsx)(o,{className:A.popover,children:(0,N.jsx)(a,{className:A.listbox,children:e.map(e=>(0,N.jsx)(n,{id:e.value,isDisabled:e.disabled,className:({isDisabled:e,isFocused:t,isSelected:n})=>[A.option,e?A.optionDisabled:``,t?A.optionFocused:``,n?A.optionSelected:``].filter(Boolean).join(` `),children:e.label},e.value))})}),(_||g)&&(0,N.jsx)(`span`,{id:v?`${v}-helper`:void 0,className:`${A.helperText} ${y?A.helperTextError:``}`,role:y?`alert`:void 0,children:_||g})]})}var N,P=e((()=>{s(),d(),j(),N=t(),M.displayName=`Select`,M.__docgenInfo={description:``,methods:[],displayName:`Select`,props:{options:{required:!0,tsType:{name:`Array`,elements:[{name:`SelectOption`}],raw:`SelectOption[]`},description:``},value:{required:!1,tsType:{name:`string`},description:``},defaultValue:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Select an option'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},errorText:{required:!1,tsType:{name:`string`},description:``},id:{required:!1,tsType:{name:`string`},description:``}}}})),F,I,L,R,z,B,V,H,U,W,G,K,q;e((()=>{P(),F=t(),I=[{value:`usd`,label:`USD — US Dollar`},{value:`eur`,label:`EUR — Euro`},{value:`gbp`,label:`GBP — British Pound`},{value:`jpy`,label:`JPY — Japanese Yen`},{value:`aud`,label:`AUD — Australian Dollar`}],L=[{value:`free`,label:`Free`},{value:`starter`,label:`Starter`},{value:`pro`,label:`Pro`},{value:`enterprise`,label:`Enterprise`,disabled:!0}],R={title:`Components/Select`,component:M,parameters:{layout:`centered`,docs:{description:{component:"Accessible custom-styled select built on a native `<select>` element with a `ChevronDown` icon overlay. Supports label, helper text, error state, placeholder, and three sizes."}}},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]},disabled:{control:`boolean`},placeholder:{control:`text`},label:{control:`text`},helperText:{control:`text`},errorText:{control:`text`}},args:{options:I,size:`md`,disabled:!1},decorators:[e=>(0,F.jsx)(`div`,{style:{width:280},children:(0,F.jsx)(e,{})})]},z={args:{defaultValue:`usd`}},B={args:{placeholder:`Select a currency…`}},V={args:{label:`Currency`,placeholder:`Select currency…`,id:`currency-select`}},H={args:{label:`Plan`,options:L,defaultValue:`starter`,helperText:`You can upgrade or downgrade at any time.`,id:`plan-select`}},U={args:{label:`Payment method`,options:[{value:`card`,label:`Credit card`},{value:`bank`,label:`Bank transfer`}],placeholder:`Select method…`,errorText:`Please select a valid payment method.`,id:`payment-select`}},W={args:{label:`Region`,options:[{value:`us-east`,label:`US East`}],defaultValue:`us-east`,disabled:!0,id:`region-select`}},G={render:()=>(0,F.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`,width:280},children:[(0,F.jsx)(M,{size:`sm`,options:I,defaultValue:`usd`,placeholder:`Small`}),(0,F.jsx)(M,{size:`md`,options:I,defaultValue:`eur`,placeholder:`Medium`}),(0,F.jsx)(M,{size:`lg`,options:I,defaultValue:`gbp`,placeholder:`Large`})]})},K={args:{label:`Subscription plan`,options:L,defaultValue:`pro`,helperText:`Enterprise plans require a custom quote.`,id:`subscription-select`}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'usd'
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select a currency…'
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Currency',
    placeholder: 'Select currency…',
    id: 'currency-select'
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Plan',
    options: PLAN_OPTIONS,
    defaultValue: 'starter',
    helperText: 'You can upgrade or downgrade at any time.',
    id: 'plan-select'
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Payment method',
    options: [{
      value: 'card',
      label: 'Credit card'
    }, {
      value: 'bank',
      label: 'Bank transfer'
    }],
    placeholder: 'Select method…',
    errorText: 'Please select a valid payment method.',
    id: 'payment-select'
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Region',
    options: [{
      value: 'us-east',
      label: 'US East'
    }],
    defaultValue: 'us-east',
    disabled: true,
    id: 'region-select'
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    width: 280
  }}>
      <Select size="sm" options={CURRENCY_OPTIONS} defaultValue="usd" placeholder="Small" />
      <Select size="md" options={CURRENCY_OPTIONS} defaultValue="eur" placeholder="Medium" />
      <Select size="lg" options={CURRENCY_OPTIONS} defaultValue="gbp" placeholder="Large" />
    </div>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Subscription plan',
    options: PLAN_OPTIONS,
    defaultValue: 'pro',
    helperText: 'Enterprise plans require a custom quote.',
    id: 'subscription-select'
  }
}`,...K.parameters?.docs?.source}}},q=[`Default`,`WithPlaceholder`,`WithLabel`,`WithHelperText`,`ErrorState`,`Disabled`,`Sizes`,`WithDisabledOption`]}))();export{z as Default,W as Disabled,U as ErrorState,G as Sizes,K as WithDisabledOption,H as WithHelperText,V as WithLabel,B as WithPlaceholder,q as __namedExportsOrder,R as default};