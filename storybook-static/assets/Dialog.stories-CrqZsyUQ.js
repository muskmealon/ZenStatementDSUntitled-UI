import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,t as r}from"./iframe-CximP2yJ.js";import{C as i,_ as a,g as o,t as s}from"./exports-Dq5Z-bK0.js";import{n as c,t as l}from"./lucide-react-D3bSSQyV.js";import{n as u,t as d}from"./Button-Cm4ZEXZm.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k=e((()=>{f=`_overlay_8vmpr_24`,p=`_overlayIn_8vmpr_1`,m=`_panel_8vmpr_37`,h=`_dialogIn_8vmpr_1`,g=`_sm_8vmpr_52`,_=`_md_8vmpr_56`,v=`_lg_8vmpr_60`,y=`_xl_8vmpr_64`,b=`_header_8vmpr_69`,x=`_headerText_8vmpr_80`,S=`_title_8vmpr_87`,C=`_subtitle_8vmpr_95`,w=`_closeButton_8vmpr_103`,T=`_body_8vmpr_129`,E=`_bodyScrollable_8vmpr_137`,D=`_footer_8vmpr_143`,O={overlay:f,overlayIn:p,panel:m,dialogIn:h,sm:g,md:_,lg:v,xl:y,header:b,headerText:x,title:S,subtitle:C,closeButton:w,body:T,bodyScrollable:E,footer:D}}));function A({open:e,onClose:t,size:n=`md`,children:r,closeOnOverlayClick:s=!0}){return(0,P.jsx)(a,{isOpen:e,onOpenChange:e=>{e||t()},isDismissable:s,className:O.overlay,children:(0,P.jsx)(o,{className:[O.panel,O[n]].join(` `),children:(0,P.jsx)(i,{"aria-label":`Dialog`,children:r})})})}function j({title:e,subtitle:t,onClose:n}){return(0,P.jsxs)(`div`,{className:O.header,children:[(0,P.jsxs)(`div`,{className:O.headerText,children:[(0,P.jsx)(`h2`,{className:O.title,children:e}),t&&(0,P.jsx)(`p`,{className:O.subtitle,children:t})]}),n&&(0,P.jsx)(`button`,{className:O.closeButton,onClick:n,"aria-label":`Close dialog`,type:`button`,children:(0,P.jsx)(c,{size:18})})]})}function M({children:e,scrollable:t=!1}){return(0,P.jsx)(`div`,{className:[O.body,t&&O.bodyScrollable].filter(Boolean).join(` `),children:e})}function N({children:e}){return(0,P.jsx)(`div`,{className:O.footer,children:e})}var P,F=e((()=>{s(),l(),k(),P=r(),A.__docgenInfo={description:``,methods:[],displayName:`Dialog`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg' | 'xl'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`},{name:`literal`,value:`'xl'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``},closeOnOverlayClick:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}}},j.__docgenInfo={description:``,methods:[],displayName:`DialogHeader`,props:{title:{required:!0,tsType:{name:`string`},description:``},subtitle:{required:!1,tsType:{name:`string`},description:``},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}},M.__docgenInfo={description:``,methods:[],displayName:`DialogBody`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},scrollable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}},N.__docgenInfo={description:``,methods:[],displayName:`DialogFooter`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})),I,L,R,z,B,V,H,U;e((()=>{I=t(n(),1),F(),u(),L=r(),R={title:`Components/Dialog`,component:A,parameters:{layout:`centered`,docs:{description:{component:`Modal dialog rendered via React portal to document.body. Supports focus trapping, Escape to close, overlay click to close, and body scroll lock.`}}}},z={render:()=>{let[e,t]=(0,I.useState)(!1);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(d,{onClick:()=>t(!0),children:`Open Dialog`}),(0,L.jsxs)(A,{open:e,onClose:()=>t(!1),children:[(0,L.jsx)(j,{title:`Confirm action`,subtitle:`This action cannot be undone. Please review before continuing.`,onClose:()=>t(!1)}),(0,L.jsx)(M,{children:(0,L.jsx)(`p`,{children:`Are you sure you want to proceed? All associated data will be permanently removed from the system and cannot be recovered.`})}),(0,L.jsxs)(N,{children:[(0,L.jsx)(d,{variant:`ghost`,onClick:()=>t(!1),children:`Cancel`}),(0,L.jsx)(d,{variant:`danger`,onClick:()=>t(!1),children:`Confirm Delete`})]})]})]})}},B={render:()=>{let[e,t]=(0,I.useState)(null);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`},children:[`sm`,`md`,`lg`,`xl`].map(e=>(0,L.jsxs)(d,{variant:`secondary`,onClick:()=>t(e),children:[`Open `,e.toUpperCase()]},e))}),[`sm`,`md`,`lg`,`xl`].map(n=>(0,L.jsxs)(A,{open:e===n,onClose:()=>t(null),size:n,children:[(0,L.jsx)(j,{title:`${n.toUpperCase()} Dialog`,subtitle:`Max-width: ${n===`sm`?`400px`:n===`md`?`560px`:n===`lg`?`720px`:`900px`}`,onClose:()=>t(null)}),(0,L.jsx)(M,{children:(0,L.jsxs)(`p`,{children:[`This is the `,(0,L.jsx)(`strong`,{children:n}),` size variant of the Dialog component. Each size maps to a different max-width using design system size tokens.`]})}),(0,L.jsxs)(N,{children:[(0,L.jsx)(d,{variant:`ghost`,onClick:()=>t(null),children:`Cancel`}),(0,L.jsx)(d,{onClick:()=>t(null),children:`OK`})]})]},n))]})}},V={render:()=>{let[e,t]=(0,I.useState)(!1);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(d,{onClick:()=>t(!0),children:`Open Scrollable Dialog`}),(0,L.jsxs)(A,{open:e,onClose:()=>t(!1),children:[(0,L.jsx)(j,{title:`Terms and Conditions`,subtitle:`Please read carefully before accepting.`,onClose:()=>t(!1)}),(0,L.jsx)(M,{scrollable:!0,children:Array.from({length:12},(e,t)=>(0,L.jsx)(`p`,{style:{marginTop:t===0?0:`12px`},children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`},t))}),(0,L.jsxs)(N,{children:[(0,L.jsx)(d,{variant:`ghost`,onClick:()=>t(!1),children:`Decline`}),(0,L.jsx)(d,{onClick:()=>t(!1),children:`Accept`})]})]})]})}},H={render:()=>{let[e,t]=(0,I.useState)(!1);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(d,{onClick:()=>t(!0),children:`Open (no overlay close)`}),(0,L.jsxs)(A,{open:e,onClose:()=>t(!1),closeOnOverlayClick:!1,children:[(0,L.jsx)(j,{title:`Required action`,subtitle:`You must choose an option to continue.`,onClose:()=>t(!1)}),(0,L.jsx)(M,{children:(0,L.jsx)(`p`,{children:`Clicking outside this dialog will not close it. Use the buttons below or the X icon to dismiss. This is useful for critical confirmation flows where accidental dismissal should be prevented.`})}),(0,L.jsxs)(N,{children:[(0,L.jsx)(d,{variant:`ghost`,onClick:()=>t(!1),children:`Cancel`}),(0,L.jsx)(d,{onClick:()=>t(!1),children:`Confirm`})]})]})]})}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogHeader title="Confirm action" subtitle="This action cannot be undone. Please review before continuing." onClose={() => setOpen(false)} />
          <DialogBody>
            <p>
              Are you sure you want to proceed? All associated data will be permanently removed from
              the system and cannot be recovered.
            </p>
          </DialogBody>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => setOpen(false)}>
              Confirm Delete
            </Button>
          </DialogFooter>
        </Dialog>
      </>;
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeSize, setActiveSize] = useState<'sm' | 'md' | 'lg' | 'xl' | null>(null);
    return <>
        <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
          {(['sm', 'md', 'lg', 'xl'] as const).map(size => <Button key={size} variant="secondary" onClick={() => setActiveSize(size)}>
              Open {size.toUpperCase()}
            </Button>)}
        </div>
        {(['sm', 'md', 'lg', 'xl'] as const).map(size => <Dialog key={size} open={activeSize === size} onClose={() => setActiveSize(null)} size={size}>
            <DialogHeader title={\`\${size.toUpperCase()} Dialog\`} subtitle={\`Max-width: \${size === 'sm' ? '400px' : size === 'md' ? '560px' : size === 'lg' ? '720px' : '900px'}\`} onClose={() => setActiveSize(null)} />
            <DialogBody>
              <p>
                This is the <strong>{size}</strong> size variant of the Dialog component. Each size
                maps to a different max-width using design system size tokens.
              </p>
            </DialogBody>
            <DialogFooter>
              <Button variant="ghost" onClick={() => setActiveSize(null)}>
                Cancel
              </Button>
              <Button onClick={() => setActiveSize(null)}>OK</Button>
            </DialogFooter>
          </Dialog>)}
      </>;
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Scrollable Dialog</Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogHeader title="Terms and Conditions" subtitle="Please read carefully before accepting." onClose={() => setOpen(false)} />
          <DialogBody scrollable>
            {Array.from({
            length: 12
          }, (_, i) => <p key={i} style={{
            marginTop: i === 0 ? 0 : '12px'
          }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>)}
          </DialogBody>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Decline
            </Button>
            <Button onClick={() => setOpen(false)}>Accept</Button>
          </DialogFooter>
        </Dialog>
      </>;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open (no overlay close)</Button>
        <Dialog open={open} onClose={() => setOpen(false)} closeOnOverlayClick={false}>
          <DialogHeader title="Required action" subtitle="You must choose an option to continue." onClose={() => setOpen(false)} />
          <DialogBody>
            <p>
              Clicking outside this dialog will not close it. Use the buttons below or the X icon to
              dismiss. This is useful for critical confirmation flows where accidental dismissal
              should be prevented.
            </p>
          </DialogBody>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </DialogFooter>
        </Dialog>
      </>;
  }
}`,...H.parameters?.docs?.source}}},U=[`Default`,`Sizes`,`WithScrollableBody`,`WithoutOverlayClose`]}))();export{z as Default,B as Sizes,V as WithScrollableBody,H as WithoutOverlayClose,U as __namedExportsOrder,R as default};