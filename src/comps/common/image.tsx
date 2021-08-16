import { useWidth } from 'utils';
import { ColorableBoxProps, ColorableBox } from 'comps/common';
import config from 'config';
import './image.scss';

export interface ImageProps extends ColorableBoxProps {
  path: string,  
  jpg?: boolean,
  width: any,
  height?: any,
  round?: boolean,
  oneSize?: boolean,
  btn?: boolean,
  alt?: string, 
}

export function Image(props: ImageProps) {
  const windowWidth = useWidth();  

  let className = 'Image';
  if (props.className)  className += ` ${props.className}`;
  if (props.round)      className += ' round';  
  if (props.btn)        className += ' btn';

  let size = '';
  if (!props.oneSize) {
    if      (windowWidth >= 992)  size = '_lg';
    else if (windowWidth >= 768)  size = '_md';
    else                          size = '_sm';
  }

  const ext = props.jpg ? 'jpg' : 'png';
  const src = `${config.staticUrl}/${props.path}${size}.${ext}`;
  const width = props.width;
  const height = props.height ? props.height : width;

  const style = { ...props.style, width, paddingTop: height };

  return (
    <ColorableBox {...props} className={className} style={style}>
      <img 
        height={height}
        width={width}
        src={src}
        alt={props.alt || 'image'}
      />
    </ColorableBox>
  );
}