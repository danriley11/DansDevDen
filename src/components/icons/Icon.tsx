import { ReactComponent as IconMenu } from './iconLibrary/menuIcon.svg';

const icons = {
  menu: IconMenu,
};

type IconProps = {
  id: keyof typeof icons;
  width?: number;
  height?: number;
};

const Icon = ({ id, width = 16, height = 16 }: IconProps) => {
  if (!id || !icons[id]) {
    console.error(`An invalid icon id has been provided. The id was ${id}`);
    return null;
  }

  const IconComponent = icons[id];

  return <IconComponent width={width} height={height} />;
};

export default Icon;
