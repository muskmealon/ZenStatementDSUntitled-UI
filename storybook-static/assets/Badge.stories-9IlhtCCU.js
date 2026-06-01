import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./iframe-CximP2yJ.js";import{Q as n,X as r,t as i}from"./lucide-react-D3bSSQyV.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b=e((()=>{a=`_badge_1de9g_1`,o=`_sm_1de9g_11`,s=`_md_1de9g_19`,c=`_lg_1de9g_27`,l=`_brand_1de9g_41`,u=`_success_1de9g_46`,d=`_warning_1de9g_51`,f=`_error_1de9g_56`,p=`_info_1de9g_61`,m=`_accent_1de9g_66`,h=`_brandFilled_1de9g_72`,g=`_successFilled_1de9g_77`,_=`_errorFilled_1de9g_82`,v=`_dot_1de9g_88`,y={badge:a,sm:o,md:s,lg:c,default:`_default_1de9g_36`,brand:l,success:u,warning:d,error:f,info:p,accent:m,brandFilled:h,successFilled:g,errorFilled:_,dot:v}}));function x({variant:e=`default`,size:t=`md`,dot:n=!1,icon:r,children:i,className:a,...o}){return(0,S.jsxs)(`span`,{className:[y.badge,y[t],y[e],a].filter(Boolean).join(` `),...o,children:[n&&(0,S.jsx)(`span`,{className:y.dot,"aria-hidden":!0}),r,i]})}var S,C=e((()=>{b(),S=t(),x.__docgenInfo={description:``,methods:[],displayName:`Badge`,props:{variant:{required:!1,tsType:{name:`union`,raw:`| 'default'
| 'brand'
| 'success'
| 'warning'
| 'error'
| 'info'
| 'accent'
| 'brandFilled'
| 'successFilled'
| 'errorFilled'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'brand'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'info'`},{name:`literal`,value:`'accent'`},{name:`literal`,value:`'brandFilled'`},{name:`literal`,value:`'successFilled'`},{name:`literal`,value:`'errorFilled'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},dot:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},icon:{required:!1,tsType:{name:`ReactNode`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`HTMLAttributes`]}})),w,T,E,D,O,k,A,j,M;e((()=>{i(),C(),w=t(),T={title:`Components/Badge`,component:x,parameters:{layout:`centered`,docs:{description:{component:`Status label for surfaces, tags, and counts. Variant colours reference semantic surface + text tokens.`}}},argTypes:{variant:{control:`select`,options:[`default`,`brand`,`success`,`warning`,`error`,`info`,`accent`,`brandFilled`,`successFilled`,`errorFilled`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},dot:{control:`boolean`},children:{control:`text`}},args:{children:`Badge`,variant:`default`,size:`md`,dot:!1}},E={},D={render:()=>(0,w.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`8px`,alignItems:`center`},children:[`default`,`brand`,`success`,`warning`,`error`,`info`,`accent`].map(e=>(0,w.jsx)(x,{variant:e,children:e},e))})},O={render:()=>(0,w.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,alignItems:`center`},children:[(0,w.jsx)(x,{variant:`brandFilled`,children:`Active`}),(0,w.jsx)(x,{variant:`successFilled`,children:`Paid`}),(0,w.jsx)(x,{variant:`errorFilled`,children:`Overdue`})]})},k={render:()=>(0,w.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,alignItems:`center`},children:[(0,w.jsx)(x,{variant:`brand`,size:`sm`,children:`Small`}),(0,w.jsx)(x,{variant:`brand`,size:`md`,children:`Medium`}),(0,w.jsx)(x,{variant:`brand`,size:`lg`,children:`Large`})]})},A={render:()=>(0,w.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,alignItems:`center`},children:[(0,w.jsx)(x,{variant:`success`,dot:!0,children:`Active`}),(0,w.jsx)(x,{variant:`warning`,dot:!0,children:`Pending`}),(0,w.jsx)(x,{variant:`error`,dot:!0,children:`Failed`}),(0,w.jsx)(x,{variant:`info`,dot:!0,children:`Processing`})]})},j={render:()=>(0,w.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,alignItems:`center`},children:[(0,w.jsx)(x,{variant:`success`,icon:(0,w.jsx)(r,{size:12}),children:`Approved`}),(0,w.jsx)(x,{variant:`error`,icon:(0,w.jsx)(n,{size:12}),children:`Rejected`})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    alignItems: 'center'
  }}>
      {(['default', 'brand', 'success', 'warning', 'error', 'info', 'accent'] as const).map(v => <Badge key={v} variant={v}>{v}</Badge>)}
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      <Badge variant="brandFilled">Active</Badge>
      <Badge variant="successFilled">Paid</Badge>
      <Badge variant="errorFilled">Overdue</Badge>
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      <Badge variant="brand" size="sm">Small</Badge>
      <Badge variant="brand" size="md">Medium</Badge>
      <Badge variant="brand" size="lg">Large</Badge>
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      <Badge variant="success" dot>Active</Badge>
      <Badge variant="warning" dot>Pending</Badge>
      <Badge variant="error" dot>Failed</Badge>
      <Badge variant="info" dot>Processing</Badge>
    </div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      <Badge variant="success" icon={<CheckCircle size={12} />}>Approved</Badge>
      <Badge variant="error" icon={<AlertCircle size={12} />}>Rejected</Badge>
    </div>
}`,...j.parameters?.docs?.source}}},M=[`Default`,`AllVariants`,`FilledVariants`,`Sizes`,`WithDot`,`WithIcon`]}))();export{D as AllVariants,E as Default,O as FilledVariants,k as Sizes,A as WithDot,j as WithIcon,M as __namedExportsOrder,T as default};