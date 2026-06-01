import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,t as r}from"./iframe-CximP2yJ.js";import{A as i,J as a,K as o,c as s,n as c,t as l}from"./lucide-react-D3bSSQyV.js";var u,d,f,p,m,h,g,_,v,y,b,x,S=e((()=>{u=`_alert_k05xn_2`,d=`_iconSlot_k05xn_18`,f=`_body_k05xn_26`,p=`_title_k05xn_34`,m=`_description_k05xn_41`,h=`_action_k05xn_47`,g=`_dismissButton_k05xn_52`,_=`_info_k05xn_79`,v=`_success_k05xn_86`,y=`_warning_k05xn_93`,b=`_error_k05xn_100`,x={alert:u,iconSlot:d,body:f,title:p,description:m,action:h,dismissButton:g,info:_,success:v,warning:y,error:b}}));function C({variant:e=`info`,title:t,children:n,dismissible:r=!1,onDismiss:i,icon:a,action:o,className:s}){let[l,u]=(0,w.useState)(!1);if(l)return null;let d=()=>{u(!0),i?.()},f=[x.alert,x[e],s].filter(Boolean).join(` `),p=a===void 0?E[e]:a;return(0,T.jsxs)(`div`,{className:f,role:`alert`,"aria-live":`polite`,children:[p&&(0,T.jsx)(`span`,{className:x.iconSlot,children:p}),(0,T.jsxs)(`div`,{className:x.body,children:[t&&(0,T.jsx)(`p`,{className:x.title,children:t}),n&&(0,T.jsx)(`div`,{className:x.description,children:n}),o&&(0,T.jsx)(`div`,{className:x.action,children:o})]}),r&&(0,T.jsx)(`button`,{type:`button`,className:x.dismissButton,onClick:d,"aria-label":`Dismiss alert`,children:(0,T.jsx)(c,{size:14,"aria-hidden":!0})})]})}var w,T,E,D=e((()=>{w=t(n(),1),l(),S(),T=r(),E={info:(0,T.jsx)(i,{size:16,"aria-hidden":!0}),success:(0,T.jsx)(a,{size:16,"aria-hidden":!0}),warning:(0,T.jsx)(s,{size:16,"aria-hidden":!0}),error:(0,T.jsx)(o,{size:16,"aria-hidden":!0})},C.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'info' | 'success' | 'warning' | 'error'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'error'`}]},description:``,defaultValue:{value:`'info'`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},dismissible:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onDismiss:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},icon:{required:!1,tsType:{name:`ReactNode`},description:``},action:{required:!1,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),O,k,A,j,M,N,P,F,I,L,R;e((()=>{D(),O=r(),k={title:`Components/Alert`,component:C,parameters:{layout:`padded`,docs:{description:{component:`Contextual feedback messages for the user. Supports info, success, warning, and error variants with optional title, dismiss, and action slots.`}}},argTypes:{variant:{control:`select`,options:[`info`,`success`,`warning`,`error`]},title:{control:`text`},dismissible:{control:`boolean`}},args:{variant:`info`,children:`This is an informational alert message.`,dismissible:!1}},A={args:{variant:`info`,children:`Your session will expire in 10 minutes. Save your work.`}},j={args:{variant:`success`,children:`Your changes have been saved successfully.`}},M={args:{variant:`warning`,children:`You are approaching your monthly usage limit.`}},N={args:{variant:`error`,children:`Failed to connect to the server. Please try again.`}},P={name:`All variants`,render:()=>(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,maxWidth:520},children:[(0,O.jsx)(C,{variant:`info`,children:`Your session will expire in 10 minutes. Save your work.`}),(0,O.jsx)(C,{variant:`success`,children:`Your changes have been saved successfully.`}),(0,O.jsx)(C,{variant:`warning`,children:`You are approaching your monthly usage limit.`}),(0,O.jsx)(C,{variant:`error`,children:`Failed to connect to the server. Please try again.`})]})},F={name:`With title`,render:()=>(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,maxWidth:520},children:[(0,O.jsx)(C,{variant:`info`,title:`New feature available`,children:`Explore the redesigned dashboard from your account settings.`}),(0,O.jsx)(C,{variant:`success`,title:`Payment received`,children:`Invoice #1042 has been paid. A receipt has been sent to your email.`}),(0,O.jsx)(C,{variant:`warning`,title:`Limit approaching`,children:`You have used 85% of your API quota for this billing period.`}),(0,O.jsx)(C,{variant:`error`,title:`Upload failed`,children:`The file exceeds the 10 MB limit. Please compress it and try again.`})]})},I={name:`Dismissible`,render:()=>(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,maxWidth:520},children:[(0,O.jsx)(C,{variant:`info`,title:`Tip`,dismissible:!0,children:`Click the X button to dismiss this alert. It will not reappear on refresh.`}),(0,O.jsx)(C,{variant:`warning`,dismissible:!0,children:`Unsaved changes will be lost if you navigate away.`}),(0,O.jsx)(C,{variant:`error`,title:`Connection error`,dismissible:!0,children:`Could not reach the API. Check your network and retry.`})]})},L={name:`With action button`,render:()=>(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,maxWidth:520},children:[(0,O.jsx)(C,{variant:`info`,title:`Update available`,action:(0,O.jsx)(`button`,{type:`button`,style:{background:`none`,border:`1px solid currentColor`,borderRadius:6,padding:`4px 12px`,cursor:`pointer`,fontFamily:`inherit`,fontSize:13,fontWeight:600,color:`inherit`},children:`Install now`}),children:`Version 2.4.0 is available with performance improvements.`}),(0,O.jsx)(C,{variant:`error`,title:`Sync failed`,dismissible:!0,action:(0,O.jsx)(`button`,{type:`button`,style:{background:`none`,border:`1px solid currentColor`,borderRadius:6,padding:`4px 12px`,cursor:`pointer`,fontFamily:`inherit`,fontSize:13,fontWeight:600,color:`inherit`},children:`Retry`}),children:`We could not sync your data. Please retry or contact support.`})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'Your session will expire in 10 minutes. Save your work.'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Your changes have been saved successfully.'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'You are approaching your monthly usage limit.'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    children: 'Failed to connect to the server. Please try again.'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 520
  }}>
      <Alert variant="info">Your session will expire in 10 minutes. Save your work.</Alert>
      <Alert variant="success">Your changes have been saved successfully.</Alert>
      <Alert variant="warning">You are approaching your monthly usage limit.</Alert>
      <Alert variant="error">Failed to connect to the server. Please try again.</Alert>
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'With title',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 520
  }}>
      <Alert variant="info" title="New feature available">
        Explore the redesigned dashboard from your account settings.
      </Alert>
      <Alert variant="success" title="Payment received">
        Invoice #1042 has been paid. A receipt has been sent to your email.
      </Alert>
      <Alert variant="warning" title="Limit approaching">
        You have used 85% of your API quota for this billing period.
      </Alert>
      <Alert variant="error" title="Upload failed">
        The file exceeds the 10 MB limit. Please compress it and try again.
      </Alert>
    </div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Dismissible',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 520
  }}>
      <Alert variant="info" title="Tip" dismissible>
        Click the X button to dismiss this alert. It will not reappear on refresh.
      </Alert>
      <Alert variant="warning" dismissible>
        Unsaved changes will be lost if you navigate away.
      </Alert>
      <Alert variant="error" title="Connection error" dismissible>
        Could not reach the API. Check your network and retry.
      </Alert>
    </div>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'With action button',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 520
  }}>
      <Alert variant="info" title="Update available" action={<button type="button" style={{
      background: 'none',
      border: '1px solid currentColor',
      borderRadius: 6,
      padding: '4px 12px',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: 13,
      fontWeight: 600,
      color: 'inherit'
    }}>
            Install now
          </button>}>
        Version 2.4.0 is available with performance improvements.
      </Alert>
      <Alert variant="error" title="Sync failed" dismissible action={<button type="button" style={{
      background: 'none',
      border: '1px solid currentColor',
      borderRadius: 6,
      padding: '4px 12px',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: 13,
      fontWeight: 600,
      color: 'inherit'
    }}>
            Retry
          </button>}>
        We could not sync your data. Please retry or contact support.
      </Alert>
    </div>
}`,...L.parameters?.docs?.source}}},R=[`Info`,`Success`,`Warning`,`Error`,`AllVariants`,`WithTitle`,`Dismissible`,`WithAction`]}))();export{P as AllVariants,I as Dismissible,N as Error,A as Info,j as Success,M as Warning,L as WithAction,F as WithTitle,R as __namedExportsOrder,k as default};