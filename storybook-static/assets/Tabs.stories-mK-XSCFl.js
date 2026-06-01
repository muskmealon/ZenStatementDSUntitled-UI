import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./iframe-CximP2yJ.js";import{a as n,c as r,o as i,s as a,t as o}from"./exports-Dq5Z-bK0.js";import{I as s,o as c,ot as l,t as u,v as d}from"./lucide-react-D3bSSQyV.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M=e((()=>{f=`_tabs_pohza_2`,p=`_tabList_pohza_9`,m=`_tabList_line_pohza_15`,h=`_tabList_line_pohza_15`,g=`_tabList_pill_pohza_21`,_=`_tabList_pill_pohza_21`,v=`_tab_pohza_2`,y=`_tab_line_pohza_52`,b=`_tab_line_pohza_52`,x=`_tab_disabled_pohza_59`,S=`_tab_disabled_pohza_59`,C=`_tab_line_active_pohza_64`,w=`_tab_line_active_pohza_64`,T=`_tab_pill_pohza_70`,E=`_tab_pill_pohza_70`,D=`_tab_pill_active_pohza_81`,O=`_tab_pill_active_pohza_81`,k=`_tabIcon_pohza_96`,A=`_tabPanel_pohza_103`,j={tabs:f,tabList:p,tabList_line:m,tabListLine:h,tabList_pill:g,tabListPill:_,tab:v,tab_line:y,tabLine:b,tab_disabled:x,tabDisabled:S,tab_line_active:C,tabLineActive:w,tab_pill:T,tabPill:E,tab_pill_active:D,tabPillActive:O,tabIcon:k,tabPanel:A}}));function N({defaultValue:e,value:t,onChange:n,children:r,variant:i=`line`}){return(0,L.jsx)(a,{selectedKey:t,defaultSelectedKey:e,onSelectionChange:e=>n?.(String(e)),className:[j.tabs,j[i]].join(` `),"data-variant":i,children:r})}function P({children:e,"aria-label":t,variant:n=`line`}){return(0,L.jsx)(r,{"aria-label":t,className:[j.tabList,j[`tabList_${n}`]].join(` `),children:e})}function F({value:e,disabled:t=!1,children:n,icon:r,variant:a=`line`}){return(0,L.jsxs)(i,{id:e,isDisabled:t,className:({isSelected:e,isDisabled:t})=>[j.tab,j[`tab_${a}`],e?j[`tab_${a}_active`]:``,t?j.tab_disabled:``].filter(Boolean).join(` `),children:[r&&(0,L.jsx)(`span`,{className:j.tabIcon,children:r}),n]})}function I({value:e,children:t}){return(0,L.jsx)(n,{id:e,className:j.tabPanel,children:t})}var L,R=e((()=>{o(),M(),L=t(),N.__docgenInfo={description:``,methods:[],displayName:`Tabs`,props:{defaultValue:{required:!1,tsType:{name:`string`},description:``},value:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'line' | 'pill'`,elements:[{name:`literal`,value:`'line'`},{name:`literal`,value:`'pill'`}]},description:``,defaultValue:{value:`'line'`,computed:!1}}}},P.__docgenInfo={description:``,methods:[],displayName:`TabList`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},"aria-label":{required:!1,tsType:{name:`string`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'line' | 'pill'`,elements:[{name:`literal`,value:`'line'`},{name:`literal`,value:`'pill'`}]},description:``,defaultValue:{value:`'line'`,computed:!1}}}},F.__docgenInfo={description:``,methods:[],displayName:`Tab`,props:{value:{required:!0,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``},icon:{required:!1,tsType:{name:`ReactNode`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'line' | 'pill'`,elements:[{name:`literal`,value:`'line'`},{name:`literal`,value:`'pill'`}]},description:``,defaultValue:{value:`'line'`,computed:!1}}}},I.__docgenInfo={description:``,methods:[],displayName:`TabPanel`,props:{value:{required:!0,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})),z,B,V,H,U,W,G,K;e((()=>{u(),R(),z=t(),B={title:`Components/Tabs`,component:N,parameters:{layout:`padded`,docs:{description:{component:`Accessible tab navigation with line and pill variants. Built with React context and ARIA roles.`}}},argTypes:{variant:{control:`select`,options:[`line`,`pill`]},defaultValue:{control:`text`}},args:{variant:`line`,defaultValue:`account`}},V={name:`Line variant`,args:{variant:`line`,defaultValue:`account`},render:e=>(0,z.jsxs)(N,{...e,children:[(0,z.jsxs)(P,{"aria-label":`Account settings`,children:[(0,z.jsx)(F,{value:`account`,children:`Account`}),(0,z.jsx)(F,{value:`security`,children:`Security`}),(0,z.jsx)(F,{value:`notifications`,children:`Notifications`})]}),(0,z.jsx)(I,{value:`account`,children:(0,z.jsx)(`p`,{children:`Manage your account details, name and email address.`})}),(0,z.jsx)(I,{value:`security`,children:(0,z.jsx)(`p`,{children:`Update your password and two-factor authentication settings.`})}),(0,z.jsx)(I,{value:`notifications`,children:(0,z.jsx)(`p`,{children:`Choose which notifications you would like to receive.`})})]})},H={name:`Pill variant`,args:{variant:`pill`,defaultValue:`overview`},render:e=>(0,z.jsxs)(N,{...e,children:[(0,z.jsxs)(P,{"aria-label":`Dashboard sections`,children:[(0,z.jsx)(F,{value:`overview`,children:`Overview`}),(0,z.jsx)(F,{value:`analytics`,children:`Analytics`}),(0,z.jsx)(F,{value:`reports`,children:`Reports`})]}),(0,z.jsx)(I,{value:`overview`,children:(0,z.jsx)(`p`,{children:`High-level overview of your workspace activity.`})}),(0,z.jsx)(I,{value:`analytics`,children:(0,z.jsx)(`p`,{children:`Detailed analytics and usage charts.`})}),(0,z.jsx)(I,{value:`reports`,children:(0,z.jsx)(`p`,{children:`Download and schedule automated reports.`})})]})},U={name:`With icons`,args:{variant:`line`,defaultValue:`profile`},render:e=>(0,z.jsxs)(N,{...e,children:[(0,z.jsxs)(P,{"aria-label":`Settings`,children:[(0,z.jsx)(F,{value:`profile`,icon:(0,z.jsx)(c,{size:15}),children:`Profile`}),(0,z.jsx)(F,{value:`notifications`,icon:(0,z.jsx)(l,{size:15}),children:`Notifications`}),(0,z.jsx)(F,{value:`documents`,icon:(0,z.jsx)(s,{size:15}),children:`Documents`}),(0,z.jsx)(F,{value:`settings`,icon:(0,z.jsx)(d,{size:15}),children:`Settings`})]}),(0,z.jsx)(I,{value:`profile`,children:(0,z.jsx)(`p`,{children:`Update your profile picture, display name, and bio.`})}),(0,z.jsx)(I,{value:`notifications`,children:(0,z.jsx)(`p`,{children:`Configure your notification preferences.`})}),(0,z.jsx)(I,{value:`documents`,children:(0,z.jsx)(`p`,{children:`View and manage your uploaded documents.`})}),(0,z.jsx)(I,{value:`settings`,children:(0,z.jsx)(`p`,{children:`Application-wide settings and preferences.`})})]})},W={name:`Disabled tab`,args:{variant:`line`,defaultValue:`active`},render:e=>(0,z.jsxs)(N,{...e,children:[(0,z.jsxs)(P,{"aria-label":`Feature tabs`,children:[(0,z.jsx)(F,{value:`active`,children:`Active`}),(0,z.jsx)(F,{value:`beta`,disabled:!0,children:`Beta (disabled)`}),(0,z.jsx)(F,{value:`archived`,children:`Archived`})]}),(0,z.jsx)(I,{value:`active`,children:(0,z.jsx)(`p`,{children:`This tab is active and fully accessible.`})}),(0,z.jsx)(I,{value:`beta`,children:(0,z.jsx)(`p`,{children:`Beta content (unreachable while disabled).`})}),(0,z.jsx)(I,{value:`archived`,children:(0,z.jsx)(`p`,{children:`Archived items are read-only.`})})]})},G={name:`Pill with icons`,args:{variant:`pill`,defaultValue:`profile`},render:e=>(0,z.jsxs)(N,{...e,children:[(0,z.jsxs)(P,{"aria-label":`User area`,children:[(0,z.jsx)(F,{value:`profile`,icon:(0,z.jsx)(c,{size:14}),children:`Profile`}),(0,z.jsx)(F,{value:`notifications`,icon:(0,z.jsx)(l,{size:14}),children:`Alerts`}),(0,z.jsx)(F,{value:`settings`,icon:(0,z.jsx)(d,{size:14}),children:`Settings`})]}),(0,z.jsx)(I,{value:`profile`,children:(0,z.jsx)(`p`,{children:`Profile panel content.`})}),(0,z.jsx)(I,{value:`notifications`,children:(0,z.jsx)(`p`,{children:`Alerts panel content.`})}),(0,z.jsx)(I,{value:`settings`,children:(0,z.jsx)(`p`,{children:`Settings panel content.`})})]})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Line variant',
  args: {
    variant: 'line',
    defaultValue: 'account'
  },
  render: args => <Tabs {...args}>
      <TabList aria-label="Account settings">
        <Tab value="account">Account</Tab>
        <Tab value="security">Security</Tab>
        <Tab value="notifications">Notifications</Tab>
      </TabList>
      <TabPanel value="account">
        <p>Manage your account details, name and email address.</p>
      </TabPanel>
      <TabPanel value="security">
        <p>Update your password and two-factor authentication settings.</p>
      </TabPanel>
      <TabPanel value="notifications">
        <p>Choose which notifications you would like to receive.</p>
      </TabPanel>
    </Tabs>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Pill variant',
  args: {
    variant: 'pill',
    defaultValue: 'overview'
  },
  render: args => <Tabs {...args}>
      <TabList aria-label="Dashboard sections">
        <Tab value="overview">Overview</Tab>
        <Tab value="analytics">Analytics</Tab>
        <Tab value="reports">Reports</Tab>
      </TabList>
      <TabPanel value="overview">
        <p>High-level overview of your workspace activity.</p>
      </TabPanel>
      <TabPanel value="analytics">
        <p>Detailed analytics and usage charts.</p>
      </TabPanel>
      <TabPanel value="reports">
        <p>Download and schedule automated reports.</p>
      </TabPanel>
    </Tabs>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'With icons',
  args: {
    variant: 'line',
    defaultValue: 'profile'
  },
  render: args => <Tabs {...args}>
      <TabList aria-label="Settings">
        <Tab value="profile" icon={<User size={15} />}>Profile</Tab>
        <Tab value="notifications" icon={<Bell size={15} />}>Notifications</Tab>
        <Tab value="documents" icon={<FileText size={15} />}>Documents</Tab>
        <Tab value="settings" icon={<Settings size={15} />}>Settings</Tab>
      </TabList>
      <TabPanel value="profile">
        <p>Update your profile picture, display name, and bio.</p>
      </TabPanel>
      <TabPanel value="notifications">
        <p>Configure your notification preferences.</p>
      </TabPanel>
      <TabPanel value="documents">
        <p>View and manage your uploaded documents.</p>
      </TabPanel>
      <TabPanel value="settings">
        <p>Application-wide settings and preferences.</p>
      </TabPanel>
    </Tabs>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Disabled tab',
  args: {
    variant: 'line',
    defaultValue: 'active'
  },
  render: args => <Tabs {...args}>
      <TabList aria-label="Feature tabs">
        <Tab value="active">Active</Tab>
        <Tab value="beta" disabled>Beta (disabled)</Tab>
        <Tab value="archived">Archived</Tab>
      </TabList>
      <TabPanel value="active">
        <p>This tab is active and fully accessible.</p>
      </TabPanel>
      <TabPanel value="beta">
        <p>Beta content (unreachable while disabled).</p>
      </TabPanel>
      <TabPanel value="archived">
        <p>Archived items are read-only.</p>
      </TabPanel>
    </Tabs>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Pill with icons',
  args: {
    variant: 'pill',
    defaultValue: 'profile'
  },
  render: args => <Tabs {...args}>
      <TabList aria-label="User area">
        <Tab value="profile" icon={<User size={14} />}>Profile</Tab>
        <Tab value="notifications" icon={<Bell size={14} />}>Alerts</Tab>
        <Tab value="settings" icon={<Settings size={14} />}>Settings</Tab>
      </TabList>
      <TabPanel value="profile"><p>Profile panel content.</p></TabPanel>
      <TabPanel value="notifications"><p>Alerts panel content.</p></TabPanel>
      <TabPanel value="settings"><p>Settings panel content.</p></TabPanel>
    </Tabs>
}`,...G.parameters?.docs?.source}}},K=[`LineVariant`,`PillVariant`,`WithIcons`,`DisabledTab`,`PillWithIcons`]}))();export{W as DisabledTab,V as LineVariant,H as PillVariant,G as PillWithIcons,U as WithIcons,K as __namedExportsOrder,B as default};