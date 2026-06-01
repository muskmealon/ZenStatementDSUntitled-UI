import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./iframe-CximP2yJ.js";import{i as n,r,s as i}from"./TokenDocs-BJlAgY7q.js";var a,o,s,c,l;e((()=>{i(),a=t(),o={title:`Atoms/Radius & Shape`,parameters:{layout:`fullscreen`,controls:{disable:!0},actions:{disable:!0}}},s=[{name:`0`,value:`0px`},{name:`2`,value:`2px`},{name:`4`,value:`4px`},{name:`6`,value:`6px`},{name:`8`,value:`8px`},{name:`10`,value:`10px`},{name:`12`,value:`12px`},{name:`16`,value:`16px`},{name:`20`,value:`20px`},{name:`24`,value:`24px`},{name:`rounded`,value:`9999px`}],c={name:`Radius Scale`,render:()=>(0,a.jsxs)(n,{title:`Border Radius`,children:[(0,a.jsxs)(`p`,{style:{fontSize:14,color:`var(--color-text-secondary)`,marginBottom:32},children:[`Border radius tokens used across components. `,(0,a.jsx)(`code`,{style:{fontFamily:`monospace`,fontSize:12},children:`--radius-rounded`}),` produces a full pill/circle shape.`]}),(0,a.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:32},children:s.map(e=>(0,a.jsx)(r,{name:e.name,value:e.value},e.name))})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Radius Scale',
  render: () => <Section title="Border Radius">
      <p style={{
      fontSize: 14,
      color: 'var(--color-text-secondary)',
      marginBottom: 32
    }}>
        Border radius tokens used across components. <code style={{
        fontFamily: 'monospace',
        fontSize: 12
      }}>--radius-rounded</code> produces a full pill/circle shape.
      </p>
      <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 32
    }}>
        {radii.map(r => <RadiusSwatch key={r.name} name={r.name} value={r.value} />)}
      </div>
    </Section>
}`,...c.parameters?.docs?.source}}},l=[`RadiusScale`]}))();export{c as RadiusScale,l as __namedExportsOrder,o as default};