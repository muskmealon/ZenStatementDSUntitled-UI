import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./iframe-CximP2yJ.js";import{a as n,i as r,s as i}from"./TokenDocs-BJlAgY7q.js";var a,o,s,c,l;e((()=>{i(),a=t(),o={title:`Atoms/Spacing`,parameters:{layout:`fullscreen`,controls:{disable:!0},actions:{disable:!0}}},s={name:`Spacing Scale`,render:()=>(0,a.jsxs)(r,{title:`Spacing`,children:[(0,a.jsx)(`p`,{style:{fontSize:14,color:`var(--color-text-secondary)`,marginBottom:24},children:`All spacing values are based on a 4px base unit. Use these tokens for padding, margin, and gap.`}),(0,a.jsx)(`div`,{style:{maxWidth:560},children:[0,2,4,6,8,10,12,14,16,20,24,28,32,36,40,44,48,56,64,72,80].map(e=>(0,a.jsx)(n,{value:e},e))})]})},c={name:`Size Scale`,render:()=>(0,a.jsxs)(r,{title:`Size Scale`,children:[(0,a.jsx)(`p`,{style:{fontSize:14,color:`var(--color-text-secondary)`,marginBottom:24},children:`Fixed pixel sizes for component heights, icon sizes, and fixed-dimension elements.`}),(0,a.jsx)(`div`,{children:[0,2,4,6,8,10,12,14,16,20,24,28,32,36,40,44,48,56,64,72,80,160,240,320,640].map(e=>{let t=`--size-${e}`;return(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16,padding:`6px 0`,borderBottom:`1px solid var(--color-border-light)`},children:[(0,a.jsxs)(`div`,{style:{width:48,fontFamily:`IBM Plex Mono, monospace`,fontSize:12,color:`var(--color-text-muted)`,textAlign:`right`,flexShrink:0},children:[e,`px`]}),(0,a.jsx)(`div`,{style:{height:8,width:`min(var(${t}), 600px)`,minWidth:e===0?0:2,background:`var(--color-surface-brand-secondary-subtle)`,borderRadius:2,flexShrink:0}}),(0,a.jsx)(`div`,{style:{fontFamily:`IBM Plex Mono, monospace`,fontSize:11,color:`var(--color-text-muted)`},children:t})]},e)})})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Spacing Scale',
  render: () => <Section title="Spacing">
      <p style={{
      fontSize: 14,
      color: 'var(--color-text-secondary)',
      marginBottom: 24
    }}>
        All spacing values are based on a 4px base unit. Use these tokens for padding, margin, and gap.
      </p>
      <div style={{
      maxWidth: 560
    }}>
        {[0, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64, 72, 80].map(v => <SpacingSwatch key={v} value={v} />)}
      </div>
    </Section>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Size Scale',
  render: () => <Section title="Size Scale">
      <p style={{
      fontSize: 14,
      color: 'var(--color-text-secondary)',
      marginBottom: 24
    }}>
        Fixed pixel sizes for component heights, icon sizes, and fixed-dimension elements.
      </p>
      <div>
        {[0, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64, 72, 80, 160, 240, 320, 640].map(v => {
        const token = \`--size-\${v}\`;
        return <div key={v} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '6px 0',
          borderBottom: '1px solid var(--color-border-light)'
        }}>
              <div style={{
            width: 48,
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: 12,
            color: 'var(--color-text-muted)',
            textAlign: 'right',
            flexShrink: 0
          }}>
                {v}px
              </div>
              <div style={{
            height: 8,
            width: \`min(var(\${token}), 600px)\`,
            minWidth: v === 0 ? 0 : 2,
            background: 'var(--color-surface-brand-secondary-subtle)',
            borderRadius: 2,
            flexShrink: 0
          }} />
              <div style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: 11,
            color: 'var(--color-text-muted)'
          }}>{token}</div>
            </div>;
      })}
      </div>
    </Section>
}`,...c.parameters?.docs?.source}}},l=[`SpacingScale`,`SizeScale`]}))();export{c as SizeScale,s as SpacingScale,l as __namedExportsOrder,o as default};