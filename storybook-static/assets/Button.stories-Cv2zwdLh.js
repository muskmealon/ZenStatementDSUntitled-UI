import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./iframe-CximP2yJ.js";import{H as n,S as r,ct as i,t as a,u as o}from"./lucide-react-D3bSSQyV.js";import{n as s,t as c}from"./Button-Cm4ZEXZm.js";var l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{a(),s(),l=t(),u={title:`Components/Button`,component:c,parameters:{layout:`centered`,docs:{description:{component:`Core action trigger. Variants map directly to Figma semantic tokens — no hardcoded colours.`}}},argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`ghost`,`danger`,`neutral`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},fullWidth:{control:`boolean`},disabled:{control:`boolean`},children:{control:`text`}},args:{children:`Button`,variant:`primary`,size:`md`,disabled:!1,fullWidth:!1}},d={args:{variant:`primary`}},f={args:{variant:`secondary`}},p={args:{variant:`ghost`}},m={args:{variant:`danger`}},h={args:{variant:`neutral`}},g={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,l.jsx)(c,{size:`sm`,children:`Small`}),(0,l.jsx)(c,{size:`md`,children:`Medium`}),(0,l.jsx)(c,{size:`lg`,children:`Large`})]})},_={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`12px`,alignItems:`center`},children:[(0,l.jsx)(c,{leadingIcon:(0,l.jsx)(r,{size:16}),children:`Add item`}),(0,l.jsx)(c,{variant:`secondary`,trailingIcon:(0,l.jsx)(i,{size:16}),children:`Continue`}),(0,l.jsx)(c,{variant:`ghost`,leadingIcon:(0,l.jsx)(n,{size:16}),children:`Export`}),(0,l.jsx)(c,{variant:`danger`,leadingIcon:(0,l.jsx)(o,{size:16}),children:`Delete`})]})},v={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,alignItems:`center`},children:[(0,l.jsx)(c,{iconOnly:!0,size:`sm`,"aria-label":`Add`,children:(0,l.jsx)(r,{size:14})}),(0,l.jsx)(c,{iconOnly:!0,size:`md`,"aria-label":`Add`,children:(0,l.jsx)(r,{size:16})}),(0,l.jsx)(c,{iconOnly:!0,size:`lg`,"aria-label":`Add`,children:(0,l.jsx)(r,{size:18})}),(0,l.jsx)(c,{iconOnly:!0,variant:`secondary`,"aria-label":`Delete`,children:(0,l.jsx)(o,{size:16})}),(0,l.jsx)(c,{iconOnly:!0,variant:`danger`,"aria-label":`Delete`,children:(0,l.jsx)(o,{size:16})})]})},y={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,alignItems:`center`},children:[(0,l.jsx)(c,{disabled:!0,children:`Primary`}),(0,l.jsx)(c,{disabled:!0,variant:`secondary`,children:`Secondary`}),(0,l.jsx)(c,{disabled:!0,variant:`ghost`,children:`Ghost`})]})},b={render:()=>(0,l.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[`primary`,`secondary`,`ghost`,`danger`,`neutral`].map(e=>(0,l.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,alignItems:`center`},children:[(0,l.jsx)(c,{variant:e,size:`sm`,children:e}),(0,l.jsx)(c,{variant:e,size:`md`,children:e}),(0,l.jsx)(c,{variant:e,size:`lg`,children:e})]},e))})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'neutral'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Button leadingIcon={<Plus size={16} />}>Add item</Button>
      <Button variant="secondary" trailingIcon={<ArrowRight size={16} />}>Continue</Button>
      <Button variant="ghost" leadingIcon={<Download size={16} />}>Export</Button>
      <Button variant="danger" leadingIcon={<Trash2 size={16} />}>Delete</Button>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Button iconOnly size="sm" aria-label="Add"><Plus size={14} /></Button>
      <Button iconOnly size="md" aria-label="Add"><Plus size={16} /></Button>
      <Button iconOnly size="lg" aria-label="Add"><Plus size={18} /></Button>
      <Button iconOnly variant="secondary" aria-label="Delete"><Trash2 size={16} /></Button>
      <Button iconOnly variant="danger" aria-label="Delete"><Trash2 size={16} /></Button>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Button disabled>Primary</Button>
      <Button disabled variant="secondary">Secondary</Button>
      <Button disabled variant="ghost">Ghost</Button>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      {(['primary', 'secondary', 'ghost', 'danger', 'neutral'] as const).map(variant => <div key={variant} style={{
      display: 'flex',
      gap: '12px',
      alignItems: 'center'
    }}>
          <Button variant={variant} size="sm">{variant}</Button>
          <Button variant={variant} size="md">{variant}</Button>
          <Button variant={variant} size="lg">{variant}</Button>
        </div>)}
    </div>
}`,...b.parameters?.docs?.source}}},x=[`Primary`,`Secondary`,`Ghost`,`Danger`,`Neutral`,`Sizes`,`WithIcons`,`IconOnly`,`Disabled`,`AllVariants`]}))();export{b as AllVariants,m as Danger,y as Disabled,p as Ghost,v as IconOnly,h as Neutral,d as Primary,f as Secondary,g as Sizes,_ as WithIcons,x as __namedExportsOrder,u as default};