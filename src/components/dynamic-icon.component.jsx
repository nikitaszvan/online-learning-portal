import * as Icons from '@mui/icons-material';

const DynamicIcon = ({ iconName }) => {
  const IconComponent = Icons[iconName];

  return <IconComponent />;
};

export default DynamicIcon;