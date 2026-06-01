import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,t as r}from"./iframe-CximP2yJ.js";import{t as i}from"./react-dom-DX0Bzfg9.js";import{A as a,J as o,K as s,c,n as l,t as u}from"./lucide-react-D3bSSQyV.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T=e((()=>{d=`_container_gbdni_14`,f=`_toast_gbdni_26`,p=`_slideIn_gbdni_1`,m=`_info_gbdni_43`,h=`_success_gbdni_50`,g=`_warning_gbdni_57`,_=`_error_gbdni_64`,v=`_icon_gbdni_71`,y=`_body_gbdni_79`,b=`_title_gbdni_87`,x=`_description_gbdni_94`,S=`_actionButton_gbdni_102`,C=`_dismissButton_gbdni_124`,w={container:d,toast:f,slideIn:p,info:m,success:h,warning:g,error:_,icon:v,body:y,title:b,description:x,actionButton:S,dismissButton:C}}));function E({variant:e=`info`,title:t,description:n,dismissible:r=!0,onDismiss:i,action:a,duration:o=5e3}){let[s,c]=(0,k.useState)(!0),u=(0,k.useRef)(null);return(0,k.useEffect)(()=>(o>0&&(u.current=setTimeout(()=>{c(!1),i?.()},o)),()=>{u.current&&clearTimeout(u.current)}),[o,i]),s?(0,j.jsxs)(`div`,{className:[w.toast,w[e]].join(` `),role:`alert`,"aria-live":`assertive`,children:[(0,j.jsx)(`span`,{className:w.icon,children:M[e]}),(0,j.jsxs)(`div`,{className:w.body,children:[t&&(0,j.jsx)(`p`,{className:w.title,children:t}),n&&(0,j.jsx)(`p`,{className:w.description,children:n}),a&&(0,j.jsx)(`button`,{type:`button`,className:w.actionButton,onClick:a.onClick,children:a.label})]}),r&&(0,j.jsx)(`button`,{type:`button`,className:w.dismissButton,onClick:()=>{u.current&&clearTimeout(u.current),c(!1),i?.()},"aria-label":`Dismiss notification`,children:(0,j.jsx)(l,{size:14,"aria-hidden":!0})})]}):null}function D({children:e}){let[t,n]=(0,k.useState)([]),r=(0,k.useId)(),i=(0,k.useRef)(0),a=(0,k.useCallback)(e=>{let t=`${r}-toast-${++i.current}`;n(n=>[...n,{...e,id:t}])},[r]),o=(0,k.useCallback)(e=>{n(t=>t.filter(t=>t.id!==e))},[]);return(0,j.jsxs)(N.Provider,{value:{toast:a},children:[e,A.createPortal((0,j.jsx)(`div`,{className:w.container,"aria-label":`Notifications`,children:t.map(e=>(0,j.jsx)(E,{variant:e.variant,title:e.title,description:e.description,dismissible:e.dismissible??!0,action:e.action,duration:e.duration??5e3,onDismiss:()=>o(e.id)},e.id))}),document.body)]})}function O(){let e=(0,k.useContext)(N);if(!e)throw Error(`useToast must be used within a <ToastProvider>.`);return e}var k,A,j,M,N,P=e((()=>{k=t(n(),1),A=t(i(),1),u(),T(),j=r(),M={info:(0,j.jsx)(a,{size:16,"aria-hidden":!0}),success:(0,j.jsx)(o,{size:16,"aria-hidden":!0}),warning:(0,j.jsx)(c,{size:16,"aria-hidden":!0}),error:(0,j.jsx)(s,{size:16,"aria-hidden":!0})},N=(0,k.createContext)(null),E.__docgenInfo={description:``,methods:[],displayName:`Toast`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'info' | 'success' | 'warning' | 'error'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'error'`}]},description:``,defaultValue:{value:`'info'`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},dismissible:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},duration:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`5000`,computed:!1}},action:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{ label: string; onClick: () => void }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`onClick`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0}}]}},description:``},onDismiss:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}},D.__docgenInfo={description:``,methods:[],displayName:`ToastProvider`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``}}}}));function F(){let{toast:e}=O();return(0,I.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`},children:[(0,I.jsx)(`button`,{type:`button`,onClick:()=>e({variant:`info`,title:`Info`,description:`This will dismiss in 4s.`,duration:4e3}),style:{padding:`8px 16px`,cursor:`pointer`,borderRadius:`6px`,border:`1px solid #748FA1`},children:`Show Info`}),(0,I.jsx)(`button`,{type:`button`,onClick:()=>e({variant:`success`,title:`Success!`,description:`Operation completed.`,duration:4e3}),style:{padding:`8px 16px`,cursor:`pointer`,borderRadius:`6px`,border:`1px solid #748FA1`},children:`Show Success`}),(0,I.jsx)(`button`,{type:`button`,onClick:()=>e({variant:`warning`,title:`Warning`,description:`Proceed with caution.`,duration:4e3}),style:{padding:`8px 16px`,cursor:`pointer`,borderRadius:`6px`,border:`1px solid #748FA1`},children:`Show Warning`}),(0,I.jsx)(`button`,{type:`button`,onClick:()=>e({variant:`error`,title:`Error`,description:`Something went wrong.`,duration:4e3}),style:{padding:`8px 16px`,cursor:`pointer`,borderRadius:`6px`,border:`1px solid #748FA1`},children:`Show Error`})]})}var I,L,R,z,B,V,H,U,W,G;e((()=>{P(),I=r(),L={title:`Components/Toast`,component:E,parameters:{layout:`centered`,docs:{description:{component:"Notification toasts for info, success, warning and error feedback. Supports auto-dismiss, actions, and programmatic usage via `ToastProvider` + `useToast`."}}},argTypes:{variant:{control:`select`,options:[`info`,`success`,`warning`,`error`]},title:{control:`text`},description:{control:`text`},dismissible:{control:`boolean`},duration:{control:`number`}},args:{variant:`info`,title:`Heads up`,description:`This is an informational notification.`,dismissible:!0,duration:0}},R={name:`Info`,args:{variant:`info`,title:`New update available`,description:`Version 2.4.0 is ready to install.`}},z={name:`Success`,args:{variant:`success`,title:`Changes saved`,description:`Your profile has been updated successfully.`}},B={name:`Warning`,args:{variant:`warning`,title:`Storage almost full`,description:`You have used 90% of your allocated storage.`}},V={name:`Error`,args:{variant:`error`,title:`Upload failed`,description:`The file could not be uploaded. Please try again.`}},H={name:`With action`,args:{variant:`info`,title:`Invitation sent`,description:`An invitation was sent to team@example.com.`,duration:0,action:{label:`Undo`,onClick:()=>alert(`Undo clicked`)}}},U={name:`All variants`,render:()=>(0,I.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`,width:`400px`},children:[(0,I.jsx)(E,{variant:`info`,title:`Info notification`,description:`Informational message for the user.`,duration:0}),(0,I.jsx)(E,{variant:`success`,title:`Success notification`,description:`The action completed successfully.`,duration:0}),(0,I.jsx)(E,{variant:`warning`,title:`Warning notification`,description:`Something needs your attention.`,duration:0}),(0,I.jsx)(E,{variant:`error`,title:`Error notification`,description:`An error occurred. Please try again.`,duration:0})]})},W={name:`Auto-dismiss (useToast)`,parameters:{layout:`centered`},render:()=>(0,I.jsx)(D,{children:(0,I.jsx)(F,{})})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Info',
  args: {
    variant: 'info',
    title: 'New update available',
    description: 'Version 2.4.0 is ready to install.'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Success',
  args: {
    variant: 'success',
    title: 'Changes saved',
    description: 'Your profile has been updated successfully.'
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Warning',
  args: {
    variant: 'warning',
    title: 'Storage almost full',
    description: 'You have used 90% of your allocated storage.'
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  args: {
    variant: 'error',
    title: 'Upload failed',
    description: 'The file could not be uploaded. Please try again.'
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'With action',
  args: {
    variant: 'info',
    title: 'Invitation sent',
    description: 'An invitation was sent to team@example.com.',
    duration: 0,
    action: {
      label: 'Undo',
      onClick: () => alert('Undo clicked')
    }
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'All variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    width: '400px'
  }}>
      <Toast variant="info" title="Info notification" description="Informational message for the user." duration={0} />
      <Toast variant="success" title="Success notification" description="The action completed successfully." duration={0} />
      <Toast variant="warning" title="Warning notification" description="Something needs your attention." duration={0} />
      <Toast variant="error" title="Error notification" description="An error occurred. Please try again." duration={0} />
    </div>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Auto-dismiss (useToast)',
  parameters: {
    layout: 'centered'
  },
  render: () => <ToastProvider>
      <ToastDemo />
    </ToastProvider>
}`,...W.parameters?.docs?.source}}},G=[`InfoToast`,`SuccessToast`,`WarningToast`,`ErrorToast`,`WithAction`,`AllVariants`,`AutoDismiss`]}))();export{U as AllVariants,W as AutoDismiss,V as ErrorToast,R as InfoToast,z as SuccessToast,B as WarningToast,H as WithAction,G as __namedExportsOrder,L as default};