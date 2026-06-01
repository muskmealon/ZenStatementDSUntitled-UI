import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,t as r}from"./iframe-CximP2yJ.js";import{I as i,M as a,P as o,et as s,i as c,m as l,t as u,v as d}from"./lucide-react-D3bSSQyV.js";var f,p,m,h,g,_,v,y,b,x=e((()=>{f=`_list_1brrg_3`,p=`_item_1brrg_17`,m=`_separator_1brrg_24`,h=`_link_1brrg_32`,g=`_current_1brrg_54`,_=`_text_1brrg_63`,v=`_icon_1brrg_72`,y=`_ellipsisButton_1brrg_79`,b={list:f,item:p,separator:m,link:h,current:g,text:_,icon:v,ellipsisButton:y}}));function S({items:e,separator:t=(0,w.jsx)(s,{size:14,"aria-hidden":`true`}),maxItems:n}){let[r,i]=(0,C.useState)(!1),a=!r&&n!==void 0&&e.length>n,o;if(a&&n!==void 0){let t=n-1,r=e.slice(0,1),i=e.slice(e.length-t);o=[...r,T,...i]}else o=e;return(0,w.jsx)(`nav`,{"aria-label":`breadcrumb`,children:(0,w.jsx)(`ol`,{className:b.list,children:o.map((e,n)=>{let r=n===o.length-1,a=e===T;return(0,w.jsxs)(`li`,{className:b.item,children:[n>0&&(0,w.jsx)(`span`,{className:b.separator,children:t}),a?(0,w.jsx)(`button`,{type:`button`,className:b.ellipsisButton,onClick:()=>i(!0),"aria-label":`Show all breadcrumb items`,children:`…`}):r?(0,w.jsxs)(`span`,{className:b.current,"aria-current":`page`,children:[e.icon&&(0,w.jsx)(`span`,{className:b.icon,children:e.icon}),e.label]}):e.href?(0,w.jsxs)(`a`,{href:e.href,className:b.link,children:[e.icon&&(0,w.jsx)(`span`,{className:b.icon,children:e.icon}),e.label]}):(0,w.jsxs)(`span`,{className:b.text,children:[e.icon&&(0,w.jsx)(`span`,{className:b.icon,children:e.icon}),e.label]})]},a?`ellipsis`:e.label+n)})})})}var C,w,T,E=e((()=>{C=t(n(),1),u(),x(),w=r(),T=`__ellipsis__`,S.__docgenInfo={description:``,methods:[],displayName:`Breadcrumb`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`BreadcrumbItem`}],raw:`BreadcrumbItem[]`},description:``},separator:{required:!1,tsType:{name:`ReactNode`},description:``,defaultValue:{value:`<ChevronRight size={14} aria-hidden="true" />`,computed:!1}},maxItems:{required:!1,tsType:{name:`number`},description:``}}}})),D,O,k,A,j,M,N,P,F,I;e((()=>{u(),E(),D=r(),O={title:`Components/Breadcrumb`,component:S,parameters:{layout:`padded`,docs:{description:{component:`Navigation breadcrumb. Supports links, icons, custom separators, and middle-item collapse via maxItems. Last item always renders as the current-page indicator.`}}}},k={render:()=>(0,D.jsx)(S,{items:[{label:`Home`,href:`/`},{label:`Settings`,href:`/settings`},{label:`Account`,href:`/settings/account`},{label:`Security`}]})},A={render:()=>(0,D.jsx)(S,{items:[{label:`Home`,href:`/`,icon:(0,D.jsx)(a,{size:14})},{label:`Users`,href:`/users`,icon:(0,D.jsx)(c,{size:14})},{label:`Documents`,href:`/users/documents`,icon:(0,D.jsx)(o,{size:14})},{label:`Report Q4`,icon:(0,D.jsx)(i,{size:14})}]})},j={name:`Collapsed (maxItems=3)`,render:()=>(0,D.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`p`,{style:{marginBottom:`8px`,fontSize:`13px`,color:`#526B7B`},children:`6 items, maxItems=3 — click … to expand`}),(0,D.jsx)(S,{maxItems:3,items:[{label:`Home`,href:`/`},{label:`Organization`,href:`/org`},{label:`Projects`,href:`/org/projects`},{label:`Alpha`,href:`/org/projects/alpha`},{label:`Design`,href:`/org/projects/alpha/design`},{label:`Tokens`}]})]}),(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`p`,{style:{marginBottom:`8px`,fontSize:`13px`,color:`#526B7B`},children:`4 items, maxItems=3`}),(0,D.jsx)(S,{maxItems:3,items:[{label:`Home`,href:`/`},{label:`Settings`,href:`/settings`},{label:`Permissions`,href:`/settings/permissions`},{label:`Roles`}]})]})]})},M={render:()=>(0,D.jsx)(S,{items:[{label:`Dashboard`},{label:`Analytics`},{label:`Revenue`},{label:`Monthly Report`}]})},N={render:()=>(0,D.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,D.jsx)(S,{separator:(0,D.jsx)(l,{size:14}),items:[{label:`Home`,href:`/`},{label:`Components`,href:`/components`},{label:`Breadcrumb`}]}),(0,D.jsx)(S,{separator:(0,D.jsx)(s,{size:12}),items:[{label:`Home`,href:`/`},{label:`Settings`,href:`/settings`},{label:`Profile`}]}),(0,D.jsx)(S,{separator:(0,D.jsx)(`span`,{style:{color:`#748FA1`,fontSize:`14px`},children:`/`}),items:[{label:`Home`,href:`/`},{label:`Library`,href:`/lib`},{label:`Icons`}]})]})},P={render:()=>(0,D.jsx)(S,{items:[{label:`Dashboard`}]})},F={render:()=>(0,D.jsx)(S,{items:[{label:`Home`,href:`/`,icon:(0,D.jsx)(a,{size:14})},{label:`Settings`,href:`/settings`,icon:(0,D.jsx)(d,{size:14})},{label:`Security`}]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb items={[{
    label: 'Home',
    href: '/'
  }, {
    label: 'Settings',
    href: '/settings'
  }, {
    label: 'Account',
    href: '/settings/account'
  }, {
    label: 'Security'
  }]} />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb items={[{
    label: 'Home',
    href: '/',
    icon: <Home size={14} />
  }, {
    label: 'Users',
    href: '/users',
    icon: <Users size={14} />
  }, {
    label: 'Documents',
    href: '/users/documents',
    icon: <FolderOpen size={14} />
  }, {
    label: 'Report Q4',
    icon: <FileText size={14} />
  }]} />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Collapsed (maxItems=3)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <p style={{
        marginBottom: '8px',
        fontSize: '13px',
        color: '#526B7B'
      }}>
          6 items, maxItems=3 — click &hellip; to expand
        </p>
        <Breadcrumb maxItems={3} items={[{
        label: 'Home',
        href: '/'
      }, {
        label: 'Organization',
        href: '/org'
      }, {
        label: 'Projects',
        href: '/org/projects'
      }, {
        label: 'Alpha',
        href: '/org/projects/alpha'
      }, {
        label: 'Design',
        href: '/org/projects/alpha/design'
      }, {
        label: 'Tokens'
      }]} />
      </div>
      <div>
        <p style={{
        marginBottom: '8px',
        fontSize: '13px',
        color: '#526B7B'
      }}>
          4 items, maxItems=3
        </p>
        <Breadcrumb maxItems={3} items={[{
        label: 'Home',
        href: '/'
      }, {
        label: 'Settings',
        href: '/settings'
      }, {
        label: 'Permissions',
        href: '/settings/permissions'
      }, {
        label: 'Roles'
      }]} />
      </div>
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb items={[{
    label: 'Dashboard'
  }, {
    label: 'Analytics'
  }, {
    label: 'Revenue'
  }, {
    label: 'Monthly Report'
  }]} />
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Breadcrumb separator={<Slash size={14} />} items={[{
      label: 'Home',
      href: '/'
    }, {
      label: 'Components',
      href: '/components'
    }, {
      label: 'Breadcrumb'
    }]} />
      <Breadcrumb separator={<ChevronRight size={12} />} items={[{
      label: 'Home',
      href: '/'
    }, {
      label: 'Settings',
      href: '/settings'
    }, {
      label: 'Profile'
    }]} />
      <Breadcrumb separator={<span style={{
      color: '#748FA1',
      fontSize: '14px'
    }}>/</span>} items={[{
      label: 'Home',
      href: '/'
    }, {
      label: 'Library',
      href: '/lib'
    }, {
      label: 'Icons'
    }]} />
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb items={[{
    label: 'Dashboard'
  }]} />
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb items={[{
    label: 'Home',
    href: '/',
    icon: <Home size={14} />
  }, {
    label: 'Settings',
    href: '/settings',
    icon: <Settings size={14} />
  }, {
    label: 'Security'
  }]} />
}`,...F.parameters?.docs?.source}}},I=[`Default`,`WithIcons`,`Collapsed`,`NoLinks`,`CustomSeparator`,`SingleItem`,`SettingsFlow`]}))();export{j as Collapsed,N as CustomSeparator,k as Default,M as NoLinks,F as SettingsFlow,P as SingleItem,A as WithIcons,I as __namedExportsOrder,O as default};