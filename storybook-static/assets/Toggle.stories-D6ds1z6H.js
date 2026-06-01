import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,t as r}from"./iframe-CximP2yJ.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S=e((()=>{i=`_root_1p4pi_2`,a=`_rootDisabled_1p4pi_8`,o=`_label_1p4pi_13`,s=`_labelDisabled_1p4pi_23`,c=`_track_1p4pi_29`,l=`_sm_1p4pi_45`,u=`_md_1p4pi_50`,d=`_lg_1p4pi_55`,f=`_trackOff_1p4pi_61`,p=`_trackOn_1p4pi_65`,m=`_trackDisabled_1p4pi_79`,h=`_thumb_1p4pi_85`,g=`_smThumb_1p4pi_96`,_=`_mdThumb_1p4pi_101`,v=`_lgThumb_1p4pi_106`,y=`_thumbOn_1p4pi_113`,b=`_thumbDisabled_1p4pi_125`,x={root:i,rootDisabled:a,label:o,labelDisabled:s,track:c,sm:l,md:u,lg:d,trackOff:f,trackOn:p,trackDisabled:m,thumb:h,smThumb:g,mdThumb:_,lgThumb:v,thumbOn:y,thumbDisabled:b}}));function C({checked:e,defaultChecked:t,onChange:n,disabled:r=!1,size:i=`md`,label:a,labelPosition:o=`right`,id:s}){let c=(0,w.useId)(),l=s??c,u=e!==void 0,[d,f]=(0,w.useState)(t??!1),p=u?e:d;function m(){if(r)return;let e=!p;u||f(e),n?.(e)}function h(e){(e.key===` `||e.key===`Enter`)&&(e.preventDefault(),m())}let g=[x.track,x[i],p?x.trackOn:x.trackOff,r?x.trackDisabled:``].filter(Boolean).join(` `),_=[x.thumb,x[i+`Thumb`],p?x.thumbOn:``,r?x.thumbDisabled:``].filter(Boolean).join(` `),v=a?(0,T.jsx)(`span`,{id:`${l}-label`,className:`${x.label} ${r?x.labelDisabled:``}`,children:a}):null;return(0,T.jsxs)(`div`,{className:`${x.root} ${r?x.rootDisabled:``}`,children:[a&&o===`left`&&v,(0,T.jsx)(`button`,{id:l,role:`switch`,type:`button`,"aria-checked":p,"aria-labelledby":a?`${l}-label`:void 0,disabled:r,onClick:m,onKeyDown:h,className:g,children:(0,T.jsx)(`span`,{className:_})}),a&&o===`right`&&v]})}var w,T,E=e((()=>{w=t(n(),1),S(),T=r(),C.displayName=`Toggle`,C.__docgenInfo={description:``,methods:[],displayName:`Toggle`,props:{checked:{required:!1,tsType:{name:`boolean`},description:``},defaultChecked:{required:!1,tsType:{name:`boolean`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``},labelPosition:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:``,defaultValue:{value:`'right'`,computed:!1}},id:{required:!1,tsType:{name:`string`},description:``}}}})),D,O,k,A,j,M,N,P,F,I,L;e((()=>{D=t(n(),1),E(),O=r(),k={title:`Components/Toggle`,component:C,parameters:{layout:`centered`,docs:{description:{component:'On/off switch rendered as a `<button role="switch">`. Supports controlled and uncontrolled modes, three sizes, and label placement.'}}},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]},labelPosition:{control:`select`,options:[`left`,`right`]},disabled:{control:`boolean`},label:{control:`text`}},args:{size:`md`,disabled:!1,labelPosition:`right`}},A={args:{defaultChecked:!1}},j={args:{defaultChecked:!0}},M={render:()=>{let[e,t]=(0,D.useState)(!1);return(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`12px`},children:[(0,O.jsx)(C,{checked:e,onChange:t,label:e?`Enabled`:`Disabled`}),(0,O.jsxs)(`span`,{style:{fontFamily:`var(--font-family-primary)`,fontSize:`12px`,color:`var(--color-text-muted)`},children:[`State: `,e?`ON`:`OFF`]})]})}},N={render:()=>(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,alignItems:`flex-start`},children:[(0,O.jsx)(C,{size:`sm`,defaultChecked:!0,label:`Small`}),(0,O.jsx)(C,{size:`md`,defaultChecked:!0,label:`Medium`}),(0,O.jsx)(C,{size:`lg`,defaultChecked:!0,label:`Large`})]})},P={render:()=>(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`,alignItems:`flex-start`},children:[(0,O.jsx)(C,{disabled:!0,label:`Disabled off`}),(0,O.jsx)(C,{disabled:!0,defaultChecked:!0,label:`Disabled on`})]})},F={args:{label:`Dark mode`,labelPosition:`left`,defaultChecked:!0}},I={args:{label:`Email notifications`,labelPosition:`right`,defaultChecked:!1}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: false
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [on, setOn] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px'
    }}>
        <Toggle checked={on} onChange={setOn} label={on ? 'Enabled' : 'Disabled'} />
        <span style={{
        fontFamily: 'var(--font-family-primary)',
        fontSize: '12px',
        color: 'var(--color-text-muted)'
      }}>
          State: {on ? 'ON' : 'OFF'}
        </span>
      </div>;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'flex-start'
  }}>
      <Toggle size="sm" defaultChecked label="Small" />
      <Toggle size="md" defaultChecked label="Medium" />
      <Toggle size="lg" defaultChecked label="Large" />
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    alignItems: 'flex-start'
  }}>
      <Toggle disabled label="Disabled off" />
      <Toggle disabled defaultChecked label="Disabled on" />
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dark mode',
    labelPosition: 'left',
    defaultChecked: true
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email notifications',
    labelPosition: 'right',
    defaultChecked: false
  }
}`,...I.parameters?.docs?.source}}},L=[`DefaultOff`,`DefaultOn`,`Controlled`,`Sizes`,`Disabled`,`WithLabelLeft`,`WithLabelRight`]}))();export{M as Controlled,A as DefaultOff,j as DefaultOn,P as Disabled,N as Sizes,F as WithLabelLeft,I as WithLabelRight,L as __namedExportsOrder,k as default};