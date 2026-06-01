import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./iframe-CximP2yJ.js";var n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y=e((()=>{n=`_wrapper_w6i3b_28`,r=`_labelRow_w6i3b_36`,i=`_labelText_w6i3b_43`,a=`_percentText_w6i3b_50`,o=`_track_w6i3b_59`,s=`_sm_w6i3b_68`,c=`_md_w6i3b_72`,l=`_lg_w6i3b_76`,u=`_fill_w6i3b_81`,d=`_brand_w6i3b_92`,f=`_success_w6i3b_96`,p=`_warning_w6i3b_100`,m=`_error_w6i3b_104`,h=`_animated_w6i3b_109`,g=`_stripes_w6i3b_1`,_=`_indeterminate_w6i3b_125`,v={wrapper:n,labelRow:r,labelText:i,percentText:a,track:o,sm:s,md:c,lg:l,fill:u,default:`_default_w6i3b_88`,brand:d,success:f,warning:p,error:m,animated:h,stripes:g,indeterminate:_}}));function b({value:e,max:t=100,variant:n=`default`,size:r=`md`,showLabel:i=!1,label:a,animated:o=!1,indeterminate:s=!1}){let c=Math.min(Math.max(e,0),t),l=s?100:c/t*100,u=a??`${Math.round(l)}%`,d=[v.track,v[r]].filter(Boolean).join(` `),f=[v.fill,v[n],o&&!s&&v.animated,s&&v.indeterminate].filter(Boolean).join(` `);return(0,x.jsxs)(`div`,{className:v.wrapper,children:[(i||a)&&(0,x.jsxs)(`div`,{className:v.labelRow,children:[a&&(0,x.jsx)(`span`,{className:v.labelText,children:a}),i&&!a&&(0,x.jsx)(`span`,{className:v.labelText,children:u}),i&&a&&(0,x.jsxs)(`span`,{className:v.percentText,children:[Math.round(l),`%`]})]}),(0,x.jsx)(`div`,{className:d,role:`progressbar`,"aria-valuenow":s?void 0:c,"aria-valuemin":0,"aria-valuemax":t,"aria-label":a??`Progress`,"aria-busy":s?!0:void 0,children:(0,x.jsx)(`div`,{className:f,style:s?void 0:{width:`${l}%`}})})]})}var x,S=e((()=>{y(),x=t(),b.__docgenInfo={description:``,methods:[],displayName:`ProgressBar`,props:{value:{required:!0,tsType:{name:`number`},description:``},max:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`100`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'success' | 'warning' | 'error' | 'brand'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'brand'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},showLabel:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``},animated:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},indeterminate:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})),C,w,T,E,D,O,k,A,j;e((()=>{S(),C=t(),w={title:`Components/ProgressBar`,component:b,parameters:{layout:`padded`,docs:{description:{component:`Horizontal progress indicator supporting determinate, indeterminate, and animated stripe modes. All colors and sizes use design tokens.`}}},argTypes:{value:{control:{type:`range`,min:0,max:100,step:1}},max:{control:{type:`number`}},variant:{control:`select`,options:[`default`,`success`,`warning`,`error`,`brand`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},showLabel:{control:`boolean`},label:{control:`text`},animated:{control:`boolean`},indeterminate:{control:`boolean`}},args:{value:65,max:100,variant:`default`,size:`md`,showLabel:!1,animated:!1,indeterminate:!1},decorators:[e=>(0,C.jsx)(`div`,{style:{width:`400px`},children:(0,C.jsx)(e,{})})]},T={},E={render:()=>(0,C.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,width:`400px`},children:[`default`,`brand`,`success`,`warning`,`error`].map(e=>(0,C.jsx)(b,{value:65,variant:e,label:e,showLabel:!0},e))})},D={render:()=>(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`,width:`400px`},children:[(0,C.jsx)(b,{value:65,size:`sm`,label:`Small (4px)`,showLabel:!0}),(0,C.jsx)(b,{value:65,size:`md`,label:`Medium (8px)`,showLabel:!0}),(0,C.jsx)(b,{value:65,size:`lg`,label:`Large (12px)`,showLabel:!0})]})},O={render:()=>(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,width:`400px`},children:[(0,C.jsx)(b,{value:40,showLabel:!0}),(0,C.jsx)(b,{value:72,label:`Uploading files...`,showLabel:!0}),(0,C.jsx)(b,{value:100,variant:`success`,label:`Complete`,showLabel:!0})]})},k={render:()=>(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,width:`400px`},children:[(0,C.jsx)(b,{value:0,indeterminate:!0,label:`Loading data...`}),(0,C.jsx)(b,{value:0,indeterminate:!0,variant:`brand`,size:`lg`,label:`Processing...`})]})},A={render:()=>(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,width:`400px`},children:[(0,C.jsx)(b,{value:55,animated:!0,label:`Uploading...`,showLabel:!0}),(0,C.jsx)(b,{value:80,animated:!0,variant:`success`,size:`lg`,label:`Installing...`,showLabel:!0}),(0,C.jsx)(b,{value:30,animated:!0,variant:`warning`,label:`Syncing...`,showLabel:!0})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '400px'
  }}>
      {(['default', 'brand', 'success', 'warning', 'error'] as const).map(variant => <ProgressBar key={variant} value={65} variant={variant} label={variant} showLabel />)}
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '400px'
  }}>
      <ProgressBar value={65} size="sm" label="Small (4px)" showLabel />
      <ProgressBar value={65} size="md" label="Medium (8px)" showLabel />
      <ProgressBar value={65} size="lg" label="Large (12px)" showLabel />
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '400px'
  }}>
      <ProgressBar value={40} showLabel />
      <ProgressBar value={72} label="Uploading files..." showLabel />
      <ProgressBar value={100} variant="success" label="Complete" showLabel />
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '400px'
  }}>
      <ProgressBar value={0} indeterminate label="Loading data..." />
      <ProgressBar value={0} indeterminate variant="brand" size="lg" label="Processing..." />
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '400px'
  }}>
      <ProgressBar value={55} animated label="Uploading..." showLabel />
      <ProgressBar value={80} animated variant="success" size="lg" label="Installing..." showLabel />
      <ProgressBar value={30} animated variant="warning" label="Syncing..." showLabel />
    </div>
}`,...A.parameters?.docs?.source}}},j=[`Default`,`AllVariants`,`Sizes`,`WithLabel`,`Indeterminate`,`Animated`]}))();export{E as AllVariants,A as Animated,T as Default,k as Indeterminate,D as Sizes,O as WithLabel,j as __namedExportsOrder,w as default};