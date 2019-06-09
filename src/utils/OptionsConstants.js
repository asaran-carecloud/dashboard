export const SystemTypeOptions = [
  { label: 'Windows Workstation', value: 'WINDOWS_WORKSTATION' },
  { label: 'Mac', value: 'MAC' },
  { label: 'Windows Server', value: 'WINDOWS_SERVER' }
];

export const formatType = type =>
  ({
    WINDOWS_WORKSTATION: 'Windows Workstation',
    WINDOWS_SERVER: 'Windows Server',
    MAC: 'Mac'
  }[type]);
