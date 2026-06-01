import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./iframe-CximP2yJ.js";var n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w=e((()=>{n=`_root_1ccsw_36`,r=`_sm_1ccsw_46`,i=`_spinnerSvg_1ccsw_46`,a=`_md_1ccsw_51`,o=`_lg_1ccsw_56`,s=`_dot_1ccsw_62`,c=`_barTrack_1ccsw_78`,l=`_brand_1ccsw_94`,u=`_spinnerArc_1ccsw_94`,d=`_spinnerTrack_1ccsw_95`,f=`_barFill_1ccsw_107`,p=`_white_1ccsw_111`,m=`_muted_1ccsw_127`,h=`_spin_1ccsw_46`,g=`_dotsContainer_1ccsw_160`,_=`_pulse_1ccsw_1`,v=`_dot1_1ccsw_172`,y=`_dot2_1ccsw_176`,b=`_dot3_1ccsw_180`,x=`_barBounce_1ccsw_1`,S=`_label_1ccsw_203`,C={root:n,sm:r,spinnerSvg:i,md:a,lg:o,dot:s,barTrack:c,brand:l,spinnerArc:u,spinnerTrack:d,barFill:f,white:p,muted:m,spin:h,dotsContainer:g,pulse:_,dot1:v,dot2:y,dot3:b,barBounce:x,label:S}}));function T(){return(0,k.jsxs)(`svg`,{className:C.spinnerSvg,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:[(0,k.jsx)(`circle`,{className:C.spinnerTrack,cx:`12`,cy:`12`,r:`10`,strokeWidth:`2.5`}),(0,k.jsx)(`circle`,{className:C.spinnerArc,cx:`12`,cy:`12`,r:`10`,strokeWidth:`2.5`,strokeDasharray:`31.4 62.8`,strokeLinecap:`round`})]})}function E(){return(0,k.jsxs)(`div`,{className:C.dotsContainer,"aria-hidden":`true`,children:[(0,k.jsx)(`span`,{className:`${C.dot} ${C.dot1}`}),(0,k.jsx)(`span`,{className:`${C.dot} ${C.dot2}`}),(0,k.jsx)(`span`,{className:`${C.dot} ${C.dot3}`})]})}function D(){return(0,k.jsx)(`div`,{className:C.barTrack,"aria-hidden":`true`,children:(0,k.jsx)(`span`,{className:C.barFill})})}function O({variant:e=`spinner`,size:t=`md`,color:n=`brand`,label:r}){return(0,k.jsxs)(`div`,{className:[C.root,C[t],C[n]].filter(Boolean).join(` `),role:`status`,"aria-label":r??`Loading`,"aria-busy":`true`,children:[e===`spinner`&&(0,k.jsx)(T,{}),e===`dots`&&(0,k.jsx)(E,{}),e===`bar`&&(0,k.jsx)(D,{}),r&&(0,k.jsx)(`span`,{className:C.label,"aria-hidden":`true`,children:r})]})}var k,A=e((()=>{w(),k=t(),O.__docgenInfo={description:``,methods:[],displayName:`Loader`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'spinner' | 'dots' | 'bar'`,elements:[{name:`literal`,value:`'spinner'`},{name:`literal`,value:`'dots'`},{name:`literal`,value:`'bar'`}]},description:``,defaultValue:{value:`'spinner'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},color:{required:!1,tsType:{name:`union`,raw:`'brand' | 'white' | 'muted'`,elements:[{name:`literal`,value:`'brand'`},{name:`literal`,value:`'white'`},{name:`literal`,value:`'muted'`}]},description:``,defaultValue:{value:`'brand'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``}}}})),j,M,N,P,F,I,L,R,z;e((()=>{A(),j=t(),M={title:`Components/Loader`,component:O,parameters:{layout:`centered`,docs:{description:{component:`Animated loading indicator with three variants: spinner, dots, and bar. All sizes and colors map to design tokens.`}}},argTypes:{variant:{control:`select`,options:[`spinner`,`dots`,`bar`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},color:{control:`select`,options:[`brand`,`white`,`muted`]},label:{control:`text`}},args:{variant:`spinner`,size:`md`,color:`brand`}},N={},P={name:`Spinner — Sizes`,render:()=>(0,j.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`32px`},children:[(0,j.jsx)(O,{variant:`spinner`,size:`sm`}),(0,j.jsx)(O,{variant:`spinner`,size:`md`}),(0,j.jsx)(O,{variant:`spinner`,size:`lg`})]})},F={render:()=>(0,j.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`32px`},children:[(0,j.jsx)(O,{variant:`dots`,size:`sm`}),(0,j.jsx)(O,{variant:`dots`,size:`md`}),(0,j.jsx)(O,{variant:`dots`,size:`lg`})]})},I={render:()=>(0,j.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`24px`},children:[(0,j.jsx)(O,{variant:`bar`,size:`sm`}),(0,j.jsx)(O,{variant:`bar`,size:`md`}),(0,j.jsx)(O,{variant:`bar`,size:`lg`})]})},L={render:()=>(0,j.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,j.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`32px`},children:[(0,j.jsx)(O,{variant:`spinner`,color:`brand`}),(0,j.jsx)(O,{variant:`dots`,color:`brand`}),(0,j.jsx)(O,{variant:`bar`,color:`brand`})]}),(0,j.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`32px`,backgroundColor:`#36454F`,padding:`16px`,borderRadius:`8px`},children:[(0,j.jsx)(O,{variant:`spinner`,color:`white`}),(0,j.jsx)(O,{variant:`dots`,color:`white`}),(0,j.jsx)(O,{variant:`bar`,color:`white`})]}),(0,j.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`32px`},children:[(0,j.jsx)(O,{variant:`spinner`,color:`muted`}),(0,j.jsx)(O,{variant:`dots`,color:`muted`}),(0,j.jsx)(O,{variant:`bar`,color:`muted`})]})]})},R={render:()=>(0,j.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:`40px`},children:[(0,j.jsx)(O,{variant:`spinner`,label:`Loading...`}),(0,j.jsx)(O,{variant:`dots`,label:`Please wait`}),(0,j.jsx)(O,{variant:`bar`,label:`Fetching data`})]})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Spinner — Sizes',
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '32px'
  }}>
      <Loader variant="spinner" size="sm" />
      <Loader variant="spinner" size="md" />
      <Loader variant="spinner" size="lg" />
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '32px'
  }}>
      <Loader variant="dots" size="sm" />
      <Loader variant="dots" size="md" />
      <Loader variant="dots" size="lg" />
    </div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px'
  }}>
      <Loader variant="bar" size="sm" />
      <Loader variant="bar" size="md" />
      <Loader variant="bar" size="lg" />
    </div>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '32px'
    }}>
        <Loader variant="spinner" color="brand" />
        <Loader variant="dots" color="brand" />
        <Loader variant="bar" color="brand" />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '32px',
      backgroundColor: '#36454F',
      padding: '16px',
      borderRadius: '8px'
    }}>
        <Loader variant="spinner" color="white" />
        <Loader variant="dots" color="white" />
        <Loader variant="bar" color="white" />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '32px'
    }}>
        <Loader variant="spinner" color="muted" />
        <Loader variant="dots" color="muted" />
        <Loader variant="bar" color="muted" />
      </div>
    </div>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'flex-start',
    gap: '40px'
  }}>
      <Loader variant="spinner" label="Loading..." />
      <Loader variant="dots" label="Please wait" />
      <Loader variant="bar" label="Fetching data" />
    </div>
}`,...R.parameters?.docs?.source}}},z=[`Default`,`SpinnerSizes`,`Dots`,`Bar`,`Colors`,`WithLabel`]}))();export{I as Bar,L as Colors,N as Default,F as Dots,P as SpinnerSizes,R as WithLabel,z as __namedExportsOrder,M as default};