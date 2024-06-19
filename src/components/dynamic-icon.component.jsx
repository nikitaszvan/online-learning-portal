import * as Icons from '@mui/icons-material';

const DynamicIcon = ({ iconName, onClick }) => {
  const IconComponent = Icons[iconName];

  return <IconComponent onClick={ onClick } style={{ transform: iconName=='ExitToAppOutlined'? 'rotate(180deg)' : null}}/>;
};

export default DynamicIcon;