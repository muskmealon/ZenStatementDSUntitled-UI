import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./iframe-CximP2yJ.js";import{b as n,t as r,x as i,y as a,z as o}from"./exports-Dq5Z-bK0.js";import{nt as s,t as c}from"./lucide-react-D3bSSQyV.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C=e((()=>{l=`_accordion_urz6y_2`,u=`_item_urz6y_13`,d=`_sm_urz6y_22`,f=`_trigger_urz6y_22`,p=`_panelInner_urz6y_28`,m=`_md_urz6y_32`,h=`_lg_urz6y_42`,g=`_triggerTitle_urz6y_78`,_=`_chevron_urz6y_84`,v=`_chevronOpen_urz6y_90`,y=`_panel_urz6y_28`,b=`_panelOpen_urz6y_101`,x=`_disabled_urz6y_113`,S={accordion:l,item:u,sm:d,trigger:f,panelInner:p,md:m,lg:h,triggerTitle:g,chevron:_,chevronOpen:v,panel:y,panelOpen:b,disabled:x}}));function w({children:e,allowMultiple:t=!0,className:r}){return(0,E.jsx)(n,{allowsMultipleExpanded:t,className:[S.accordion,r].filter(Boolean).join(` `),children:e})}function T({title:e,children:t,defaultOpen:n=!1,disabled:r=!1,size:c=`md`}){return(0,E.jsx)(a,{isDisabled:r,defaultExpanded:n,className:({isDisabled:e})=>[S.item,S[c],e&&S.disabled].filter(Boolean).join(` `),children:({isExpanded:n})=>(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(o,{slot:`trigger`,className:S.trigger,children:[(0,E.jsx)(`span`,{className:S.triggerTitle,children:e}),(0,E.jsx)(s,{size:16,className:[S.chevron,n&&S.chevronOpen].filter(Boolean).join(` `),"aria-hidden":!0})]}),(0,E.jsx)(i,{className:[S.panel,n&&S.panelOpen].filter(Boolean).join(` `),children:(0,E.jsx)(`div`,{className:S.panelInner,children:t})})]})})}var E,D=e((()=>{r(),c(),C(),E=t(),w.__docgenInfo={description:``,methods:[],displayName:`Accordion`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},allowMultiple:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}},T.__docgenInfo={description:``,methods:[],displayName:`AccordionItem`,props:{title:{required:!0,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},id:{required:!1,tsType:{name:`string`},description:``}}}})),O,k,A,j,M,N,P,F,I;e((()=>{D(),O=t(),k={title:`Components/Accordion`,component:w,parameters:{layout:`padded`,docs:{description:{component:`Vertically stacked set of interactive headings that each reveal a section of content. Supports single and multi-open modes.`}}}},A={render:()=>(0,O.jsx)(`div`,{style:{maxWidth:560},children:(0,O.jsx)(w,{children:(0,O.jsx)(T,{title:`What is the Zen Design System?`,children:`The Zen Design System is a token-driven component library that ensures visual consistency across all Zen products. It provides reusable components, design tokens, and guidelines.`})})})},j={render:()=>(0,O.jsx)(`div`,{style:{maxWidth:560},children:(0,O.jsxs)(w,{children:[(0,O.jsxs)(T,{title:`Getting started`,defaultOpen:!0,children:[`Install the package and import the token stylesheet. All components consume CSS variables defined in `,(0,O.jsx)(`code`,{children:`tokens.css`}),`.`]}),(0,O.jsxs)(T,{title:`Design tokens`,children:[`Tokens are organised into color, spacing, radius, and typography categories. They are available as CSS custom properties on`,` `,(0,O.jsx)(`code`,{children:`:root`}),`.`]}),(0,O.jsxs)(T,{title:`Contributing`,children:[`Open a pull request against the `,(0,O.jsx)(`code`,{children:`main`}),` branch. Make sure your component includes a `,(0,O.jsx)(`code`,{children:`.tsx`}),`, `,(0,O.jsx)(`code`,{children:`.module.css`}),`, and `,(0,O.jsx)(`code`,{children:`.stories.tsx`}),` file.`]})]})})},M={name:`Allow multiple open`,render:()=>(0,O.jsx)(`div`,{style:{maxWidth:560},children:(0,O.jsxs)(w,{allowMultiple:!0,children:[(0,O.jsx)(T,{title:`Section A`,defaultOpen:!0,children:`Content for section A. This accordion allows multiple items to be open at the same time.`}),(0,O.jsx)(T,{title:`Section B`,defaultOpen:!0,children:`Content for section B. Both A and B start open.`}),(0,O.jsx)(T,{title:`Section C`,children:`Content for section C. Click to expand alongside A and B.`})]})})},N={name:`Single open (allowMultiple=false)`,render:()=>(0,O.jsx)(`div`,{style:{maxWidth:560},children:(0,O.jsxs)(w,{allowMultiple:!1,children:[(0,O.jsx)(T,{title:`Item one`,defaultOpen:!0,children:`Opening another item will close this one automatically.`}),(0,O.jsx)(T,{title:`Item two`,children:`Only one item can be open at a time.`}),(0,O.jsx)(T,{title:`Item three`,children:`Try opening all three — only the latest click stays open.`})]})})},P={name:`With disabled item`,render:()=>(0,O.jsx)(`div`,{style:{maxWidth:560},children:(0,O.jsxs)(w,{children:[(0,O.jsx)(T,{title:`Enabled item`,children:`This item can be toggled normally.`}),(0,O.jsx)(T,{title:`Disabled item — cannot be opened`,disabled:!0,children:`This content is unreachable.`}),(0,O.jsx)(T,{title:`Another enabled item`,children:`This item can also be toggled.`})]})})},F={render:()=>(0,O.jsxs)(`div`,{style:{maxWidth:560,display:`flex`,flexDirection:`column`,gap:24},children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`p`,{style:{marginBottom:8,fontSize:12,color:`#748FA1`,fontFamily:`IBM Plex Sans, sans-serif`},children:`Small`}),(0,O.jsx)(w,{children:(0,O.jsx)(T,{title:`Small accordion item`,size:`sm`,children:`Compact padding, smaller font. Suitable for dense UIs.`})})]}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`p`,{style:{marginBottom:8,fontSize:12,color:`#748FA1`,fontFamily:`IBM Plex Sans, sans-serif`},children:`Medium (default)`}),(0,O.jsx)(w,{children:(0,O.jsx)(T,{title:`Medium accordion item`,size:`md`,children:`Default size — balanced padding and typography.`})})]}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`p`,{style:{marginBottom:8,fontSize:12,color:`#748FA1`,fontFamily:`IBM Plex Sans, sans-serif`},children:`Large`}),(0,O.jsx)(w,{children:(0,O.jsx)(T,{title:`Large accordion item`,size:`lg`,children:`More generous padding. Great for hero FAQ sections.`})})]})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 560
  }}>
      <Accordion>
        <AccordionItem title="What is the Zen Design System?">
          The Zen Design System is a token-driven component library that ensures
          visual consistency across all Zen products. It provides reusable
          components, design tokens, and guidelines.
        </AccordionItem>
      </Accordion>
    </div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 560
  }}>
      <Accordion>
        <AccordionItem title="Getting started" defaultOpen>
          Install the package and import the token stylesheet. All components
          consume CSS variables defined in <code>tokens.css</code>.
        </AccordionItem>
        <AccordionItem title="Design tokens">
          Tokens are organised into color, spacing, radius, and typography
          categories. They are available as CSS custom properties on{' '}
          <code>:root</code>.
        </AccordionItem>
        <AccordionItem title="Contributing">
          Open a pull request against the <code>main</code> branch. Make sure
          your component includes a <code>.tsx</code>, <code>.module.css</code>,
          and <code>.stories.tsx</code> file.
        </AccordionItem>
      </Accordion>
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Allow multiple open',
  render: () => <div style={{
    maxWidth: 560
  }}>
      <Accordion allowMultiple>
        <AccordionItem title="Section A" defaultOpen>
          Content for section A. This accordion allows multiple items to be open
          at the same time.
        </AccordionItem>
        <AccordionItem title="Section B" defaultOpen>
          Content for section B. Both A and B start open.
        </AccordionItem>
        <AccordionItem title="Section C">
          Content for section C. Click to expand alongside A and B.
        </AccordionItem>
      </Accordion>
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Single open (allowMultiple=false)',
  render: () => <div style={{
    maxWidth: 560
  }}>
      <Accordion allowMultiple={false}>
        <AccordionItem title="Item one" defaultOpen>
          Opening another item will close this one automatically.
        </AccordionItem>
        <AccordionItem title="Item two">
          Only one item can be open at a time.
        </AccordionItem>
        <AccordionItem title="Item three">
          Try opening all three — only the latest click stays open.
        </AccordionItem>
      </Accordion>
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'With disabled item',
  render: () => <div style={{
    maxWidth: 560
  }}>
      <Accordion>
        <AccordionItem title="Enabled item">
          This item can be toggled normally.
        </AccordionItem>
        <AccordionItem title="Disabled item — cannot be opened" disabled>
          This content is unreachable.
        </AccordionItem>
        <AccordionItem title="Another enabled item">
          This item can also be toggled.
        </AccordionItem>
      </Accordion>
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 560,
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#748FA1',
        fontFamily: 'IBM Plex Sans, sans-serif'
      }}>Small</p>
        <Accordion>
          <AccordionItem title="Small accordion item" size="sm">
            Compact padding, smaller font. Suitable for dense UIs.
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#748FA1',
        fontFamily: 'IBM Plex Sans, sans-serif'
      }}>Medium (default)</p>
        <Accordion>
          <AccordionItem title="Medium accordion item" size="md">
            Default size — balanced padding and typography.
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#748FA1',
        fontFamily: 'IBM Plex Sans, sans-serif'
      }}>Large</p>
        <Accordion>
          <AccordionItem title="Large accordion item" size="lg">
            More generous padding. Great for hero FAQ sections.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
}`,...F.parameters?.docs?.source}}},I=[`Default`,`MultipleItems`,`AllowMultipleOpen`,`SingleOpen`,`WithDisabledItem`,`Sizes`]}))();export{M as AllowMultipleOpen,A as Default,j as MultipleItems,N as SingleOpen,F as Sizes,P as WithDisabledItem,I as __namedExportsOrder,k as default};