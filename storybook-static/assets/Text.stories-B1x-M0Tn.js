import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./iframe-CximP2yJ.js";var n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M=e((()=>{n=`_text_gylp3_1`,r=`_h1_gylp3_7`,i=`_h2_gylp3_13`,a=`_h3_gylp3_19`,o=`_h4_gylp3_25`,s=`_h5_gylp3_31`,c=`_h6_gylp3_37`,l=`_body1_gylp3_43`,u=`_body2_gylp3_48`,d=`_caption_gylp3_53`,f=`_overline_gylp3_58`,p=`_label_gylp3_65`,m=`_code_gylp3_70`,h=`_colorPrimary_gylp3_78`,g=`_colorSecondary_gylp3_79`,_=`_colorTertiary_gylp3_80`,v=`_colorMuted_gylp3_81`,y=`_colorBrand_gylp3_82`,b=`_colorError_gylp3_83`,x=`_colorSuccess_gylp3_84`,S=`_colorWarning_gylp3_85`,C=`_colorInfo_gylp3_86`,w=`_colorInverse_gylp3_87`,T=`_colorDisabled_gylp3_88`,E=`_weightRegular_gylp3_91`,D=`_weightMedium_gylp3_92`,O=`_weightSemiBold_gylp3_93`,k=`_weightBold_gylp3_94`,A=`_truncate_gylp3_97`,j={text:n,h1:r,h2:i,h3:a,h4:o,h5:s,h6:c,body1:l,body2:u,caption:d,overline:f,label:p,code:m,colorPrimary:h,colorSecondary:g,colorTertiary:_,colorMuted:v,colorBrand:y,colorError:b,colorSuccess:x,colorWarning:S,colorInfo:C,colorInverse:w,colorDisabled:T,weightRegular:E,weightMedium:D,weightSemiBold:O,weightBold:k,truncate:A}}));function N({variant:e=`body1`,color:t=`primary`,weight:n,truncate:r=!1,as:i,children:a,className:o,...s}){let c=i??F[e],l=`color${t.charAt(0).toUpperCase()}${t.slice(1)}`,u=n?`weight${n.charAt(0).toUpperCase()}${n.slice(1)}`:null;return(0,P.jsx)(c,{className:[j.text,j[e],j[l],u&&j[u],r&&j.truncate,o].filter(Boolean).join(` `),...s,children:a})}var P,F,I=e((()=>{M(),P=t(),F={h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,h5:`h5`,h6:`h6`,body1:`p`,body2:`p`,caption:`span`,overline:`span`,label:`span`,code:`code`},N.__docgenInfo={description:``,methods:[],displayName:`Text`,props:{variant:{required:!1,tsType:{name:`union`,raw:`| 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
| 'body1' | 'body2'
| 'caption' | 'overline' | 'label' | 'code'`,elements:[{name:`literal`,value:`'h1'`},{name:`literal`,value:`'h2'`},{name:`literal`,value:`'h3'`},{name:`literal`,value:`'h4'`},{name:`literal`,value:`'h5'`},{name:`literal`,value:`'h6'`},{name:`literal`,value:`'body1'`},{name:`literal`,value:`'body2'`},{name:`literal`,value:`'caption'`},{name:`literal`,value:`'overline'`},{name:`literal`,value:`'label'`},{name:`literal`,value:`'code'`}]},description:``,defaultValue:{value:`'body1'`,computed:!1}},color:{required:!1,tsType:{name:`union`,raw:`| 'primary' | 'secondary' | 'tertiary' | 'muted'
| 'brand' | 'error' | 'success' | 'warning' | 'info'
| 'inverse' | 'disabled'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'tertiary'`},{name:`literal`,value:`'muted'`},{name:`literal`,value:`'brand'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'info'`},{name:`literal`,value:`'inverse'`},{name:`literal`,value:`'disabled'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},weight:{required:!1,tsType:{name:`union`,raw:`'regular' | 'medium' | 'semiBold' | 'bold'`,elements:[{name:`literal`,value:`'regular'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'semiBold'`},{name:`literal`,value:`'bold'`}]},description:``},truncate:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},as:{required:!1,tsType:{name:`ElementType`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`HTMLAttributes`]}})),L,R,z,B,V,H,U,W;e((()=>{I(),L=t(),R={title:`Components/Text`,component:N,parameters:{layout:`centered`,docs:{description:{component:`Typography primitive. Variant controls scale; color and weight are independent props sourced from semantic tokens.`}}},argTypes:{variant:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`body1`,`body2`,`caption`,`overline`,`label`,`code`]},color:{control:`select`,options:[`primary`,`secondary`,`tertiary`,`muted`,`brand`,`error`,`success`,`warning`,`info`,`inverse`,`disabled`]},weight:{control:`select`,options:[void 0,`regular`,`medium`,`semiBold`,`bold`]},truncate:{control:`boolean`},children:{control:`text`}},args:{variant:`body1`,color:`primary`,children:`The quick brown fox jumps over the lazy dog.`}},z={},B={render:()=>(0,L.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,L.jsx)(N,{variant:`h1`,children:`Heading 1 — 44px`}),(0,L.jsx)(N,{variant:`h2`,children:`Heading 2 — 36px`}),(0,L.jsx)(N,{variant:`h3`,children:`Heading 3 — 28px`}),(0,L.jsx)(N,{variant:`h4`,children:`Heading 4 — 24px`}),(0,L.jsx)(N,{variant:`h5`,children:`Heading 5 — 20px`}),(0,L.jsx)(N,{variant:`h6`,children:`Heading 6 — 18px`})]})},V={render:()=>(0,L.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,L.jsx)(N,{variant:`body1`,children:`Body 1 — 16px Regular`}),(0,L.jsx)(N,{variant:`body2`,children:`Body 2 — 14px Regular`}),(0,L.jsx)(N,{variant:`caption`,children:`Caption — 12px`}),(0,L.jsx)(N,{variant:`label`,children:`Label — 14px Medium`}),(0,L.jsx)(N,{variant:`overline`,children:`Overline — Uppercase 11px`}),(0,L.jsx)(N,{variant:`code`,children:`code.snippet — monospace 13px`})]})},H={render:()=>(0,L.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[`primary`,`secondary`,`tertiary`,`muted`,`brand`,`error`,`success`,`warning`,`info`,`disabled`].map(e=>(0,L.jsxs)(N,{color:e,children:[e,` — The quick brown fox`]},e))})},U={render:()=>(0,L.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,L.jsx)(N,{weight:`regular`,children:`Regular 400`}),(0,L.jsx)(N,{weight:`medium`,children:`Medium 500`}),(0,L.jsx)(N,{weight:`semiBold`,children:`Semi Bold 600`}),(0,L.jsx)(N,{weight:`bold`,children:`Bold 700`})]})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Text variant="h1">Heading 1 — 44px</Text>
      <Text variant="h2">Heading 2 — 36px</Text>
      <Text variant="h3">Heading 3 — 28px</Text>
      <Text variant="h4">Heading 4 — 24px</Text>
      <Text variant="h5">Heading 5 — 20px</Text>
      <Text variant="h6">Heading 6 — 18px</Text>
    </div>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Text variant="body1">Body 1 — 16px Regular</Text>
      <Text variant="body2">Body 2 — 14px Regular</Text>
      <Text variant="caption">Caption — 12px</Text>
      <Text variant="label">Label — 14px Medium</Text>
      <Text variant="overline">Overline — Uppercase 11px</Text>
      <Text variant="code">code.snippet — monospace 13px</Text>
    </div>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      {(['primary', 'secondary', 'tertiary', 'muted', 'brand', 'error', 'success', 'warning', 'info', 'disabled'] as const).map(c => <Text key={c} color={c}>{c} — The quick brown fox</Text>)}
    </div>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <Text weight="regular">Regular 400</Text>
      <Text weight="medium">Medium 500</Text>
      <Text weight="semiBold">Semi Bold 600</Text>
      <Text weight="bold">Bold 700</Text>
    </div>
}`,...U.parameters?.docs?.source}}},W=[`Default`,`HeadingScale`,`BodyScale`,`Colors`,`Weights`]}))();export{V as BodyScale,H as Colors,z as Default,B as HeadingScale,U as Weights,W as __namedExportsOrder,R as default};