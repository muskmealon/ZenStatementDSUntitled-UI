import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./iframe-CximP2yJ.js";var n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x=e((()=>{n=`_avatar_501yv_2`,r=`_xs_501yv_14`,i=`_sm_501yv_19`,a=`_md_501yv_24`,o=`_lg_501yv_29`,s=`_xl_501yv_34`,c=`_circle_501yv_40`,l=`_image_501yv_44`,u=`_initials_501yv_45`,d=`_square_501yv_49`,f=`_statusDot_501yv_90`,p=`_status-online_501yv_124`,m=`_status-offline_501yv_125`,h=`_status-busy_501yv_126`,g=`_status-away_501yv_127`,_=`_group_501yv_130`,v=`_groupItem_501yv_136`,y=`_overflow_501yv_147`,b={avatar:n,xs:r,sm:i,md:a,lg:o,xl:s,circle:c,image:l,initials:u,square:d,statusDot:f,"status-online":`_status-online_501yv_124`,statusOnline:p,"status-offline":`_status-offline_501yv_125`,statusOffline:m,"status-busy":`_status-busy_501yv_126`,statusBusy:h,"status-away":`_status-away_501yv_127`,statusAway:g,group:_,groupItem:v,overflow:y}}));function S(e){let t=e.trim().split(/\s+/).filter(Boolean);return t.length===0?`?`:t.length===1?t[0][0].toUpperCase():(t[0][0]+t[t.length-1][0]).toUpperCase()}function C(e){return e?D[e.charCodeAt(0)%D.length]:D[0]}function w({src:e,alt:t,name:n,size:r=`md`,shape:i=`circle`,status:a,className:o}){let s=[b.avatar,b[r],b[i],o].filter(Boolean).join(` `),c=n?S(n):`?`,l=n?C(n):`#748FA1`;return(0,E.jsxs)(`span`,{className:s,"aria-label":t??n,children:[e?(0,E.jsx)(`img`,{src:e,alt:t??n??``,className:b.image,draggable:!1}):(0,E.jsx)(`span`,{className:b.initials,style:{backgroundColor:l},"aria-hidden":!0,children:c}),a&&(0,E.jsx)(`span`,{className:[b.statusDot,b[`status-${a}`]].filter(Boolean).join(` `),"aria-label":`Status: ${a}`})]})}function T({children:e,max:t,size:n=`md`,className:r}){let i=Array.isArray(e)?e:e?[e]:[],a=t===void 0?i:i.slice(0,t),o=t===void 0?0:i.length-t;return(0,E.jsxs)(`div`,{className:[b.group,r].filter(Boolean).join(` `),children:[a.map((e,t)=>(0,E.jsx)(`span`,{className:b.groupItem,children:e},t)),o>0&&(0,E.jsx)(`span`,{className:[b.avatar,b[n],b.circle,b.overflow].filter(Boolean).join(` `),"aria-label":`${o} more`,children:(0,E.jsxs)(`span`,{className:b.initials,style:{backgroundColor:`#748FA1`},"aria-hidden":!0,children:[`+`,o]})})]})}var E,D,O=e((()=>{x(),E=t(),D=[`#377E7F`,`#2F26C9`,`#3491F4`,`#2EA5FA`,`#5FC96F`,`#FF7429`],w.__docgenInfo={description:``,methods:[],displayName:`Avatar`,props:{src:{required:!1,tsType:{name:`string`},description:``},alt:{required:!1,tsType:{name:`string`},description:``},name:{required:!1,tsType:{name:`string`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,elements:[{name:`literal`,value:`'xs'`},{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`},{name:`literal`,value:`'xl'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},shape:{required:!1,tsType:{name:`union`,raw:`'circle' | 'square'`,elements:[{name:`literal`,value:`'circle'`},{name:`literal`,value:`'square'`}]},description:``,defaultValue:{value:`'circle'`,computed:!1}},status:{required:!1,tsType:{name:`union`,raw:`'online' | 'offline' | 'busy' | 'away'`,elements:[{name:`literal`,value:`'online'`},{name:`literal`,value:`'offline'`},{name:`literal`,value:`'busy'`},{name:`literal`,value:`'away'`}]},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},T.__docgenInfo={description:``,methods:[],displayName:`AvatarGroup`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},max:{required:!1,tsType:{name:`number`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,elements:[{name:`literal`,value:`'xs'`},{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`},{name:`literal`,value:`'xl'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),k,A,j,M,N,P,F,I,L;e((()=>{O(),k=t(),A={title:`Components/Avatar`,component:w,parameters:{layout:`centered`,docs:{description:{component:`User identity component. Renders an image, generated initials with deterministic color, optional status indicator, and group stacking.`}}},argTypes:{size:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`]},shape:{control:`select`,options:[`circle`,`square`]},status:{control:`select`,options:[void 0,`online`,`offline`,`busy`,`away`]}},args:{name:`John Doe`,size:`md`,shape:`circle`}},j={name:`With image`,args:{src:`https://i.pravatar.cc/150?img=47`,alt:`Jane Smith`,name:`Jane Smith`}},M={name:`Initials (no image)`,render:()=>(0,k.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,k.jsx)(w,{name:`John Doe`}),(0,k.jsx)(w,{name:`Alice Wang`}),(0,k.jsx)(w,{name:`Bob`}),(0,k.jsx)(w,{name:`Carlos Ruiz`}),(0,k.jsx)(w,{name:`Diana Prince`}),(0,k.jsx)(w,{name:`Evan Hart`})]})},N={render:()=>(0,k.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,k.jsx)(w,{name:`John Doe`,size:`xs`}),(0,k.jsx)(w,{name:`John Doe`,size:`sm`}),(0,k.jsx)(w,{name:`John Doe`,size:`md`}),(0,k.jsx)(w,{name:`John Doe`,size:`lg`}),(0,k.jsx)(w,{name:`John Doe`,size:`xl`})]})},P={name:`With status`,render:()=>(0,k.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,k.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,k.jsx)(w,{name:`Alice Wang`,status:`online`}),(0,k.jsx)(`span`,{style:{fontSize:11,color:`#748FA1`,fontFamily:`IBM Plex Sans, sans-serif`},children:`Online`})]}),(0,k.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,k.jsx)(w,{name:`Bob Lee`,status:`offline`}),(0,k.jsx)(`span`,{style:{fontSize:11,color:`#748FA1`,fontFamily:`IBM Plex Sans, sans-serif`},children:`Offline`})]}),(0,k.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,k.jsx)(w,{name:`Carlos Ruiz`,status:`busy`}),(0,k.jsx)(`span`,{style:{fontSize:11,color:`#748FA1`,fontFamily:`IBM Plex Sans, sans-serif`},children:`Busy`})]}),(0,k.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,k.jsx)(w,{name:`Diana Prince`,status:`away`}),(0,k.jsx)(`span`,{style:{fontSize:11,color:`#748FA1`,fontFamily:`IBM Plex Sans, sans-serif`},children:`Away`})]})]})},F={name:`Square shape`,render:()=>(0,k.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,k.jsx)(w,{name:`John Doe`,shape:`square`,size:`xs`}),(0,k.jsx)(w,{name:`John Doe`,shape:`square`,size:`sm`}),(0,k.jsx)(w,{name:`John Doe`,shape:`square`,size:`md`}),(0,k.jsx)(w,{name:`John Doe`,shape:`square`,size:`lg`}),(0,k.jsx)(w,{name:`John Doe`,shape:`square`,size:`xl`})]})},I={name:`Avatar group`,render:()=>(0,k.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:20},children:[(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`p`,{style:{marginBottom:8,fontSize:12,color:`#748FA1`,fontFamily:`IBM Plex Sans, sans-serif`},children:`Group — 4 members`}),(0,k.jsxs)(T,{children:[(0,k.jsx)(w,{name:`Alice Wang`,size:`sm`}),(0,k.jsx)(w,{name:`Bob Lee`,size:`sm`}),(0,k.jsx)(w,{name:`Carlos Ruiz`,size:`sm`}),(0,k.jsx)(w,{name:`Diana Prince`,size:`sm`})]})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`p`,{style:{marginBottom:8,fontSize:12,color:`#748FA1`,fontFamily:`IBM Plex Sans, sans-serif`},children:`Group — max 3 visible (+2 overflow)`}),(0,k.jsxs)(T,{max:3,size:`sm`,children:[(0,k.jsx)(w,{name:`Alice Wang`,size:`sm`}),(0,k.jsx)(w,{name:`Bob Lee`,size:`sm`}),(0,k.jsx)(w,{name:`Carlos Ruiz`,size:`sm`}),(0,k.jsx)(w,{name:`Diana Prince`,size:`sm`}),(0,k.jsx)(w,{name:`Evan Hart`,size:`sm`})]})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`p`,{style:{marginBottom:8,fontSize:12,color:`#748FA1`,fontFamily:`IBM Plex Sans, sans-serif`},children:`Group with images`}),(0,k.jsxs)(T,{max:4,size:`md`,children:[(0,k.jsx)(w,{src:`https://i.pravatar.cc/150?img=1`,alt:`Person 1`,size:`md`}),(0,k.jsx)(w,{src:`https://i.pravatar.cc/150?img=2`,alt:`Person 2`,size:`md`}),(0,k.jsx)(w,{src:`https://i.pravatar.cc/150?img=3`,alt:`Person 3`,size:`md`}),(0,k.jsx)(w,{name:`Diana Prince`,size:`md`}),(0,k.jsx)(w,{name:`Evan Hart`,size:`md`}),(0,k.jsx)(w,{name:`Fiona Green`,size:`md`})]})]})]})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'With image',
  args: {
    src: 'https://i.pravatar.cc/150?img=47',
    alt: 'Jane Smith',
    name: 'Jane Smith'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Initials (no image)',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      <Avatar name="John Doe" />
      <Avatar name="Alice Wang" />
      <Avatar name="Bob" />
      <Avatar name="Carlos Ruiz" />
      <Avatar name="Diana Prince" />
      <Avatar name="Evan Hart" />
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      <Avatar name="John Doe" size="xs" />
      <Avatar name="John Doe" size="sm" />
      <Avatar name="John Doe" size="md" />
      <Avatar name="John Doe" size="lg" />
      <Avatar name="John Doe" size="xl" />
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'With status',
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }}>
        <Avatar name="Alice Wang" status="online" />
        <span style={{
        fontSize: 11,
        color: '#748FA1',
        fontFamily: 'IBM Plex Sans, sans-serif'
      }}>Online</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }}>
        <Avatar name="Bob Lee" status="offline" />
        <span style={{
        fontSize: 11,
        color: '#748FA1',
        fontFamily: 'IBM Plex Sans, sans-serif'
      }}>Offline</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }}>
        <Avatar name="Carlos Ruiz" status="busy" />
        <span style={{
        fontSize: 11,
        color: '#748FA1',
        fontFamily: 'IBM Plex Sans, sans-serif'
      }}>Busy</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }}>
        <Avatar name="Diana Prince" status="away" />
        <span style={{
        fontSize: 11,
        color: '#748FA1',
        fontFamily: 'IBM Plex Sans, sans-serif'
      }}>Away</span>
      </div>
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Square shape',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      <Avatar name="John Doe" shape="square" size="xs" />
      <Avatar name="John Doe" shape="square" size="sm" />
      <Avatar name="John Doe" shape="square" size="md" />
      <Avatar name="John Doe" shape="square" size="lg" />
      <Avatar name="John Doe" shape="square" size="xl" />
    </div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Avatar group',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  }}>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#748FA1',
        fontFamily: 'IBM Plex Sans, sans-serif'
      }}>
          Group — 4 members
        </p>
        <AvatarGroup>
          <Avatar name="Alice Wang" size="sm" />
          <Avatar name="Bob Lee" size="sm" />
          <Avatar name="Carlos Ruiz" size="sm" />
          <Avatar name="Diana Prince" size="sm" />
        </AvatarGroup>
      </div>

      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#748FA1',
        fontFamily: 'IBM Plex Sans, sans-serif'
      }}>
          Group — max 3 visible (+2 overflow)
        </p>
        <AvatarGroup max={3} size="sm">
          <Avatar name="Alice Wang" size="sm" />
          <Avatar name="Bob Lee" size="sm" />
          <Avatar name="Carlos Ruiz" size="sm" />
          <Avatar name="Diana Prince" size="sm" />
          <Avatar name="Evan Hart" size="sm" />
        </AvatarGroup>
      </div>

      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#748FA1',
        fontFamily: 'IBM Plex Sans, sans-serif'
      }}>
          Group with images
        </p>
        <AvatarGroup max={4} size="md">
          <Avatar src="https://i.pravatar.cc/150?img=1" alt="Person 1" size="md" />
          <Avatar src="https://i.pravatar.cc/150?img=2" alt="Person 2" size="md" />
          <Avatar src="https://i.pravatar.cc/150?img=3" alt="Person 3" size="md" />
          <Avatar name="Diana Prince" size="md" />
          <Avatar name="Evan Hart" size="md" />
          <Avatar name="Fiona Green" size="md" />
        </AvatarGroup>
      </div>
    </div>
}`,...I.parameters?.docs?.source}}},L=[`WithImage`,`Initials`,`Sizes`,`WithStatus`,`SquareShape`,`AvatarGroupStory`]}))();export{I as AvatarGroupStory,M as Initials,N as Sizes,F as SquareShape,j as WithImage,P as WithStatus,L as __namedExportsOrder,A as default};