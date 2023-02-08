const formComponentNames = [
  'AutoComplete',
  'Calendar',
  'CascadeSelect',
  'Checkbox',
  'Chips',
  'ColorPicker',
  'Dropdown',
  'Editor',
  'InputMask',
  'InputNumber',
  'InputSwitch',
  'InputText',
  'Knob',
  'Listbox',
  'MultiSelect',
  'Password',
  'RadioButton',
  'Rating',
  'SelectButton',
  'Slider',
  'Textarea',
  'ToggleButton',
  'TreeSelect',
  'TriStateCheckbox',
]

const buttonComponentNames = [
  'Button',
  'SpeedDial',
  'SplitButton',
]

const dataComponentNames = [
  'Column',
  'ColumnGroup',
  'DataTable',
  'DataView',
  'DataViewLayoutOptions',
  'VirtualScroller',
  'FullCalendar',
  'OrderList',
  'OrganizationChart',
  'Paginator',
  'PickList',
  'Timeline',
  'Tree',
  'TreeTable',
]

const panelComponentNames = [
  'Accordion',
  'AccordionTab',
  'Card',
  'DeferredContent',
  'Divider',
  'Fieldset',
  'Panel',
  'Splitter',
  'SplitterPanel',
  'ScrollPanel',
  'TabView',
  'TabPanel',
  'Toolbar',
]

const overlayComponentNames = [
  'ConfirmDialog',
  'ConfirmPopup',
  'Dialog',
  'DynamicDialog',
  'OverlayPanel',
  'Sidebar',
  'Tooltip',
]

const fileComponentNames = [
  'FileUpload',
]

const menuComponentNames = [
  'Breadcrumb',
  'ContextMenu',
  'MegaMenu',
  'Menu',
  'Menubar',
  'PanelMenu',
  'Steps',
  'TabMenu',
  'TieredMenu',
  'Dock',
]

const chartComponentNames = [
  'Chart',
]

const messagesComponentNames = [
  'Message',
  'InlineMessage',
  'Toast',
]

const mediaComponentNames = [
  'Carousel',
  'Galleria',
  'Image',
]

const miscComponentNames = [
  'Avatar',
  'AvatarGroup',
  'Badge',
  'BlockUI',
  'Chip',
  'Inplace',
  'ProgressBar',
  'ProgressSpinner',
  'ScrollTop',
  'Skeleton',
  'Tag',
  'Terminal',
]

export const componentNames = [
  ...formComponentNames,
  ...buttonComponentNames,
  ...dataComponentNames,
  ...panelComponentNames,
  ...overlayComponentNames,
  ...fileComponentNames,
  ...menuComponentNames,
  ...chartComponentNames,
  ...messagesComponentNames,
  ...mediaComponentNames,
  ...miscComponentNames,
].sort()

export const globals = [
  ['PrimeVue', 'primevue/config', 'default'],
  ['PBadgeDirective', 'primevue/badgedirective', 'default'],
  ['PRipple', 'primevue/ripple', 'default'],
  ['PStyleClass', 'primevue/styleclass', 'default'],
  ['PTooltip', 'primevue/tooltip', 'default'],
  ['PFocusTrap', 'primevue/focustrap', 'default'],
  ['PConfirmationService', 'primevue/confirmationservice', 'default'],
  ['PToastService', 'primevue/toastservice', 'default'],
  ['PDialogService', 'primevue/dialogservice', 'default'],
  ['TerminalService', 'primevue/terminalservice', 'PTerminalService'],
]
