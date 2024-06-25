import * as Icons from '@mui/icons-material';

const DynamicIcon = ({ iconName, onclick }) => {
  const IconComponent = Icons[iconName];

  return <IconComponent onClick={ onclick }/>;
};

export default DynamicIcon;